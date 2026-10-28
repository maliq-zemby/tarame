import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const publicDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Function to generate a valid uncompressed/deflated raw RGBA PNG
function createPNG(width, height, drawPixel) {
  // Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR Chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // Bit depth: 8
  ihdr[9] = 6; // Color type: 6 (RGBA)
  ihdr[10] = 0; // Compression method
  ihdr[11] = 0; // Filter method
  ihdr[12] = 0; // Interlace method

  function makeChunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(8 + len + 4);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4, 4, 'ascii');
    data.copy(buf, 8);
    const crc = crc32(buf.subarray(4, 8 + len));
    buf.writeInt32BE(crc, 8 + len);
    return buf;
  }

  // Raw image data with filter byte 0 at start of each scanline
  const scanlineLength = 1 + width * 4;
  const rawData = Buffer.alloc(scanlineLength * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * scanlineLength;
    rawData[rowOffset] = 0; // Filter None
    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const [r, g, b, a] = drawPixel(x, y, width, height);
      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const compressed = zlib.deflateSync(rawData, { level: 9 });
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// CRC32 table
const crcTable = new Int32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    if (c & 1) {
      c = 0xedb88320 ^ (c >>> 1);
    } else {
      c = c >>> 1;
    }
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return crc ^ -1;
}

// Icon Drawer: Gabon Tricolor Flag background gradient + central rounded emblem with "T" & graduation cap feel
function drawTaramIcon(x, y, w, h, isMaskable = false) {
  const normX = x / w;
  const normY = y / h;
  const cx = w / 2;
  const cy = h / 2;
  const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2) / (w / 2);

  // Background colors:
  // Top: Green #009e60 [0, 158, 96]
  // Middle: Yellow #fcd116 [252, 209, 22]
  // Bottom: Blue #0072ce [0, 114, 206]
  let bgR = 0, bgG = 158, bgB = 96;
  if (normY < 0.33) {
    bgR = 0; bgG = 158; bgB = 96;
  } else if (normY < 0.66) {
    bgR = 252; bgG = 209; bgB = 22;
  } else {
    bgR = 0; bgG = 114; bgB = 206;
  }

  // Draw central circular card with padding
  const cardRadius = isMaskable ? 0.38 : 0.44;
  if (dist < cardRadius) {
    // Card background: deep navy / teal #0b253a
    const cardEdge = Math.max(0, Math.min(1, (cardRadius - dist) * 40));
    
    // Within card: Draw stylized "T" and star
    const relX = (x - cx) / (w * cardRadius); // -1 to 1
    const relY = (y - cy) / (h * cardRadius); // -1 to 1

    // Stylized "T" bar: relY in [-0.45, -0.25], relX in [-0.55, 0.55]
    // Stylized "T" stem: relY in [-0.25, 0.50], relX in [-0.15, 0.15]
    const inTopBar = relY >= -0.45 && relY <= -0.22 && relX >= -0.55 && relX <= 0.55;
    const inStem = relY >= -0.22 && relY <= 0.48 && relX >= -0.14 && relX <= 0.14;
    // Graduation cap diamond above T
    const inCapDiamond = Math.abs(relX) * 1.5 + Math.abs(relY + 0.6) * 1.5 < 0.22;

    if (inTopBar || inStem) {
      // Golden yellow for T: #fcd116
      return [252, 209, 22, 255];
    }
    if (inCapDiamond) {
      // White accent
      return [255, 255, 255, 255];
    }

    // Inner card background: dark elegant emerald-navy
    return [
      Math.round(11 * cardEdge + bgR * (1 - cardEdge)),
      Math.round(41 * cardEdge + bgG * (1 - cardEdge)),
      Math.round(48 * cardEdge + bgB * (1 - cardEdge)),
      255
    ];
  }

  // Outer border / background
  return [bgR, bgG, bgB, 255];
}

console.log('Generating PNG icons for PWA...');
const pwa192 = createPNG(192, 192, (x, y, w, h) => drawTaramIcon(x, y, w, h, false));
fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), pwa192);

const pwa512 = createPNG(512, 512, (x, y, w, h) => drawTaramIcon(x, y, w, h, false));
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), pwa512);

const pwaMaskable = createPNG(512, 512, (x, y, w, h) => drawTaramIcon(x, y, w, h, true));
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), pwaMaskable);

const appleTouch = createPNG(180, 180, (x, y, w, h) => drawTaramIcon(x, y, w, h, false));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleTouch);

const favicon = createPNG(64, 64, (x, y, w, h) => drawTaramIcon(x, y, w, h, false));
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), favicon);

// Also generate high-quality SVG icon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="gabonFlag" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#009e60"/>
      <stop offset="33%" stop-color="#009e60"/>
      <stop offset="33%" stop-color="#fcd116"/>
      <stop offset="66%" stop-color="#fcd116"/>
      <stop offset="66%" stop-color="#0072ce"/>
      <stop offset="100%" stop-color="#0072ce"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
  </defs>
  <!-- Background with flag stripe subtle rounded squircle -->
  <rect width="512" height="512" rx="112" fill="url(#gabonFlag)"/>
  
  <!-- Central dark shield -->
  <circle cx="256" cy="256" r="180" fill="#0f2937" filter="url(#shadow)" stroke="#fcd116" stroke-width="6"/>
  
  <!-- Graduation Cap emblem above T -->
  <polygon points="256,120 330,152 256,184 182,152" fill="#ffffff" />
  <polygon points="182,152 182,174 256,206 330,174 330,152" fill="#e2e8f0" opacity="0.8"/>
  <circle cx="330" cy="155" r="4" fill="#fcd116"/>
  <line x1="330" y1="155" x2="344" y2="195" stroke="#fcd116" stroke-width="4" stroke-linecap="round"/>
  
  <!-- Stylized "T" in golden amber -->
  <path d="M 160 215 L 352 215 C 358 215 362 219 362 225 L 362 255 C 362 261 358 265 352 265 L 282 265 L 282 390 C 282 396 278 400 272 400 L 240 400 C 234 400 230 396 230 390 L 230 265 L 160 265 C 154 265 150 261 150 255 L 150 225 C 150 219 154 215 160 215 Z" fill="#fcd116"/>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgContent);
console.log('Successfully generated all PWA icons & assets!');
