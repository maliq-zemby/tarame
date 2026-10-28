import React, { useState } from 'react';
import { 
  GraduationCap, 
  Bot, 
  Building2, 
  FileText, 
  BookOpen, 
  LogOut, 
  IdCard, 
  User as UserIcon,
  WifiOff
} from 'lucide-react';
import { UserProfile } from '../types';
import { PWAInstallButton } from './PWAInstallButton';
import { StudentCardModal } from './StudentCardModal';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export type NavTab = 'coach' | 'annuaire' | 'ebourse' | 'cours';

interface Props {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  user: UserProfile;
  onLogout: () => void;
}

export const Navbar: React.FC<Props> = ({ activeTab, setActiveTab, user, onLogout }) => {
  const [showCardModal, setShowCardModal] = useState(false);
  const isOnline = useOnlineStatus();

  const navItems = [
    { id: 'coach' as NavTab, label: 'Coach IA', icon: Bot, badge: 'Gemini' },
    { id: 'annuaire' as NavTab, label: 'Annuaire Écoles', icon: Building2, count: '13+' },
    { id: 'ebourse' as NavTab, label: 'Guide e-Bourse', icon: FileText, badge: 'DGBS' },
    { id: 'cours' as NavTab, label: 'Cours L1 à Doctorat', icon: BookOpen, badge: 'Bac+8' },
  ];

  return (
    <>
      {/* Top Navbar Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        {/* Tricolor Gabon bar */}
        <div className="h-1 flex w-full">
          <div className="w-1/3 bg-[#009e60]"></div>
          <div className="w-1/3 bg-[#fcd116]"></div>
          <div className="w-1/3 bg-[#0072ce]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setActiveTab('coach')}
              className="flex items-center gap-2.5 text-left focus:outline-hidden group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-700 to-emerald-900 flex items-center justify-center text-amber-300 shadow-sm group-hover:scale-105 transition">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                    Taramè
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-sm bg-emerald-100 text-emerald-800 border border-emerald-300">
                    GA
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 hidden sm:block font-medium">
                  Orientation & Réussite Gabon
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-2xl border border-slate-200/60">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                    isActive
                      ? 'bg-white text-emerald-800 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* User Profile, PWA install & actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Offline indicator if disconnected */}
            {!isOnline && (
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-semibold">
                <WifiOff className="w-3.5 h-3.5 text-amber-600" />
                <span className="hidden sm:inline">Hors-ligne</span>
              </div>
            )}

            {/* PWA Install Button */}
            <PWAInstallButton variant="nav" />

            {/* Student ID Card Button */}
            <button
              onClick={() => setShowCardModal(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition"
              title="Afficher ma carte d'étudiant Taramè"
            >
              <IdCard className="w-4 h-4 text-emerald-600" />
              <span className="hidden lg:inline">Ma Carte</span>
            </button>

            {/* User Pill */}
            <div className="flex items-center gap-2 pl-1 sm:pl-2">
              <div 
                onClick={() => setShowCardModal(true)}
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-amber-400 p-0.5 cursor-pointer shadow-xs"
              >
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-amber-400 font-bold text-xs">
                  {user.name.slice(0, 2).toUpperCase()}
                </div>
              </div>
              <div className="hidden xl:block text-left">
                <div className="text-xs font-bold text-slate-800 leading-tight truncate max-w-[120px]">
                  {user.name}
                </div>
                <div className="text-[10px] text-emerald-700 font-semibold truncate max-w-[120px]">
                  {user.bacSeries.split(' ')[1] || user.bacSeries}
                </div>
              </div>
            </div>

            {/* Logout button */}
            <button
              onClick={onLogout}
              className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
              title="Se déconnecter"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar (Mobile-First) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-lg px-2 py-1 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition ${
                isActive ? 'text-emerald-700 font-bold' : 'text-slate-500 font-medium'
              }`}
            >
              <div className={`p-1 rounded-xl transition ${isActive ? 'bg-emerald-100 text-emerald-800' : ''}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Student Card Modal */}
      {showCardModal && (
        <StudentCardModal user={user} onClose={() => setShowCardModal(false)} />
      )}
    </>
  );
};
