import React, { useState } from 'react';
import { 
  X, 
  User, 
  Mail, 
  Globe, 
  Check, 
  Copy, 
  Award, 
  HeartHandshake, 
  Target, 
  Compass, 
  BookOpen, 
  Sparkles 
} from 'lucide-react';

interface Props {
  onClose: () => void;
}

export const FounderModal: React.FC<Props> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const founderEmail = 'maliqzemby8@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(founderEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 text-slate-800 max-h-[90vh] flex flex-col">
        {/* Tricolor Gabon bar */}
        <div className="h-2 flex w-full shrink-0">
          <div className="w-1/3 bg-[#009e60]"></div>
          <div className="w-1/3 bg-[#fcd116]"></div>
          <div className="w-1/3 bg-[#0072ce]"></div>
        </div>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-950 text-white p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-emerald-500 p-0.5 shadow-lg shrink-0">
              <div className="w-full h-full rounded-[14px] bg-slate-900 flex items-center justify-center text-amber-300 font-black text-2xl">
                ZT
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  Fondateur & Concepteur
                </span>
                <span className="text-xs text-emerald-300 font-semibold flex items-center gap-1">
                  🇬🇦 Nationalité Gabonaise
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                ZEMBY OBOUA Maliq Tary
              </h2>
              <p className="text-xs text-emerald-100/90 font-medium">
                Architecte de la plateforme Taramè • Engagement pour l'excellence éducative au Gabon
              </p>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {/* Identity & Contact Card */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <span className="font-bold text-slate-500 block mb-0.5">Nom et Prénoms :</span>
              <span className="font-extrabold text-slate-900 text-sm">ZEMBY OBOUA Maliq Tary</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 block mb-0.5">Nationalité :</span>
              <span className="font-extrabold text-emerald-800 text-sm flex items-center gap-1.5">
                🇬🇦 Gabonaise
              </span>
            </div>
            <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-200/80">
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-emerald-600" />
                <span className="font-bold text-slate-700">Email officiel :</span>
                <a 
                  href={`mailto:${founderEmail}`}
                  className="font-mono text-emerald-700 hover:underline font-bold"
                >
                  {founderEmail}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="self-start sm:self-auto flex items-center gap-1 px-3 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-[11px] font-semibold transition"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copié</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copier l'email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Vision Statement */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Compass className="w-5 h-5 text-emerald-600" />
              <h3 className="font-extrabold text-base text-slate-900">
                La Vision du Fondateur pour la Jeunesse Gabonaise
              </h3>
            </div>
            <div className="bg-emerald-50/70 p-4 sm:p-5 rounded-2xl border border-emerald-200/90 text-emerald-950 space-y-3 font-medium">
              <p>
                « En créant <strong>Taramè</strong>, ma volonté fondamentale a été de briser la barrière de l'inégalité 
                informationnelle qui pénalise trop souvent les jeunes bacheliers et étudiants gabonais. 
                Que l'on vienne de Libreville, de Port-Gentil, de Franceville, d'Oyem, de Mouila ou des localités de l'intérieur, 
                chaque jeune gabonais a le droit inaliénable de savoir exactement quelles filières correspondent à ses talents, 
                quelles sont les démarches réelles pour obtenir sa bourse <strong>DGBS</strong>, et comment exceller de sa première année universitaire jusqu'au <strong>Doctorat (Bac+8)</strong>. »
              </p>
              <p>
                « Taramè n'est pas simplement un outil technologique : c'est un engagement patriotique pour doter le Gabon 
                d'une génération de cadres, d'ingénieurs, de médecins, de gestionnaires et de chercheurs hautement qualifiés, 
                prêts à relever les défis de notre développement national et de notre souveraineté économique. »
              </p>
            </div>
          </div>

          {/* Key Strategic Pillars */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide flex items-center gap-1.5">
              <Target className="w-4 h-4 text-emerald-600" />
              Les Piliers Stratégiques Portés par Maliq Tary ZEMBY OBOUA :
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs mb-2">
                  1
                </div>
                <h5 className="font-bold text-slate-900 text-xs mb-1">
                  Transparence & Équité
                </h5>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Accès libre, instantané et gratuit aux critères d'éligibilité e-Bourse et aux modalités d'admission des universités.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs mb-2">
                  2
                </div>
                <h5 className="font-bold text-slate-900 text-xs mb-1">
                  Excellence L1 au Doctorat
                </h5>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Fournir les supports de cours complets, exercices corrigés et pistes de recherche pour tous les cycles (Bac+1 à Bac+8).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs mb-2">
                  3
                </div>
                <h5 className="font-bold text-slate-900 text-xs mb-1">
                  Impact Local Concret
                </h5>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Former des compétences répondant directement aux besoins stratégiques du Gabon (Pétrole, Mines, Santé, BTP, Numérique).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between shrink-0">
          <div className="text-[11px] text-slate-500 font-semibold">
            Taramè • Conçu avec fierté pour la République Gabonaise
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
