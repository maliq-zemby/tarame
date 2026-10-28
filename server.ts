import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize GoogleGenAI SDK server-side
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

const SYSTEM_INSTRUCTION_GABON = `Tu es "Coach Taramè" (ou Mwali), le conseiller d'orientation universitaire et académique expert du système éducatif gabonais au sein de la plateforme "Taramè".
Ton rôle est d'accompagner les bacheliers, étudiants, enseignants et parents gabonais avec bienveillance, rigueur, réalisme et pragmatisme.

Expertise locale obligatoire :
1. Universités et Grandes Écoles Publiques au Gabon :
   - UOB (Université Omar Bongo - Libreville) : Droit, Sciences Économiques, Lettres et Sciences Humaines.
   - USTM (Université des Sciences et Techniques de Masuku - Franceville) : Faculté des Sciences, IUT (Génie Mécanique, Maintenance, Génie Électrique, Génie Civil), École Polytechnique de Masuku (EPM).
   - USS (Université des Sciences de la Santé - Owendo) : Médecine générale, Pharmacie, Sciences Biomédicales, Maïeutique (Sages-femmes), Infirmerie d'État. Blouses blanches et respect strict de la déontologie.
   - USTL (Université des Sciences et Technologies de Libreville).
   - ENEF (École Nationale des Eaux et Forêts - Cap Estérias) : Foresterie, Faune, Gestion des aires protégées, Environnement (formation paramilitaire et uniforme de terrain obligatoire).
   - INSG (Institut National des Sciences de Gestion - Libreville) : Finance, Comptabilité, Audit, Marketing. Tenue de ville correcte exigée.
   - ENSET & ENS : Formation des enseignants du secondaire et de l'enseignement technique.
2. Écoles Privées et Reconnues :
   - BBS (BGFI Business School) : Banque, Finance de marché, Audit, Management international. Tenue de ville / costume unifié.
   - EM-Gabon (École de Management du Gabon), ESGIS Libreville, IHEM, AFRAM, ISI.
3. Système e-Bourse de la DGBS (Direction Générale des Bourses et Stages) :
   - Critères d'attribution : Âge limite (strictement ≤ 22 ans pour l'entrée en 1er cycle / Licence 1).
   - Moyennes au Bac requises : Séries C, D et TI (en général ≥ 10/20 ou 11/20 selon le quota et la filière), Séries A1, A2, B, G (en général ≥ 12/20 avec examen des notes de matières dominantes).
   - Pièces indispensables : Acte de naissance légalisé, relevé de notes officiel du Bac, attestation de réussite, certificat de nationalité gabonaise, certificat médical d'aptitude, photos, attestation d'inscription/pré-inscription.
   - Filières prioritaires nationales : Santé, Ingénierie, Numérique/Informatique, BTP, Mines/Métallurgie, Foresterie/Écologie, Agriculture & Élevage.
4. Marché du travail gabonais :
   - Secteurs porteurs : Manganèse (Moanda / Comilog), Pétrole (Port-Gentil, Gamba), Numérique & Startups tech (Libreville), Transition écologique, BTP (Infrastructures), Éducation et Santé.
5. Cursus académique intégral de Taramè (Licence 1 au Doctorat / Ph.D. Bac+8) :
   - Filière Gestion complète : Comptabilité & Finance SYSCOHADA, Marketing & Stratégie Digitale, Hôtellerie et tourisme (écotourisme gabonais, parcs ANPN, Yield Management & RevPAR), Droit public et privé (sociétés commerciales OHADA, marchés publics DGMP), Gestion des institutions sanitaires (management des CHU/hôpitaux, couverture CNAMGS, Office Pharmaceutique National OPN), Gestion des organisations (configurations de Mintzberg, sociologie du pouvoir de Crozier, conduite agile du changement), Gestion des Ressources Humaines (GRH), Finance d'Entreprise & M&A, Logistique & Supply Chain, Audit & Contrôle de Gestion, ainsi que la Recherche Doctorale (Thèse de Doctorat / DBA).
   - Filière Médecine & Santé : Médecine Générale, Imagerie médicale (radiologie diagnostique, scanner TDM, échographie Doppler, IRM, radioprotection ALARA), Pharmacie & Toxicologie, jusqu'au Doctorat d'État en Médecine (M.D.) et spécialités cliniques DES.
   - Généralisation à toutes les filières jusqu'au Doctorat : Informatique (Dev Web/Mobile, Cyber, Ph.D.), Ingénierie (Mines, Pétrole offshore, Doctorat Mécanique des Fluides), Pilotage d'avion (PPL, ATPL, Sécurité des Vols), Génie civil (BTP Eurocode, Géotechnique tropicale) et Intelligence Artificielle (Deep Learning, Vision, Ph.D.).

Directives de communication :
- Adresse-toi à l'étudiant avec respect et encouragements, en tenant compte de son niveau (qu'il soit bachelier L1, étudiant de Master ou doctorant/chercheur), de sa série de Bac, de ses aspirations et de ses notes.
- Fournis des réponses structurées avec des puces claires, des exemples concrets et des conseils pratiques.
- N'invente pas d'informations fantaisistes : si une école a un concours d'entrée très sélectif (ex: ENEF, USS, INSG), préviens-le clairement.`;

// Explicit PWA Endpoints
app.get('/manifest.json', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/manifest+json; charset=utf-8');
  res.sendFile(path.resolve(__dirname, 'public/manifest.json'));
});

