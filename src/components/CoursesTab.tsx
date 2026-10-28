import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Printer, 
  Sparkles, 
  Award, 
  Brain, 
  Stethoscope, 
  Laptop, 
  Cpu, 
  Plane, 
  Factory, 
  HardHat, 
  Code2, 
  TrendingUp,
  FileCheck2,
  Clock,
  Eye,
  EyeOff,
  GraduationCap,
  Layers,
  Search,
  Filter,
  FileText
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { AcademicCycle, CourseModule } from '../types';

export const CoursesTab: React.FC = () => {
  const [selectedFiliere, setSelectedFiliere] = useState<string>('Gestion');
  const [selectedCycle, setSelectedCycle] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCourseId, setSelectedCourseId] = useState<string>(COURSES_DATA[0].id);
  const [expandedChapterId, setExpandedChapterId] = useState<string>('');
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  // Interactive Quiz state
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // List of all unique filières
  const filieres = [
    'Gestion',
    'Médecine',
    'Informatique',
    'Ingénierie',
    'Pilotage d\'avion',
    'Génie civil',
    'Intelligence Artificielle',
  ];

  const academicCycles = [
    'Tous',
    'Licence / BTS (Bac+1 à Bac+3)',
    'Master / Ingénieur (Bac+4 à Bac+5)',
    'Doctorat / Ph.D. (Bac+6 à Bac+8)',
  ];

  const getFiliereIcon = (filiere: string) => {
    switch (filiere) {
      case 'Gestion':
        return TrendingUp;
      case 'Médecine':
        return Stethoscope;
      case 'Informatique':
        return Laptop;
      case 'Ingénierie':
        return Cpu;
      case 'Pilotage d\'avion':
        return Plane;
      case 'Génie civil':
        return HardHat;
      case 'Intelligence Artificielle':
        return Brain;
      default:
        return BookOpen;
    }
  };

  // Filter modules by filière, academic cycle and optional search query
  const filteredModules = useMemo(() => {
    return COURSES_DATA.filter((m) => {
      const matchFiliere = m.filiere === selectedFiliere;
      const matchCycle = selectedCycle === 'Tous' || m.academicCycle === selectedCycle;
      const matchSearch =
        searchQuery === '' ||
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.speciality.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchFiliere && matchCycle && matchSearch;
    });
  }, [selectedFiliere, selectedCycle, searchQuery]);

  // Current selected active course
  const currentCourse = useMemo(() => {
    const found = filteredModules.find((m) => m.id === selectedCourseId);
    if (found) return found;
    return filteredModules[0] || COURSES_DATA[0];
  }, [filteredModules, selectedCourseId]);

  const toggleSolution = (exId: string) => {
    setRevealedSolutions((prev) => ({
      ...prev,
      [exId]: !prev[exId],
    }));
  };

  const handleSelectAnswer = (questionId: string, optionIndex: number) => {
    if (showQuizResults) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowQuizResults(false);
  };

  // Calculate Quiz Score
  const quizScore = currentCourse?.quiz?.reduce((score, q) => {
    return score + (userAnswers[q.id] === q.correctIndex ? 1 : 0);
  }, 0) || 0;

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 pb-24 md:pb-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-6 shadow-xl border border-emerald-600/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold mb-2.5">
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              Cursus Universitaire Intégral : Licence • Master • Doctorat (Bac+8)
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Programmes & Cours Complets Multi-Spécialités
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
              Explorez toutes les options de gestion (Marketing, RH, Finance, Supply Chain, Audit, SYSCOHADA) 
              et l'ensemble des filières de la première année jusqu'à la <strong>thèse de Doctorat (Ph.D.)</strong>.
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition shrink-0 self-start md:self-auto"
          >
            <Printer className="w-4 h-4 text-amber-300" />
            Imprimer / Exporter le cours
          </button>
        </div>
      </div>

      {/* 1. FILIERES SELECTOR TABS */}
      <div className="mb-4 overflow-x-auto no-scrollbar py-1">
        <div className="flex gap-2 min-w-max">
          {filieres.map((filiereName) => {
            const Icon = getFiliereIcon(filiereName);
            const isSelected = selectedFiliere === filiereName;
            return (
              <button
                key={filiereName}
                onClick={() => {
                  setSelectedFiliere(filiereName);
                  setSearchQuery('');
                  setUserAnswers({});
                  setShowQuizResults(false);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition border ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-900/20 scale-[1.02]'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-emerald-700'}`} />
                <span>{filiereName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. ACADEMIC CYCLE FILTER (LICENCE - MASTER - DOCTORAT) */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-200/80 mb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              Niveau Académique :
            </span>
            {academicCycles.map((cycle) => (
              <button
                key={cycle}
                onClick={() => setSelectedCycle(cycle)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                  selectedCycle === cycle
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cycle}
              </button>
            ))}
          </div>

          {/* Quick search input */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une option..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-slate-50 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Specialities pills for this filière */}
        <div className="pt-3 border-t border-slate-100">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
            Spécialités disponibles ({filteredModules.length}) :
          </span>
          <div className="flex flex-wrap gap-2">
            {filteredModules.map((m) => {
              const isSelected = currentCourse?.id === m.id;
              const isDoctorate = m.academicCycle.includes('Doctorat');
              const isMaster = m.academicCycle.includes('Master');

              return (
                <button
                  key={m.id}
                  onClick={() => {
                    setSelectedCourseId(m.id);
                    setExpandedChapterId(m.chapters[0]?.id || '');
                    setUserAnswers({});
                    setShowQuizResults(false);
                  }}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition border text-left flex items-center gap-2 ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      isDoctorate
                        ? 'bg-amber-500 ring-2 ring-amber-300'
                        : isMaster
                        ? 'bg-blue-500'
                        : 'bg-emerald-500'
                    }`}
                  ></span>
                  <span>{m.speciality}</span>
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded-md font-bold ${
                      isDoctorate
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : isMaster
                        ? 'bg-blue-100 text-blue-900 border border-blue-200'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {isDoctorate ? 'Bac+8' : isMaster ? 'Bac+5' : 'Bac+3'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Course Content Card */}
      {currentCourse ? (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 space-y-8">
          {/* Course Header */}
          <div className="border-b border-slate-100 pb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                Filière : {currentCourse.filiere}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-900 text-white">
                Option : {currentCourse.speciality}
              </span>
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full ${
                  currentCourse.academicCycle.includes('Doctorat')
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : currentCourse.academicCycle.includes('Master')
                    ? 'bg-blue-100 text-blue-900 border border-blue-200'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                {currentCourse.academicCycle}
              </span>
            </div>

            <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide mt-1">
              {currentCourse.curriculumTrack}
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1.5">
              {currentCourse.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {currentCourse.description}
            </p>

            <div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
              <span className="font-bold text-slate-700">Prérequis académiques :</span>
              <span>{currentCourse.prerequisites}</span>
            </div>
          </div>

          {/* DOCTORAL / MASTER THESIS CARD (IF APPLICABLE) */}
          {currentCourse.thesisOrCapstoneProject && (
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-slate-900/5 border border-amber-400/40 text-amber-950 shadow-xs">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black">
                  <Award className="w-4 h-4 text-slate-950" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-amber-950">
                    Projet de Recherche Doctorale & Thèse de Doctorat
                  </h3>
                  <p className="text-[11px] text-amber-800 font-medium">
                    Sujet de thèse agréé par l'École Doctorale & Protocole de Soutenance
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-800 bg-white/80 p-3.5 rounded-2xl border border-amber-200/60 mt-2 font-serif">
                "{currentCourse.thesisOrCapstoneProject}"
              </p>
            </div>
          )}

          {/* 1. COURS MAGISTRAUX & CHAPITRES */}
          <div>
            <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              Chapitres et Contenu du Cours
            </h3>

            <div className="space-y-4">
              {currentCourse.chapters.map((chapter) => {
                const isExpanded = expandedChapterId === chapter.id || expandedChapterId === '';
                return (
                  <div
                    key={chapter.id}
                    className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 transition"
                  >
                    <button
                      onClick={() => setExpandedChapterId(isExpanded ? 'closed' : chapter.id)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-[11px] text-emerald-700 font-bold mb-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{chapter.duration}</span>
                        </div>
                        <h4 className="font-bold text-sm sm:text-base text-slate-900">
                          {chapter.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                          {chapter.summary}
                        </p>
                      </div>
                      <div className="p-1 rounded-lg bg-slate-100 text-slate-500">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200/80 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {chapter.content.map((paragraph, pIdx) => (
                          <p key={pIdx} className="leading-relaxed">
                            {paragraph}
                          </p>
                        ))}

                        {chapter.keyFormulasOrConcepts && chapter.keyFormulasOrConcepts.length > 0 && (
                          <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1.5">
                            <div className="font-bold text-xs text-emerald-900 flex items-center gap-1.5">
                              <Sparkles className="w-4 h-4 text-emerald-600" />
                              Concepts Fondamentaux & Formules Clés :
                            </div>
                            {chapter.keyFormulasOrConcepts.map((item, fIdx) => (
                              <div
                                key={fIdx}
                                className="font-mono text-xs text-emerald-900 bg-white/70 px-2.5 py-1 rounded-md border border-emerald-100"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. FICHE MÉMO EXAMEN */}
          <div className="p-5 sm:p-6 rounded-3xl bg-amber-50/70 border border-amber-200/90 text-amber-950">
            <h3 className="text-sm sm:text-base font-extrabold text-amber-950 flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-amber-600" />
              Fiche Mémo • Points Clés & Synthèse d'Évaluation
            </h3>
            <div className="space-y-2">
              {currentCourse.keySummary.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. EXERCICES D'APPLICATION CORRIGÉS */}
          {currentCourse.exercises && currentCourse.exercises.length > 0 && (
            <div>
              <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-emerald-600" />
                Exercices d'Application & Corrigés Détaillés
              </h3>

              <div className="space-y-4">
                {currentCourse.exercises.map((ex) => {
                  const isRevealed = Boolean(revealedSolutions[ex.id]);
                  return (
                    <div key={ex.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                      <h4 className="font-bold text-sm text-slate-900 mb-2">
                        {ex.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100 whitespace-pre-line mb-3">
                        {ex.statement}
                      </p>

                      <button
                        onClick={() => toggleSolution(ex.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                      >
                        {isRevealed ? (
                          <>
                            <EyeOff className="w-3.5 h-3.5" />
                            Masquer le Corrigé
                          </>
                        ) : (
                          <>
                            <Eye className="w-3.5 h-3.5 text-emerald-600" />
                            Afficher le Corrigé Détaillé
                          </>
                        )}
                      </button>

                      {isRevealed && (
                        <div className="mt-3 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 text-xs sm:text-sm leading-relaxed whitespace-pre-line animate-in fade-in duration-200">
                          <div className="font-bold text-emerald-900 mb-1">
                            Solution officielle rédigée :
                          </div>
                          {ex.solution}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 4. QCM D'AUTO-ÉVALUATION INTERACTIF */}
          {currentCourse.quiz && currentCourse.quiz.length > 0 && (
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-emerald-600" />
                    Testez vos Connaissances (QCM Interactif)
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Évaluez votre compréhension immédiate de cette option.
                  </p>
                </div>

                {showQuizResults && (
                  <div className="flex items-center gap-3">
                    <div className="text-xs font-bold px-3 py-1.5 rounded-xl bg-emerald-600 text-white shadow-xs">
                      Score : {quizScore} / {currentCourse.quiz.length} (
                      {Math.round((quizScore / currentCourse.quiz.length) * 100)}%)
                    </div>
                    <button
                      onClick={handleResetQuiz}
                      className="text-xs text-slate-500 hover:text-slate-800 underline font-semibold"
                    >
                      Recommencer
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-5">
                {currentCourse.quiz.map((q, qIndex) => {
                  const selectedOpt = userAnswers[q.id];

                  return (
                    <div key={q.id} className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200">
                      <div className="font-bold text-xs sm:text-sm text-slate-900 mb-3">
                        {qIndex + 1}. {q.question}
                      </div>

                      <div className="space-y-2">
                        {q.options.map((option, optIdx) => {
                          const isChosen = selectedOpt === optIdx;
                          const isCorrect = q.correctIndex === optIdx;

                          let optionStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';
                          if (showQuizResults) {
                            if (isCorrect) {
                              optionStyle = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                            } else if (isChosen && !isCorrect) {
                              optionStyle = 'bg-rose-100 border-rose-300 text-rose-900 line-through';
                            }
                          } else if (isChosen) {
                            optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={showQuizResults}
                              onClick={() => handleSelectAnswer(q.id, optIdx)}
                              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition flex items-center justify-between ${optionStyle}`}
                            >
                              <span>{option}</span>
                              {showQuizResults && isCorrect && (
                                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {showQuizResults && (
                        <div className="mt-3 p-3 rounded-xl bg-slate-100 border border-slate-200 text-[11px] text-slate-600 leading-relaxed">
                          <strong>Explication académique :</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!showQuizResults && (
                <button
                  onClick={() => setShowQuizResults(true)}
                  disabled={Object.keys(userAnswers).length === 0}
                  className="mt-5 w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs transition disabled:opacity-40"
                >
                  Valider mes réponses et voir mon score
                </button>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="font-bold text-base text-slate-800">Aucun cours trouvé pour cette sélection</h3>
          <p className="text-xs text-slate-500 mt-1">
            Modifiez le filtre de cycle académique ou le mot-clé de recherche.
          </p>
        </div>
      )}
    </div>
  );
};
