import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  Search, 
  MapPin, 
  Shirt, 
  BookOpen, 
  Award, 
  ExternalLink, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  X, 
  Filter,
  Bot
} from 'lucide-react';
import { SCHOOLS_DATA } from '../data/schoolsData';
import { School, SchoolCategory, SchoolType } from '../types';

interface Props {
  onAskCoachAboutSchool: (schoolName: string) => void;
}

export const DirectoryTab: React.FC<Props> = ({ onAskCoachAboutSchool }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('Tous');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [selectedCity, setSelectedCity] = useState<string>('Tous');
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);

  const categories = [
    'Tous',
    'Santé & Médecine',
    'Ingénierie & Tech',
    'Gestion & Économie',
    'Sciences & Forêt',
    'Droit & Lettres',
    'Pédagogie & Normales',
  ];

  const types = ['Tous', 'Publique', 'Privée Reconnue'];
  const cities = ['Tous', 'Libreville', 'Owendo', 'Franceville', 'Cap Estérias'];

  const filteredSchools = useMemo(() => {
    return SCHOOLS_DATA.filter((school) => {
      const matchesSearch =
        searchQuery === '' ||
        school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        school.acronym.toLowerCase().includes(searchQuery.toLowerCase()) ||
        school.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        school.filieres.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesType = selectedType === 'Tous' || school.type === selectedType;
      const matchesCategory = selectedCategory === 'Tous' || school.category === selectedCategory;
      const matchesCity = selectedCity === 'Tous' || school.city === selectedCity;

      return matchesSearch && matchesType && matchesCategory && matchesCity;
    });
  }, [searchQuery, selectedType, selectedCategory, selectedCity]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 pb-24 md:pb-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-6 shadow-xl border border-emerald-600/30">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold mb-3">
            <Building2 className="w-3.5 h-3.5" />
            Répertoire Officiel Supérieur Gabon
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Annuaire des Universités & Grandes Écoles
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Consultez les fiches détaillées des établissements publics et privés reconnus au Gabon : 
            historiques, filières, modalités d'admission, adresses et <strong>tenues vestimentaires imposées</strong>.
          </p>
        </div>

        {/* Quick search input */}
        <div className="mt-6 relative max-w-xl">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher par école (ex: USTM, USS, BBS), filière (ex: Médecine, IA) ou ville..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white text-slate-800 placeholder-slate-400 text-xs sm:text-sm shadow-md focus:outline-hidden focus:ring-2 focus:ring-amber-400"
          />
        </div>
      </div>

      {/* Filter bars */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-200/80 mb-6 space-y-3">
        {/* Type pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Statut :
          </span>
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                selectedType === t
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 mr-2">Discipline :</span>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                selectedCategory === c
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/60'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* City pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            Ville :
          </span>
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                selectedCity === city
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/60'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-4 px-1">
        <p className="text-xs text-slate-500 font-semibold">
          Affichage de <span className="font-bold text-slate-900">{filteredSchools.length}</span> établissement(s)
        </p>
      </div>

      {/* Schools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSchools.map((school) => {
          const isPublic = school.type === 'Publique';
          return (
            <div
              key={school.id}
              onClick={() => setSelectedSchool(school)}
              className="bg-white rounded-3xl p-5 shadow-xs hover:shadow-xl border border-slate-200/90 hover:border-emerald-500/50 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Header card tags */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-slate-900 to-emerald-950 flex items-center justify-center font-black text-amber-300 text-base shadow-sm group-hover:scale-105 transition">
                    {school.acronym.slice(0, 4)}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isPublic
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-purple-100 text-purple-800 border border-purple-200'
                      }`}
                    >
                      {school.type}
                    </span>
                    <span className="text-[10px] font-medium text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {school.city}
                    </span>
                  </div>
                </div>

                {/* Names */}
                <h3 className="font-extrabold text-base text-slate-900 group-hover:text-emerald-700 transition">
                  {school.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {school.reputation}
                </p>

                {/* Filières preview tags */}
                <div className="mt-3.5 space-y-1">
                  <div className="text-[11px] font-bold text-slate-700">Filières clés :</div>
                  <div className="flex flex-wrap gap-1">
                    {school.diplomas.slice(0, 2).map((dip, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium"
                      >
                        {dip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tenue Vestimentaire Highlight Box (SPEC REQUIREMENT) */}
                <div className="mt-4 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900">
                  <div className="font-bold flex items-center gap-1.5 text-amber-800 mb-0.5">
                    <Shirt className="w-3.5 h-3.5 text-amber-600" />
                    Tenue vestimentaire :
                  </div>
                  <p className="line-clamp-2 text-[10px] leading-tight text-amber-950/80">
                    {school.tenueVestimentaire}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-700 group-hover:underline">
                  Voir la fiche complète →
                </span>
                <span className="text-[10px] text-slate-400">Fondée en {school.foundedYear}</span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredSchools.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
          <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">Aucun établissement trouvé</h3>
          <p className="text-xs text-slate-500 mt-1">
            Essayez de modifier vos filtres ou votre mot-clé de recherche.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedType('Tous');
              setSelectedCategory('Tous');
              setSelectedCity('Tous');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}

      {/* FULL SCHOOL DOSSIER MODAL */}
      {selectedSchool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto border border-slate-100 text-slate-800">
            {/* Modal Header */}
            <div className="relative bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 text-white p-6 rounded-t-3xl">
              <button
                onClick={() => setSelectedSchool(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 font-black text-xl flex items-center justify-center shadow-lg">
                  {selectedSchool.acronym}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                      {selectedSchool.type}
                    </span>
                    <span className="text-[11px] text-emerald-200">
                      {selectedSchool.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-extrabold text-white mt-1">
                    {selectedSchool.name}
                  </h2>
                  <p className="text-xs text-emerald-100/80 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {selectedSchool.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Content Sections */}
            <div className="p-6 space-y-5 text-xs sm:text-sm">
              {/* Historique & Réputation */}
              <div>
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-emerald-600" />
                  Historique & Réputation Académique
                </h4>
                <p className="text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  {selectedSchool.history}
                </p>
              </div>

              {/* TENUE VESTIMENTAIRE (OBLIGATOIRE SELON BRIEF) */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-300 text-amber-950 shadow-xs">
                <h4 className="font-bold text-amber-900 text-sm flex items-center gap-2 mb-1.5">
                  <Shirt className="w-4 h-4 text-amber-600" />
                  Réglementation sur la Tenue Vestimentaire
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-amber-900/90 font-medium">
                  {selectedSchool.tenueVestimentaire}
                </p>
              </div>

              {/* Filières & Départements */}
              <div>
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  Filières et Départements d'Enseignement
                </h4>
                <div className="space-y-1.5">
                  {selectedSchool.filieres.map((fil, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-snug">{fil}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modalités d'accès & Coûts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-800 text-xs mb-1">
                    Modalités d'Accès & Concours :
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {selectedSchool.admissionModalities}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-800 text-xs mb-1">
                    Frais de Scolarité / Bourse :
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {selectedSchool.cost}
                  </p>
                </div>
              </div>

              {/* Contacts & Adresses */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-emerald-950">
                <div className="font-bold text-xs text-emerald-900 mb-2">
                  Contacts & Administration :
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedSchool.contacts.phone && (
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{selectedSchool.contacts.phone}</span>
                    </div>
                  )}
                  {selectedSchool.contacts.email && (
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="truncate">{selectedSchool.contacts.email}</span>
                    </div>
                  )}
                  {selectedSchool.contacts.website && (
                    <div className="flex items-center gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
                      <a
                        href={selectedSchool.contacts.website}
                        target="_blank"
                        rel="noreferrer"
                        className="underline truncate text-emerald-800"
                      >
                        {selectedSchool.contacts.website}
                      </a>
                    </div>
                  )}
                  {selectedSchool.contacts.secretariat && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{selectedSchool.contacts.secretariat}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Ask Coach AI action button */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => {
                    const schoolName = selectedSchool.name;
                    setSelectedSchool(null);
                    onAskCoachAboutSchool(schoolName);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 shadow-xs transition"
                >
                  <Bot className="w-4 h-4 text-amber-300" />
                  Poser des questions au Coach Taramè sur cette école
                </button>
                <button
                  onClick={() => setSelectedSchool(null)}
                  className="py-3 px-5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-xs transition"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