app.get('/sw.js', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  res.setHeader('Service-Worker-Allowed', '/');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.sendFile(path.resolve(__dirname, 'public/sw.js'));
});

// API Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    app: 'Taramè Gabon PWA',
    hasGeminiKey: Boolean(apiKey),
    timestamp: new Date().toISOString(),
  });
});

app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, history = [], userProfile } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message requis.' });
    }

    // Build personalized contextual prompt
    let contextualPrefix = '';
    if (userProfile) {
      contextualPrefix = `[Profil de l'étudiant connecté : Nom: ${userProfile.name || 'Étudiant'}, Série du Bac: ${userProfile.bacSeries || 'Non spécifiée'}, Ville: ${userProfile.city || 'Gabon'}, Projet: ${userProfile.targetField || 'En recherche'}]\n\n`;
    }

    if (!ai) {
      // Intelligent pedagogical fallback when API key is not yet set in environment
      const fallbackResponse = `Bonjour ${userProfile?.name || 'cher étudiant'} ! Je suis votre Coach Taramè. 

Actuellement en mode assistance académique gabonaise :
Pour votre question concernant **"${message.slice(0, 80)}"**, voici les repères clés :
1. **DGBS (e-Bourse)** : Veillez à respecter l'âge limite (≤ 22 ans au 1er cycle) et la moyenne requise pour votre série (${userProfile?.bacSeries || 'votre série'}). Préparez votre acte de naissance légalisé et votre relevé de Bac officiel.
2. **Choix de formation** :
   - En public : Consultez l'UOB, l'USTM (Franceville), l'USS (Owendo) ou l'INSG selon votre série.
   - En privé reconnu : BBS, EM-Gabon, ESGIS ou IHEM.
3. **Astuce Taramè** : Consultez l'onglet "Annuaire" pour voir les modalités d'accès et tenues exigées, et l'onglet "Guide e-Bourse" pour tester votre éligibilité avec notre simulateur.

*(Pour activer l'intelligence prédictive avancée, configurez votre clé GEMINI_API_KEY dans le panneau Secrets).*`;

      return res.json({ reply: fallbackResponse });
    }

    // Format contents with context
    const fullPrompt = `${contextualPrefix}Question de l'étudiant : ${message}`;

    // Helper for fast, reliable AI responses
    const fetchAIResponse = async (modelName: string, timeoutMs: number) => {
      return Promise.race([
        ai.models.generateContent({
          model: modelName,
          contents: fullPrompt,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION_GABON,
            temperature: 0.7,
          },
        }),
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error(`Timeout après ${timeoutMs}ms sur ${modelName}`)), timeoutMs)
        ),
      ]);
    };

    let reply = '';
    try {
      const response = await fetchAIResponse('gemini-3.8-flash', 6000);
      reply = response.text || '';
    } catch (primaryErr: any) {
      console.warn('Primary model (gemini-3.8-flash) timed out or failed, trying gemini-3.1-flash-lite:', primaryErr?.message);
      try {
        const fallbackRes = await fetchAIResponse('gemini-3.1-flash-lite', 8000);
        reply = fallbackRes.text || '';
      } catch (secErr: any) {
        console.warn('Fallback model also failed, using structured Gabon guidance fallback:', secErr?.message);
        // High quality rule-based orientation guidance for Gabon
        reply = `Bonjour ${userProfile?.name || 'cher étudiant'} ! 🇬🇦

Voici les éléments clés d'orientation pour votre demande :

1. **Parcours recommandés pour votre ${userProfile?.bacSeries || 'série'}** :
   - **Enseignement Public** : 
     • **USTM (Masuku)** : Filières Polytechnique (EPM) et IUT (Génie Civil, Électromécanique, Informatique industrielle).
     • **USS (Owendo)** : Faculté de Médecine et Sciences Biomédicales.
     • **UOB (Libreville)** : Droit, Sciences Économiques et Gestion.
     • **ENEF (Cap Estérias)** : Gestion forestière durable, Environnement et Faune.
     • **INSG (Libreville)** : Finance, Comptabilité et Audit.
   - **Grandes Écoles Privées Reconnues** : BBS (BGFI Business School), EM-Gabon, ESGIS (Informatique & IA).

2. **Critères d'attribution e-Bourse (DGBS)** :
   - **Âge limite** : Avoir au maximum 22 ans au 31 décembre pour le 1er cycle (Licence 1).
   - **Moyenne minimale** : ≥ 10/20 pour les séries C, D, TI et F ; ≥ 12/20 pour les séries A et G.
   - **Pièces obligatoires** : Acte de naissance légalisé, relevé de notes officiel du Bac (DGEC), certificat de nationalité gabonaise et certificat médical d'aptitude.

3. **Astuce Taramè** :
   Consultez notre onglet **"Annuaire des Écoles"** pour vérifier les modalités d'accès et tenues vestimentaires imposées, et l'onglet **"Guide e-Bourse"** pour lancer une simulation chiffrée.`;
      }
    }

    return res.json({ reply });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    return res.status(500).json({
      error: 'Erreur lors du traitement de votre demande avec le Coach Taramè.',
      details: error?.message || 'Erreur interne',
    });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  process.env.DISABLE_HMR = 'true';
  const http = await import('http');
  const httpServer = http.createServer(app);

  if (process.env.NODE_ENV !== 'production') {
    const { createServer } = await import('vite');

    const vite = await createServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist/index.html'));
    });
  }

  httpServer.listen(PORT, () => {
    console.log(`Taramè server running on port ${PORT}`);
  });
}

startServer();
