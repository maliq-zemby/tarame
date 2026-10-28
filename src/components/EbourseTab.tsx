import React, { useState } from 'react';
import { 
  FileText, 
  Calculator, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  HelpCircle, 
  CheckSquare, 
  Square, 
  ArrowRight, 
  RefreshCw, 
  UserCheck, 
  FolderCheck, 
  Download,
  Phone,
  Mail,
  MapPin,
  Sparkles
} from 'lucide-react';
import { BacSeries, UserProfile } from '../types';

interface Props {
  user: UserProfile;
}

interface ChecklistItem {
  id: string;
  label: string;
  description: string;
  required: boolean;
}

const REQUIRED_DOCUMENTS: ChecklistItem[] = [
  {
    id: 'doc1',
    label: 'Copie légalisée de l\'Acte de Naissance',
    description: 'Délivrée par une mairie gabonaise, datant de moins de 3 mois.',
    required: true,
  },
  {
    id: 'doc2',
    label: 'Certificat de Nationalité Gabonaise',
    description: 'Délivré par le Tribunal de Première Instance.',
    required: true,
  },
  {
    id: 'doc3',
    label: 'Relevé de Notes Officiel du Baccalauréat',
    description: 'Délivré par la Direction Générale des Examens et Concours (DGEC).',
    required: true,
  },
  {
    id: 'doc4',
    label: 'Attestation de Réussite au Baccalauréat',
    description: 'Original ou copie certifiée conforme avec sceau sec.',
    required: true,
  },
  {
    id: 'doc5',
    label: 'Certificat Médical d\'Aptitude',
    description: 'Établi par un médecin agréé de la santé publique au Gabon.',
    required: true,
  },
  {
    id: 'doc6',
    label: '2 Photos d\'identité récentes en couleur',
    description: 'Format standard 4x4 sur fond blanc neutre.',
    required: true,
  },
  {
    id: 'doc7',
    label: 'Attestation d\'inscription ou de pré-inscription',
    description: 'Délivrée par l\'université publique ou l\'établissement privé reconnu.',
    required: true,
  },
  {
    id: 'doc8',
    label: 'Relevé d\'Identité Bancaire (RIB)',
    description: 'Compte bancaire gabonais personnel au nom de l\'étudiant pour le virement.',
    required: false,
  },
];

