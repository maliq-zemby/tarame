/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AuthScreen } from './components/AuthScreen';
import { Navbar, NavTab } from './components/Navbar';
import { CoachIATab } from './components/CoachIATab';
import { DirectoryTab } from './components/DirectoryTab';
import { EbourseTab } from './components/EbourseTab';
import { CoursesTab } from './components/CoursesTab';
import { Footer } from './components/Footer';
import { PWAInstallButton } from './components/PWAInstallButton';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { UserProfile } from './types';
import { WifiOff } from 'lucide-react';

export default function App() {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [activeTab, setActiveTab] = useState<NavTab>('coach');
  const [prefilledCoachPrompt, setPrefilledCoachPrompt] = useState<string | null>(null);
  const isOnline = useOnlineStatus();

  // Load session from localStorage on startup
  useEffect(() => {
    try {
      const stored = localStorage.getItem('tarame_active_user');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.name) {
          setCurrentUser(parsed);
        }
      }
    } catch (e) {
      console.error('Failed to parse active user from localStorage', e);
    }
  }, []);

  const handleLoginSuccess = (user: UserProfile) => {
    setCurrentUser(user);
    setActiveTab('coach');
  };

  const handleLogout = () => {
    if (window.confirm('Voulez-vous vous déconnecter de Taramè ?')) {
      localStorage.removeItem('tarame_active_user');
      setCurrentUser(null);
    }
  };

  const handleAskCoachAboutSchool = (schoolName: string) => {
    setPrefilledCoachPrompt(`Parle-moi des conditions d'admission, filières et débouchés à ${schoolName}.`);
    setActiveTab('coach');
  };

  // 1. Mandatory Authentication Screen on startup if no active session
  if (!currentUser) {
    return <AuthScreen onLoginSuccess={handleLoginSuccess} />;
  }

  // 2. Authenticated Main Application with 4-Tab Navigation
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Offline Toast Banner */}
      {!isOnline && (
        <div className="bg-amber-500 text-white text-xs font-semibold py-1.5 px-4 text-center flex items-center justify-center gap-2 shadow-sm">
          <WifiOff className="w-3.5 h-3.5 animate-pulse" />
          <span>Mode Hors-Ligne activé : vos cours et données en cache restent accessibles.</span>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={currentUser}
        onLogout={handleLogout}
      />

      {/* Main Tab Content Area */}
      <main className="flex-1 w-full">
        {activeTab === 'coach' && (
          <CoachIATab 
            user={currentUser} 
            initialPrompt={prefilledCoachPrompt}
            onClearInitialPrompt={() => setPrefilledCoachPrompt(null)}
          />
        )}

        {activeTab === 'annuaire' && (
          <DirectoryTab onAskCoachAboutSchool={handleAskCoachAboutSchool} />
        )}

        {activeTab === 'ebourse' && (
          <EbourseTab user={currentUser} />
        )}

        {activeTab === 'cours' && (
          <CoursesTab />
        )}
      </main>

      {/* Global Footer including 'À propos du Fondateur' ZEMBY OBOUA Maliq Tary */}
      <Footer setActiveTab={setActiveTab} />

      {/* Floating PWA Install Reminder Banner for mobile/desktop browsers */}
      <PWAInstallButton variant="banner" />
    </div>
  );
}
