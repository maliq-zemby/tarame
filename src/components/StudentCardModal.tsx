import React from 'react';
import { X, Award, MapPin, Calendar, QrCode, Printer, CheckCircle2 } from 'lucide-react';
import { UserProfile } from '../types';

interface Props {
  user: UserProfile;
  onClose: () => void;
}

export const StudentCardModal: React.FC<Props> = ({ user, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 text-slate-800">
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-sm text-slate-900">Carte Numérique Étudiant Gabon</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Card Body - Designed like a formal Gabonese Academic Pass */}
        <div className="p-6">
          <div className="relative rounded-2xl p-5 text-white shadow-xl overflow-hidden bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 border border-emerald-600/40">
            {/* National tricolor ribbon banner */}
            <div className="absolute top-0 left-0 right-0 h-2 flex">
              <div className="w-1/3 bg-[#009e60]"></div>
              <div className="w-1/3 bg-[#fcd116]"></div>
              <div className="w-1/3 bg-[#0072ce]"></div>
            </div>

            {/* Background watermark */}
            <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none">
              <svg width="180" height="180" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm0 8.5L3.5 7 12 3.1 20.5 7 12 10.5zM12 14c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6z"/>
              </svg>
            </div>

            {/* Institution header */}
            <div className="flex items-center justify-between mt-1 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-amber-400 flex items-center justify-center font-black text-slate-950 text-base shadow-sm">
                  T
                </div>
                <div>
                  <div className="text-[10px] tracking-wider font-semibold text-emerald-200 uppercase">
                    RÉPUBLIQUE GABONAISE
                  </div>
                  <div className="text-xs font-bold text-white tracking-tight">
                    TARAMÈ • PASSEPORT ORIENTATION
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  Actif
                </span>
              </div>
            </div>

            {/* Student info */}
            <div className="flex gap-4 items-center my-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-emerald-600 p-0.5 shadow-md shrink-0">
                <div className="w-full h-full rounded-[14px] bg-slate-900 flex items-center justify-center text-amber-400 font-extrabold text-xl">
                  {user.name.slice(0, 2).toUpperCase()}
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-extrabold text-white truncate tracking-wide">
                  {user.name}
                </div>
                <div className="text-[11px] font-semibold text-amber-300 truncate mt-0.5">
                  {user.bacSeries}
                </div>
                <div className="text-[10px] text-slate-300 font-mono mt-0.5">
                  N° Dossier: {user.dossierNumber}
                </div>
              </div>
            </div>

            {/* Metadata tags */}
            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10 text-[11px]">
              <div className="flex items-center gap-1.5 text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">{user.city || 'Libreville'}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-200">
                <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">Année 2024 - 2025</span>
              </div>
            </div>

            {/* Barcode & Security stamp */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <QrCode className="w-7 h-7 text-white/90" />
                <div className="space-y-0.5">
                  <div className="h-2 w-28 bg-white/70 rounded-xs"></div>
                  <div className="text-[9px] font-mono text-emerald-200/90 tracking-widest">
                    {user.dossierNumber}
                  </div>
                </div>
              </div>
              <div className="text-[9px] font-bold text-amber-400 tracking-wider uppercase border border-amber-400/40 px-2 py-0.5 rounded-md">
                DGBS & MESRST
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-5 flex gap-3">
            <button
              onClick={handlePrint}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-xs"
            >
              <Printer className="w-4 h-4" />
              Imprimer ma carte
            </button>
            <button
              onClick={onClose}
              className="py-2.5 px-5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