export const EbourseTab: React.FC<Props> = ({ user }) => {
  const [activeSubTab, setActiveSubTab] = useState<'simulateur' | 'creation' | 'renouvellement' | 'pieces' | 'recours'>('simulateur');

  // Simulator Form State
  const [simAge, setSimAge] = useState<number>(19);
  const [simSeries, setSimSeries] = useState<string>(user.bacSeries || 'Série C (Maths & Physiques)');
  const [simAverage, setSimAverage] = useState<number>(12.5);
  const [simMention, setSimMention] = useState<string>('Assez-Bien');
  const [simDestination, setSimDestination] = useState<'Gabon' | 'Étranger'>('Gabon');
  const [simField, setSimField] = useState<string>('Ingénierie & Tech');

  // Checklist State
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    doc1: true,
    doc3: true,
    doc4: true,
  });

  const toggleDoc = (id: string) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(checkedDocs).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / REQUIRED_DOCUMENTS.length) * 100);

  // Eligibility Calculation Logic based on Gabonese DGBS Decree
  const calculateEligibility = () => {
    const isScientific = simSeries.includes('C') || simSeries.includes('D') || simSeries.includes('TI') || simSeries.includes('F');
    const isAgeValid = simAge <= 22; // Strict threshold for 1st cycle / Licence in Gabon
    const minAverageRequired = isScientific ? 10.0 : 12.0;

    let score = 0;
    const reasons: string[] = [];
    const recommendations: string[] = [];

    // Age evaluation
    if (simAge <= 20) {
      score += 35;
      reasons.push("Critère d'âge optimal (≤ 20 ans) : votre candidature est prioritaire.");
    } else if (simAge <= 22) {
      score += 25;
      reasons.push("Critère d'âge respecté (≤ 22 ans requis pour le premier cycle universitaire).");
    } else {
      reasons.push(`Âge limite dépassé (${simAge} ans > 22 ans) : le décret DGBS exige d'avoir au plus 22 ans pour une première bourse de 1er cycle.`);
      recommendations.push("Possibilité de demander une dérogation spéciale ou postuler aux bourses de mérite du second cycle (Master).");
    }

    // Average evaluation
    if (simAverage >= 14) {
      score += 45;
      reasons.push(`Excellente moyenne au Bac (${simAverage}/20) : éligibilité garantie aux bourses d'excellence (Gabon et étranger).`);
    } else if (simAverage >= minAverageRequired) {
      score += 30;
      reasons.push(`Moyenne de ${simAverage}/20 conforme au seuil réglementaire pour votre série (seuil requis: ${minAverageRequired}/20).`);
    } else {
      reasons.push(`Moyenne de ${simAverage}/20 inférieure au seuil recommandé de ${minAverageRequired}/20 pour la filière.`);
      recommendations.push("Optez pour les filières publiques à effectifs prioritaires (UOB, USTM) avec sélection sur quotas ministériels.");
    }

    // Destination & Field weighting
    if (simDestination === 'Étranger') {
      if (simAverage < 13.0) {
        recommendations.push("Pour une bourse à l'étranger (Maroc, Sénégal, France, etc.), la DGBS privilégie généralement les moyennes ≥ 13.0 ou 14.0.");
      } else {
        score += 15;
      }
    } else {
      score += 15;
    }

    // Priority sectors transition
    if (['Santé & Médecine', 'Ingénierie & Tech', 'Sciences & Forêt'].includes(simField)) {
      score += 10;
      reasons.push("Filière prioritaire du Plan National de Développement (PNDT) : quotas bonifiés.");
    }

    let status: 'favorable' | 'modere' | 'defavorable' = 'modere';
    if (score >= 70 && isAgeValid && simAverage >= minAverageRequired) {
      status = 'favorable';
    } else if (!isAgeValid || simAverage < 9.5) {
      status = 'defavorable';
    }

    return { score: Math.min(100, score), status, reasons, recommendations };
  };

  const simulation = calculateEligibility();

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 pb-24 md:pb-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-6 shadow-xl border border-emerald-600/30">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Direction Générale des Bourses et Stages (DGBS)
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Guide Complet de l'e-Bourse Gabon
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
              Tout pour réussir votre demande : simulateur d'éligibilité aux critères officiels, 
              démarches de création et renouvellement, pièces justificatives et recours.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center shrink-0 w-full md:w-auto">
            <span className="text-[11px] font-semibold text-emerald-200">Conditions Clés 1er Cycle</span>
            <div className="text-xl font-black text-amber-300 mt-0.5">Âge ≤ 22 ans</div>
            <div className="text-[11px] text-white/80">Moyenne ≥ 10 (Sciences) ou ≥ 12 (Lettres)</div>
          </div>
        </div>
      </div>

      {/* Sub Tabs Navigation */}
      <div className="flex overflow-x-auto no-scrollbar gap-2 bg-slate-100 p-1.5 rounded-2xl mb-6 border border-slate-200/80">
        <button
          onClick={() => setActiveSubTab('simulateur')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
            activeSubTab === 'simulateur'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          <Calculator className="w-4 h-4" />
          Simulateur d'Éligibilité
        </button>

        <button
          onClick={() => setActiveSubTab('creation')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
            activeSubTab === 'creation'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          <UserCheck className="w-4 h-4" />
          Créer son Compte e-Bourse
        </button>

        <button
          onClick={() => setActiveSubTab('renouvellement')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
            activeSubTab === 'renouvellement'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          <RefreshCw className="w-4 h-4" />
          Renouveler sa Bourse
        </button>

        <button
          onClick={() => setActiveSubTab('pieces')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
            activeSubTab === 'pieces'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          <FolderCheck className="w-4 h-4" />
          Pièces à Fournir ({completedCount}/{REQUIRED_DOCUMENTS.length})
        </button>

        <button
          onClick={() => setActiveSubTab('recours')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
            activeSubTab === 'recours'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          FAQ & Recours en cas de rejet
        </button>
      </div>

      {/* 1. SIMULATEUR D'ÉLIGIBILITÉ */}
      {activeSubTab === 'simulateur' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 shadow-xs border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-600" />
              Vos Paramètres Académiques
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Renseignez vos données pour tester vos chances d'attribution par la commission DGBS.
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                  <span>Âge au 31 décembre :</span>
                  <span className="text-emerald-700 font-extrabold">{simAge} ans</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="28"
                  value={simAge}
                  onChange={(e) => setSimAge(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>16 ans</span>
                  <span className="text-amber-600 font-bold">Limite DGBS 1er cycle : ≤ 22 ans</span>
                  <span>28 ans</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Série du Baccalauréat
                </label>
                <select
                  value={simSeries}
                  onChange={(e) => setSimSeries(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50"
                >
                  <option value="Série C (Maths & Physiques)">Série C (Maths & Physiques)</option>
                  <option value="Série D (Sciences Naturelles / SVT)">Série D (Sciences Naturelles / SVT)</option>
                  <option value="Série TI (Technologies de l'Informatique)">Série TI (Technologies de l'Informatique)</option>
                  <option value="Série A1 (Lettres & Philosophie)">Série A1 (Lettres & Philosophie)</option>
                  <option value="Série A2 (Langues vivantes)">Série A2 (Langues vivantes)</option>
                  <option value="Série B (Économique & Social)">Série B (Économique & Social)</option>
                  <option value="Série F4 (Génie Civil)">Série F4 (Génie Civil)</option>
                  <option value="Série G2 (Comptabilité & Gestion)">Série G2 (Comptabilité & Gestion)</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                  <span>Moyenne générale obtenue au Bac :</span>
                  <span className="text-emerald-700 font-extrabold">{simAverage.toFixed(2)} / 20</span>
                </div>
                <input
                  type="range"
                  min="9.0"
                  max="19.0"
                  step="0.1"
                  value={simAverage}
                  onChange={(e) => setSimAverage(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>9.0 / 20</span>
                  <span>10.0 (Admis)</span>
                  <span>12.0 (Assez-Bien)</span>
                  <span>14.0 (Bien)</span>
                  <span>19.0 / 20</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Destination visée
                  </label>
                  <select
                    value={simDestination}
                    onChange={(e) => setSimDestination(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-xs bg-slate-50"
                  >
                    <option value="Gabon">Au Gabon (Public ou Privé)</option>
                    <option value="Étranger">À l'Étranger (France, Maroc, Sénégal...)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Filière d'études
                  </label>
                  <select
                    value={simField}
                    onChange={(e) => setSimField(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-xs bg-slate-50"
                  >
                    <option value="Santé & Médecine">Santé & Médecine</option>
                    <option value="Ingénierie & Tech">Ingénierie & Tech</option>
                    <option value="Sciences & Forêt">Sciences & Forêt (ENEF)</option>
                    <option value="Gestion & Économie">Gestion & Économie (INSG)</option>
                    <option value="Droit & Lettres">Droit & Lettres (UOB)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-emerald-500/30">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Diagnostic Officiel DGBS
                </span>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    simulation.status === 'favorable'
                      ? 'bg-emerald-500 text-slate-950 font-black'
                      : simulation.status === 'modere'
                      ? 'bg-amber-400 text-slate-950 font-bold'
                      : 'bg-rose-500 text-white'
                  }`}
                >
                  {simulation.status === 'favorable'
                    ? 'Éligibilité Forte'
                    : simulation.status === 'modere'
                    ? 'Dossier Sous Réserve'
                    : 'Non Éligible (Règlement)'}
                </span>
              </div>

              {/* Score Meter */}
              <div className="flex items-end gap-3 mb-4">
                <div className="text-4xl sm:text-5xl font-black text-amber-300">
                  {simulation.score}
                  <span className="text-xl text-white/70">/100</span>
                </div>
                <div className="text-xs text-slate-300 mb-1">
                  Indice de probabilité d'attribution selon le décret en vigueur
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden mb-5">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    simulation.status === 'favorable'
                      ? 'bg-emerald-500'
                      : simulation.status === 'modere'
                      ? 'bg-amber-400'
                      : 'bg-rose-500'
                  }`}
                  style={{ width: `${simulation.score}%` }}
                ></div>
              </div>

              {/* Reasons */}
              <div className="space-y-2 mb-4">
                <div className="text-xs font-bold text-emerald-200">Points relevés sur votre dossier :</div>
                {simulation.reasons.map((r, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>

              {/* Recommendations */}
              {simulation.recommendations.length > 0 && (
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-amber-300">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Conseils Taramè pour optimiser vos chances :
                  </div>
                  {simulation.recommendations.map((rec, idx) => (
                    <p key={idx} className="text-[11px] leading-relaxed">
                      • {rec}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Basé sur le décret d'attribution des bourses (DGBS - Gabon)</span>
              <span className="font-bold text-amber-400">Session 2024 - 2025</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. ÉTAPES POUR CRÉER SON COMPTE */}
      {activeSubTab === 'creation' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-lg font-bold text-slate-900">
              Procédure Officielle de Création de Compte e-Bourse (DGBS)
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Suivez minutieusement ces 5 étapes sur la plateforme officielle <strong>ebourse.dgbs.ga</strong>.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                step: '1',
                title: 'Accès au portail et Inscription Initiale',
                desc: "Rendez-vous sur le site officiel de la DGBS. Cliquez sur 'Créer un compte'. Munissez-vous de votre Numéro de Table du Baccalauréat et de votre adresse email personnelle valide.",
                tip: "Utilisez impérativement une adresse email que vous consultez régulièrement : tous les avis de commission y seront envoyés.",
              },
              {
                step: '2',
                title: 'Remplissage de l\'État-Civil et Coordonnées',
                desc: 'Renseignez exactement les mêmes nom, prénom et date de naissance que ceux figurant sur votre Acte de Naissance légalisé et votre relevé de notes du Bac.',
                tip: 'Toute discordance orthographique (même un accent manquant) entraîne un rejet automatique du dossier par l\'algorithme de vérification.',
              },
              {
                step: '3',
                title: 'Choix Hiérarchisé des 3 Vœux d\'Orientation',
                desc: 'Sélectionnez vos 3 vœux d\'établissements et filières (Vœu 1, Vœu 2, Vœu 3) en cohérence avec votre série de Baccalauréat.',
                tip: 'Pour le Vœu 1, privilégiez une université ou école publique gabonaise (UOB, USTM, USS, INSG) pour maximiser vos chances d\'attribution.',
              },
              {
                step: '4',
                title: 'Numérisation et Téléversement des Pièces (Upload)',
                desc: 'Téléversez chacun des documents obligatoires au format PDF clair et lisible. La taille de chaque fichier ne doit pas dépasser 2 Mo.',
                tip: 'Scannez vos documents avec un vrai scanner ou une application de numérisation nette (évitez les photos sombres ou floues au smartphone).',
              },
              {
                step: '5',
                title: 'Validation Finale et Impression du Récépissé',
                desc: 'Vérifiez scrupuleusement le récapitulatif avant de cliquer sur \'Soumettre définitivement\'. Imprimez votre Fiche de Demande munie du Code-Barres officiel.',
                tip: 'Conservez précieusement ce récépissé avec son numéro de dossier (ex: GAB-2024-XXXX) qui vous servira pour le suivi et les réclamations.',
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-black flex items-center justify-center shrink-0 shadow-xs">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                  <div className="mt-2 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 inline-block">
                    💡 Conseil clé : {item.tip}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. RENOUVELLEMENT DE LA BOURSE */}
      {activeSubTab === 'renouvellement' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-lg font-bold text-slate-900">
              Procédure de Renouvellement Annuel (Étudiants Déjà Boursiers)
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Règles académiques et calendrier pour maintenir son allocation mensuelle auprès de la DGBS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
              <h4 className="font-bold text-sm text-emerald-900 mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Conditions d'Assiduité et de Moyenne
              </h4>
              <ul className="text-xs space-y-2 leading-relaxed text-emerald-900/90">
                <li>• Validation impérative de l'année universitaire en cours (Moyenne générale ≥ 10/20 ou obtention des 60 crédits ECTS semestriels).</li>
                <li>• Présence régulière aux examens et TP : aucun défaut d'assiduité non justifié.</li>
                <li>• Relevé de notes officiel signé par le Doyen ou le Directeur de l'établissement.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950">
              <h4 className="font-bold text-sm text-amber-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Règles sur les Redoublements
              </h4>
              <ul className="text-xs space-y-2 leading-relaxed text-amber-900/90">
                <li>• <strong>Un seul redoublement autorisé</strong> durant tout le cycle de Licence (L1, L2, L3).</li>
                <li>• En cas de second redoublement, la bourse est automatiquement suspendue par la DGBS.</li>
                <li>• Possibilité de rétablissement de la bourse l'année suivante si l'étudiant valide son niveau supérieur par ses propres moyens.</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
            <div className="font-bold text-slate-900">Période de dépôt des dossiers de renouvellement :</div>
            <p>
              Généralement ouverte entre <strong>août et octobre</strong> de chaque année. Connectez-vous sur votre espace e-Bourse existant avec votre matricule et téléversez votre relevé de notes annuel et certificat d'inscription de l'année suivante.
            </p>
          </div>
        </div>
      )}

      {/* 4. PIÈCES À FOURNIR & CHECKLIST */}
      {activeSubTab === 'pieces' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Checklist Interactive des Pièces à Fournir
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Cochez les documents déjà prêts pour mesurer l'avancement de votre dossier DGBS.
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-emerald-700">Progression : {progressPercent}%</span>
              <div className="w-32 h-2.5 rounded-full bg-slate-100 mt-1 overflow-hidden">
                <div
                  className="h-full bg-emerald-600 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {REQUIRED_DOCUMENTS.map((doc) => {
              const isChecked = Boolean(checkedDocs[doc.id]);
              return (
                <div
                  key={doc.id}
                  onClick={() => toggleDoc(doc.id)}
                  className={`p-4 rounded-2xl border transition cursor-pointer flex items-start gap-3.5 ${
                    isChecked
                      ? 'bg-emerald-50/60 border-emerald-300 text-emerald-950'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/70'
                  }`}
                >
                  <div className="mt-0.5 text-emerald-700">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs sm:text-sm font-bold ${isChecked ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                        {doc.label}
                      </span>
                      {doc.required && (
                        <span className="text-[10px] font-bold px-2 py-0.2 rounded-sm bg-rose-100 text-rose-800">
                          Obligatoire
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                      {doc.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between gap-4">
            <div>
              <strong>Note de conformité :</strong> Tout document falsifié ou incomplet entraîne l'exclusion immédiate et définitive des bourses de l'État Gabonais.
            </div>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shrink-0 transition"
            >
              Imprimer la Checklist
            </button>
          </div>
        </div>
      )}

      {/* 5. FAQ & RECOURS */}
      {activeSubTab === 'recours' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-lg font-bold text-slate-900">
              Questions Fréquentes & Procédure de Recours DGBS
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Que faire en cas de rejet de dossier ? Délais légaux et adresses utiles.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-sm text-slate-900 mb-1">
                Mon dossier a été rejeté avec la mention "Rejet pour non-conformité", que faire ?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vous disposez d'un délai de <strong>15 jours calendaires</strong> à compter de la publication des résultats de la Commission Technique d'Attribution pour déposer un recours gracieux. Connectez-vous sur votre compte e-Bourse, rendez-vous dans l'onglet 'Réclamations', joignez la pièce rectifiée accompagnée d'une lettre de recours motivée adressée à Monsieur le Directeur Général des Bourses et Stages.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-sm text-slate-900 mb-1">
                Quel est le montant de la bourse mensuelle au Gabon ?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pour le 1er cycle universitaire (Licence) au Gabon, l'allocation mensuelle est de <strong>66 000 FCFA</strong> (hors compléments d'équipement ou bourses spécifiques). À l'étranger, le barème varie selon le pays d'accueil (zone Afrique, Europe ou Amérique du Nord).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-sm text-slate-900 mb-1">
                Peut-on cumuler une bourse DGBS et une scolarité en grande école privée ?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Oui, si l'établissement privé au Gabon est homologué par l'État et accrédité par le CAMES (ex: BBS, EM-Gabon, ESGIS, IHEM). L'État prend en charge tout ou partie des frais d'inscription selon le contingent alloué annuellement.
              </p>
            </div>
          </div>

          {/* Contacts DGBS */}
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-2">
            <div className="font-bold text-xs text-emerald-900 uppercase tracking-wider">
              Contacts Physiques de la DGBS Gabon :
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>Hauts de Gué-Gué, Libreville</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>+241 011 73 18 20</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-700" />
                <span>contact@dgbs.ga</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
