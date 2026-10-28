export type BacSeries = 
  | 'Série C (Maths & Physiques)'
  | 'Série D (Sciences Naturelles / SVT)'
  | 'Série A1 (Lettres & Philosophie)'
  | 'Série A2 (Langues vivantes)'
  | 'Série B (Économique & Social)'
  | 'Série TI (Technologies de l\'Informatique)'
  | 'Série F4 (Génie Civil)'
  | 'Série F1 (Génie Mécanique)'
  | 'Série F2 (Électronique)'
  | 'Série F3 (Électrotechnique)'
  | 'Série G1 (Secrétariat & Bureautique)'
  | 'Série G2 (Comptabilité & Gestion)'
  | 'Série G3 (Techniques Commerciales)';

export type StudentStatus = 
  | 'Nouveau Bachelier (Session 2024-2025)'
  | 'Étudiant en Licence 1 / BTS 1'
  | 'Étudiant en Licence 2 / Licence 3'
  | 'Étudiant en Master / Doctorat'
  | 'Parent d\'élève / Enseignant';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  dossierNumber: string;
  bacSeries: BacSeries;
  status: StudentStatus;
  city: string;
  phone?: string;
  targetField?: string;
  avatarSeed?: string;
  createdAt: string;
}

export type SchoolType = 'Publique' | 'Privée Reconnue' | 'Institut International';

export type SchoolCategory = 'Santé & Médecine' | 'Ingénierie & Tech' | 'Sciences & Forêt' | 'Gestion & Économie' | 'Droit & Lettres' | 'Pédagogie & Normales';

export interface School {
  id: string;
  name: string;
  acronym: string;
  type: SchoolType;
  category: SchoolCategory;
  city: string;
  address: string;
  foundedYear: string;
  reputation: string;
  overview: string;
  history: string;
  filieres: string[];
  diplomas: string[];
  admissionModalities: string;
  cost: string;
  tenueVestimentaire: string;
  contacts: {
    phone?: string;
    email?: string;
    website?: string;
    secretariat?: string;
  };
  keyFeatures: string[];
}

export interface CourseChapter {
  id: string;
  title: string;
  duration: string;
  summary: string;
  content: string[];
  keyFormulasOrConcepts?: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ExerciseItem {
  id: string;
  title: string;
  statement: string;
  solution: string;
}

export type AcademicCycle = 
  | 'Licence / BTS (Bac+1 à Bac+3)'
  | 'Master / Ingénieur (Bac+4 à Bac+5)'
  | 'Doctorat / Ph.D. (Bac+6 à Bac+8)';

export interface CourseModule {
  id: string;
  filiere: 'Gestion' | 'Médecine' | 'Informatique' | 'Ingénierie' | 'Pilotage d\'avion' | 'Génie industriel' | 'Génie civil' | 'Génie informatique' | 'Intelligence Artificielle';
  speciality: string;
  academicCycle: AcademicCycle;
  title: string;
  level: string;
  curriculumTrack: string;
  description: string;
  prerequisites: string;
  thesisOrCapstoneProject?: string;
  chapters: CourseChapter[];
  keySummary: string[];
  exercises: ExerciseItem[];
  quiz: QuizQuestion[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'coach';
  text: string;
  timestamp: string;
  suggestedFollowUps?: string[];
}

