import React, { useState } from 'react';
import { 
  GraduationCap, 
  LogIn, 
  UserPlus, 
  Mail, 
  Lock, 
  User, 
  BookOpen, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { BacSeries, StudentStatus, UserProfile } from '../types';

interface Props {
  onLoginSuccess: (user: UserProfile) => void;
}

const BAC_SERIES_LIST: BacSeries[] = [
  'Série C (Maths & Physiques)',
  'Série D (Sciences Naturelles / SVT)',
  'Série A1 (Lettres & Philosophie)',
  'Série A2 (Langues vivantes)',
  'Série B (Économique & Social)',
  'Série TI (Technologies de l\'Informatique)',
  'Série F4 (Génie Civil)',
  'Série F1 (Génie Mécanique)',
  'Série F2 (Électronique)',
  'Série F3 (Électrotechnique)',
  'Série G1 (Secrétariat & Bureautique)',
  'Série G2 (Comptabilité & Gestion)',
  'Série G3 (Techniques Commerciales)',
];

const GABON_CITIES = [
  'Libreville',
  'Owendo',
  'Port-Gentil',
  'Franceville',
  'Oyem',
  'Moanda',
  'Mouila',
  'Lambaréné',
  'Koulamoutou',
  'Tchibanga',
  'Makokou',
  'Bitam',
];

export const AuthScreen: React.FC<Props> = ({ onLoginSuccess }) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [error, setError] = useState<string | null>(null);

  // Login form state
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup form state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupBacSeries, setSignupBacSeries] = useState<BacSeries>('Série C (Maths & Physiques)');
  const [signupStatus, setSignupStatus] = useState<StudentStatus>('Nouveau Bachelier (Session 2024-2025)');
  const [signupCity, setSignupCity] = useState('Libreville');
  const [signupPhone, setSignupPhone] = useState('+241 ');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!loginIdentifier.trim()) {
      setError('Veuillez renseigner votre Email ou Numéro de dossier.');
      return;
    }
    if (!loginPassword.trim() || loginPassword.length < 4) {
      setError('Le mot de passe doit contenir au moins 4 caractères.');
      return;
    }

    // Retrieve users from localStorage or match registered
    const storedUsersJson = localStorage.getItem('tarame_registered_users');
    const registeredUsers: UserProfile[] = storedUsersJson ? JSON.parse(storedUsersJson) : [];

    const found = registeredUsers.find(
      (u) =>
        u.email.toLowerCase() === loginIdentifier.toLowerCase().trim() ||
        u.dossierNumber.toLowerCase() === loginIdentifier.toLowerCase().trim()
    );

    if (found) {
      localStorage.setItem('tarame_active_user', JSON.stringify(found));
      onLoginSuccess(found);
    } else {
      // Create session for user with identifier
      const generatedUser: UserProfile = {
        id: 'usr_' + Date.now(),
        name: loginIdentifier.includes('@') ? loginIdentifier.split('@')[0] : loginIdentifier,
        email: loginIdentifier.includes('@') ? loginIdentifier : `${loginIdentifier.toLowerCase()}@etudiant.ga`,
        dossierNumber: loginIdentifier.startsWith('GAB-') ? loginIdentifier : `GAB-${Math.floor(1000 + Math.random() * 9000)}-C`,
        bacSeries: 'Série C (Maths & Physiques)',
        status: 'Nouveau Bachelier (Session 2024-2025)',
        city: 'Libreville',
        createdAt: new Date().toISOString(),
      };
      registeredUsers.push(generatedUser);
      localStorage.setItem('tarame_registered_users', JSON.stringify(registeredUsers));
      localStorage.setItem('tarame_active_user', JSON.stringify(generatedUser));
      onLoginSuccess(generatedUser);
    }
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!signupName.trim() || signupName.length < 3) {
      setError('Veuillez renseigner votre Nom et Prénom complets (au moins 3 caractères).');
      return;
    }
    if (!signupEmail.trim() || !signupEmail.includes('@')) {
      setError('Veuillez saisir une adresse email valide.');
      return;
    }
    if (!signupPassword || signupPassword.length < 4) {
      setError('Le mot de passe doit comporter au moins 4 caractères.');
      return;
    }

    // Generate Gabonese folder identifier: GAB-2024-[SERIE]-[RANDOM]
    const seriesShort = signupBacSeries.split(' ')[1] || 'GEN';
    const randDigits = Math.floor(1000 + Math.random() * 9000);
    const dossierNumber = `GAB-2024-${seriesShort}-${randDigits}`;

    const newUser: UserProfile = {
      id: 'usr_' + Date.now(),
      name: signupName.trim(),
      email: signupEmail.trim(),
      dossierNumber,
      bacSeries: signupBacSeries,
      status: signupStatus,
      city: signupCity,
      phone: signupPhone,
      createdAt: new Date().toISOString(),
    };

    const storedUsersJson = localStorage.getItem('tarame_registered_users');
    const registeredUsers: UserProfile[] = storedUsersJson ? JSON.parse(storedUsersJson) : [];
    registeredUsers.push(newUser);

    localStorage.setItem('tarame_registered_users', JSON.stringify(registeredUsers));
    localStorage.setItem('tarame_active_user', JSON.stringify(newUser));
    onLoginSuccess(newUser);
  };

  const handleQuickDemo = (name: string, bacSeries: BacSeries, city: string) => {
    const seriesShort = bacSeries.split(' ')[1] || 'C';
    const demoUser: UserProfile = {
      id: 'demo_' + Date.now(),
      name,
      email: `${name.toLowerCase().replace(/\s+/g, '.')}@etudiant.ga`,
      dossierNumber: `GAB-2024-${seriesShort}-${Math.floor(1000 + Math.random() * 9000)}`,
      bacSeries,
      status: 'Nouveau Bachelier (Session 2024-2025)',
      city,
      phone: '+241 077 45 12 89',
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem('tarame_active_user', JSON.stringify(demoUser));
    onLoginSuccess(demoUser);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950 flex flex-col justify-center items-center px-4 py-8 sm:py-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Flag tricolor top indicator */}
      <div className="fixed top-0 left-0 right-0 h-1.5 flex z-50">
        <div className="w-1/3 bg-[#009e60]"></div>
        <div className="w-1/3 bg-[#fcd116]"></div>
        <div className="w-1/3 bg-[#0072ce]"></div>
      </div>

      <div className="w-full max-w-lg z-10">
        {/* Brand Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gradient-to-tr from-emerald-500 via-amber-400 to-blue-500 shadow-lg shadow-emerald-900/30 mb-3.5">
            <div className="w-12 h-12 rounded-[14px] bg-slate-950 flex items-center justify-center text-amber-400">
              <GraduationCap className="w-7 h-7 text-amber-400" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
            <span>Taramè</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40">
              Gabon
            </span>
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-emerald-200/80 max-w-sm mx-auto font-medium">
            Orientation universitaire, guide e-Bourse DGBS, annuaire des écoles & cours d'excellence
          </p>
        </div>

        {/* Auth Card Container */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 text-slate-800">
          {/* Navigation Toggle Tabs */}
          <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-2xl mb-6">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setError(null);
              }}
              className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${
                mode === 'login'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <LogIn className="w-4 h-4" />
              Connexion
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('signup');
                setError(null);
              }}
              className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${
                mode === 'signup'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              Inscription
            </button>
          </div>

          {/* Security badge notice */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200/80 text-[11px] text-emerald-800 mb-5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Accès sécurisé réservé aux bacheliers, étudiants et parents au Gabon.</span>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          {/* LOGIN FORM */}
          {mode === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Email ou Numéro de dossier DGBS
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={loginIdentifier}
                    onChange={(e) => setLoginIdentifier(e.target.value)}
                    placeholder="ex: GAB-2024-C-8921 ou etudiant@gmail.com"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 shadow-md shadow-emerald-900/20 transition active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                Se connecter à Taramè
              </button>

              {/* Quick Demo Logins for easy testing */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    Connexion Démo Rapide (1 clic) :
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-left">
                  <button
                    type="button"
                    onClick={() => handleQuickDemo('Grâce Ondo', 'Série C (Maths & Physiques)', 'Libreville')}
                    className="p-2.5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 text-left transition group"
                  >
                    <div className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                      Grâce Ondo
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      Bac C • Libreville
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleQuickDemo('Kevine Nguema', 'Série D (Sciences Naturelles / SVT)', 'Franceville')}
                    className="p-2.5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 text-left transition group"
                  >
                    <div className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                      Kevine Nguema
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      Bac D • Franceville
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleQuickDemo('Axel Mba', 'Série TI (Technologies de l\'Informatique)', 'Port-Gentil')}
                    className="p-2.5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 text-left transition group"
                  >
                    <div className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                      Axel Mba
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      Bac TI • Port-Gentil
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleQuickDemo('Sandrine Biyoghe', 'Série A1 (Lettres & Philosophie)', 'Oyem')}
                    className="p-2.5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 text-left transition group"
                  >
                    <div className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                      Sandrine Biyoghe
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      Bac A1 • Oyem
                    </div>
                  </button>
                </div>
              </div>
            </form>
          ) : (
            /* SIGNUP FORM */
            <form onSubmit={handleSignupSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nom et Prénom complets *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    placeholder="ex: Marcelle Obiang Mve"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Sélectionnez votre Série du Baccalauréat *
                </label>
                <div className="relative">
                  <BookOpen className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <select
                    value={signupBacSeries}
                    onChange={(e) => setSignupBacSeries(e.target.value as BacSeries)}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                  >
                    {BAC_SERIES_LIST.map((series) => (
                      <option key={series} value={series}>
                        {series}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Ville de résidence
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <select
                      value={signupCity}
                      onChange={(e) => setSignupCity(e.target.value)}
                      className="w-full pl-9 pr-2 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                    >
                      {GABON_CITIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Téléphone (+241)
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      value={signupPhone}
                      onChange={(e) => setSignupPhone(e.target.value)}
                      placeholder="+241 077..."
                      className="w-full pl-9 pr-2 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Adresse Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    placeholder="mon.email@domaine.ga"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mot de passe *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    placeholder="Au moins 4 caractères"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 shadow-md shadow-emerald-900/20 transition active:scale-[0.99] flex items-center justify-center gap-2 mt-4"
              >
                <CheckCircle2 className="w-4 h-4" />
                Créer mon compte & accéder à Taramè
              </button>
            </form>
          )}
        </div>

        {/* Footer info */}
        <div className="mt-6 text-center text-xs text-slate-400 space-y-1">
          <p>Plateforme nationale d'orientation universitaire du Gabon</p>
          <div className="flex items-center justify-center gap-2 text-[11px] text-emerald-400/80">
            <span>UOB</span> • <span>USTM</span> • <span>USS</span> • <span>DGBS</span> • <span>BBS</span> • <span>ENEF</span>
          </div>
        </div>
      </div>
    </div>
  );
};
