import React, { useState } from 'react';
import { Download, Share2, PlusSquare, X, Smartphone, CheckCircle } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface Props {
  variant?: 'nav' | 'banner' | 'card';
}

export const PWAInstallButton: React.FC<Props> = ({ variant = 'nav' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  if (isInstalled) {
    return null;
  }

  const handleInstallClick = () => {
    if (isInstallable) {
      install();
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      // General instructions modal if browser doesn't support automatic prompt
      setShowIOSGuide(true);
    }
  };

  // Nav button style
  if (variant === 'nav') {
    return (
      <>
        <button
          onClick={handleInstallClick}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition active:scale-95"
          title="Installer Taramè sur Android ou iPhone"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Installer l'App</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-slate-100 text-slate-800">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Installer Taramè</h3>
                    <p className="text-xs text-slate-500">Accès hors-ligne & plein écran</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-5 space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <p>
                    {isIOS ? (
                      <>
                        Sur Safari, touchez le bouton <strong>Partager</strong> <Share2 className="inline w-3.5 h-3.5 mx-1 text-blue-600" /> dans la barre de navigation.
                      </>
                    ) : (
                      <>
                        Ouvrez le menu de votre navigateur (les 3 points verticaux en haut à droite).
                      </>
                    )}
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <p>
                    Faites défiler et sélectionnez{' '}
                    <strong>« Sur l'écran d'accueil »</strong> <PlusSquare className="inline w-3.5 h-3.5 mx-1 text-emerald-600" /> (ou « Installer l'application »).
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 text-emerald-900">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>
                    Validez : Taramè apparaîtra comme une vraie application sur votre écran d'accueil avec son icône gabonaise !
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition"
              >
                J'ai compris
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  // Floating bottom banner style
  if (variant === 'banner' && showBanner) {
    return (
      <>
        <div className="fixed bottom-16 sm:bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-40 sm:max-w-md bg-gradient-to-r from-slate-900 to-emerald-950 text-white p-3.5 rounded-2xl shadow-xl border border-emerald-500/30 flex items-center justify-between gap-3 animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
              <Download className="w-5 h-5 text-emerald-400 animate-bounce" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Installer l'application Taramè</p>
              <p className="text-[11px] text-emerald-200/80">Accédez aux cours et au coach même hors-ligne</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleInstallClick}
              className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-bold shadow-xs transition"
            >
              Installer
            </button>
            <button
              onClick={() => setShowBanner(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl text-slate-800">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-base font-bold text-slate-900">Installer sur votre appareil</h3>
                <button onClick={() => setShowIOSGuide(false)} className="text-slate-400">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Appuyez sur le menu de votre navigateur ou sur <strong>Partager</strong> <Share2 className="inline w-3.5 h-3.5 text-blue-600" />, puis sélectionnez <strong>« Sur l'écran d'accueil »</strong>.
              </p>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
              >
                Compris
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
