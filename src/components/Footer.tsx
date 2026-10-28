import React, { useState } from 'react';
import { 
  GraduationCap, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  Heart, 
  Compass, 
  Award, 
  Sparkles,
  BookOpen,
  Building2,
  FileText,
  Bot
} from 'lucide-react';
import { FounderModal } from './FounderModal';
import { NavTab } from './Navbar';

interface Props {
  setActiveTab: (tab: NavTab) => void;
}

export const Footer: React.FC<Props> = ({ setActiveTab }) => {
  const [showFounderModal, setShowFounderModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const founderEmail = 'maliqzemby8@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(founderEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-auto pb-16 md:pb-0">
        {/* Tricolor Gabon bar */}
        <div className="h-1.5 flex w-full">
          <div className="w-1/3 bg-[#009e60]"></div>
          <div className="w-1/3 bg-[#fcd116]"></div>
          <div className="w-1/3 bg-[#0072ce]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 space-y-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Column 1: Brand & Presentation */}
            <div className="md:col-span-4 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-amber-400 flex items-center justify-center font-black text-slate-950 shadow-sm">
                  T
                </div>
                <div>
                  <span className="font-extrabold text-white text-lg tracking-tight">Taramè</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-sm bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 ml-2">
                    Gabon 🇬🇦
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Plateforme Progressive Web App (PWA) de référence pour l'orientation universitaire, 
                le guide officiel e-Bourse DGBS, l'annuaire des grandes écoles et les cours magistraux 
                complets de la <strong>Licence 1 jusqu'au Doctorat (Bac+8)</strong>.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-semibold pt-1">
                <span>Libreville</span> • <span>Franceville</span> • <span>Port-Gentil</span> • <span>Oyem</span>
              </div>
            </div>

            {/* Column 2: Navigation Modules */}
            <div className="md:col-span-3 space-y-2.5">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">
                Modules de la Plateforme
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>
                  <button 
                    onClick={() => setActiveTab('coach')} 
                    className="hover:text-emerald-400 transition flex items-center gap-1.5"
                  >
                    <Bot className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Coach IA Mwali (Orientation & e-Bourse)</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('annuaire')} 
                    className="hover:text-emerald-400 transition flex items-center gap-1.5"
                  >
                    <Building2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Annuaire des Écoles (Tenues & Accès)</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('ebourse')} 
                    className="hover:text-emerald-400 transition flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Guide e-Bourse DGBS & Simulateur</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('cours')} 
                    className="hover:text-emerald-400 transition flex items-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Cours Intégraux (L1 à Doctorat Bac+8)</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: SECTION "À PROPOS DU FONDATEUR" (HIGHLIGHTED CARD) */}
            <div className="md:col-span-5 bg-gradient-to-br from-slate-800/90 to-emerald-950/60 p-5 rounded-3xl border border-emerald-500/30 text-white space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xs shadow-xs">
                    ZT
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-white">À propos du Fondateur</h4>
                    <span className="text-[10px] text-emerald-300 font-semibold">Visionnaire de Taramè Gabon</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                  🇬🇦 Nationalité Gabonaise
                </span>
              </div>

              <div className="text-xs space-y-1">
                <div className="text-amber-300 font-extrabold text-sm tracking-wide">
                  ZEMBY OBOUA Maliq Tary
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                  « Œuvrer pour que chaque jeune bachelier et étudiant gabonais ait un accès transparent, 
                  équitable et sans barrière aux filières d'excellence, aux bourses d'études de la DGBS, 
                  et à des cours complets pour réussir de la première année jusqu'à la thèse de Doctorat. »
                </p>
              </div>

              {/* Email & Actions */}
              <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <a 
                    href={`mailto:${founderEmail}`} 
                    className="font-mono text-emerald-300 hover:underline text-[11px]"
                  >
                    {founderEmail}
                  </a>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 px-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 text-[10px] font-semibold transition flex items-center gap-1"
                    title="Copier l'adresse email du fondateur"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-300">Copié</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copier</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setShowFounderModal(true)}
                    className="p-1 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold transition shadow-xs flex items-center gap-1"
                  >
                    <span>Manifeste</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Attribution */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>
              © 2024 - 2026 <strong>Taramè</strong> • Fondé par <strong>ZEMBY OBOUA Maliq Tary</strong> (Nationalité Gabonaise).
            </p>
            <div className="flex items-center gap-3 text-[11px]">
              <button 
                onClick={() => setShowFounderModal(true)} 
                className="hover:text-emerald-400 transition underline"
              >
                Vision du Fondateur
              </button>
              <span>•</span>
              <span>Conforme aux normes MESRST & DGBS</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Founder Dedicated Modal */}
      {showFounderModal && (
        <FounderModal onClose={() => setShowFounderModal(false)} />
      )}
    </>
  );
};
