import { CourseModule } from '../types';

export const COURSES_DATA: CourseModule[] = [
  // ==========================================
  // 1. GESTION (TOUTES OPTIONS DU BTS AU DOCTORAT)
  // ==========================================
  {
    id: 'gestion-comptabilite-l1',
    filiere: 'Gestion',
    speciality: 'Comptabilité & Analyse Financière (SYSCOHADA)',
    academicCycle: 'Licence / BTS (Bac+1 à Bac+3)',
    title: 'Comptabilité Générale, Fiscalité Gabonaise & États Financiers',
    level: 'Licence 1 / BTS 1 - Tronc Commun',
    curriculumTrack: 'Cycle 1 : Fondements Comptables & Financiers (OHADA)',
    description: 'Enregistrement normalisé des flux économiques, bilans, comptes de résultat et gestion de la TVA à 18% selon le référentiel SYSCOHADA Révisé en vigueur au Gabon.',
    prerequisites: 'Bases de calcul commercial, sens de l\'organisation et rigueur d\'analyse.',
    chapters: [
      {
        id: 'c1',
        title: 'Chapitre 1 : Les Fondements du Système Comptable OHADA & Équation du Bilan',
        duration: '6h de cours magistral & TD',
        summary: 'Patrimoine de l\'entreprise, partie double et les 9 classes du plan comptable SYSCOHADA.',
        content: [
          "Le patrimoine de l'entreprise est l'ensemble de ses avoirs et droits (Actif) et de ses obligations financières (Passif). L'équation fondamentale : Actif = Passif = Capitaux Propres + Dettes.",
          "La Partie Double : Tout flux financier implique un débit et un crédit équivalents (Principe d'équilibre obligatoire Débit = Crédit).",
          "Les 9 classes du SYSCOHADA : Classe 1 (Ressources durables), Classe 2 (Actif immobilisé), Classe 3 (Stocks), Classe 4 (Tiers), Classe 5 (Trésorerie), Classe 6 (Charges), Classe 7 (Produits), Classe 8 (HAO), Classe 9 (Comptabilité analytique).",
        ],
        keyFormulasOrConcepts: [
          'Actif Net Comptable = Total Actif - Dettes totales',
          'Résultat de l\'exercice = Total Produits (Cl 7 + 8) - Total Charges (Cl 6 + 8)',
          'Fonds de Roulement Net Global (FRNG) = Ressources Stables - Emplois Durables',
        ],
      },
      {
        id: 'c2',
        title: 'Chapitre 2 : Facturation, TVA Gabonaise (18%) & Opérations d\'Inventaire',
        duration: '8h de travaux dirigés',
        summary: 'Calcul des taxes, amortissements linéaires/dégressifs et provisions.',
        content: [
          "Au Gabon, la Taxe sur la Valeur Ajoutée (TVA) est fixée à 18% au taux normal. La TVA nette due à la Direction Générale des Impôts (DGI) = TVA collectée sur ventes - TVA déductible sur achats.",
          "Les réductions sur facture : Réductions commerciales (Rabais, Remise, Ristourne) qui ne s'enregistrent pas sur facture initiale, et réduction financière (Escompte de règlement) enregistrée en charge/produit financier.",
          "Amortissements : Dépréciation irréversible de l'actif immobilisé. L'annuité linéaire = Base amortissable × Taux d'amortissement.",
        ],
        keyFormulasOrConcepts: [
          'Net Commercial = Montant Brut - Réductions Commerciales',
          'Net Financier = Net Commercial - Escompte de règlement',
          'TVA à décaisser = TVA Facturée - TVA Déductible sur biens et services',
        ],
      },
    ],
    keySummary: [
      'Le bilan reflète le patrimoine à l\'instant t ; le compte de résultat mesure l\'enrichissement ou l\'appauvrissement sur une période.',
      'Le principe de prudence interdit de comptabiliser un gain potentiel mais oblige à constater une perte prévisible.',
    ],
    exercises: [
      {
        id: 'ex-g1',
        title: 'Exercice : Facturation avec Remise et TVA au Gabon',
        statement: "Une entreprise à Libreville vend du matériel pour un montant brut de 2 000 000 FCFA HT. Remise accordée : 10%. Escompte financier : 2%. TVA gabonaise : 18%. Calculez le Net Commercial, le montant de la TVA et le Net à Payer TTC.",
        solution: "1. Net Commercial = 2 000 000 - 200 000 = 1 800 000 FCFA.\n2. Escompte (2%) = 1 800 000 × 0.02 = 36 000 FCFA.\n3. Base soumise à TVA (Net Financier) = 1 764 000 FCFA.\n4. TVA (18%) = 1 764 000 × 0.18 = 317 520 FCFA.\n5. Net TTC à payer = 1 764 000 + 317 520 = 2 081 520 FCFA.",
      },
    ],
    quiz: [
      {
        id: 'q-g1',
        question: "Dans le SYSCOHADA, quel compte enregistre les dettes envers les fournisseurs de biens et services ?",
        options: ['Compte 401', 'Compte 411', 'Compte 521', 'Compte 601'],
        correctIndex: 0,
        explanation: "Le compte 401 'Fournisseurs d'exploitation' fait partie de la classe 4 (Comptes de tiers).",
      },
    ],
  },
  {
    id: 'gestion-marketing-l3',
    filiere: 'Gestion',
    speciality: 'Marketing & Stratégie Commerciale',
    academicCycle: 'Licence / BTS (Bac+1 à Bac+3)',
    title: 'Marketing Stratégique, Études de Marché & Digital Marketing en Afrique',
    level: 'Licence 3 / Bachelor Marketing & Vente',
    curriculumTrack: 'Cycle 1 : Spécialisation Marketing & Marchés Émergents',
    description: 'Segmentation, ciblage, positionnement (SCP), marketing mix 4P/7P et stratégies de communication multicanale adaptées aux consommateurs gabonais.',
    prerequisites: 'Principes d\'économie générale, sociologie de la consommation.',
    chapters: [
      {
        id: 'mkt-c1',
        title: 'Chapitre 1 : Démarche Stratégique SCP (Segmentation, Ciblage, Positionnement)',
        duration: '6h de cours',
        summary: 'Identifier les segments porteurs sur le marché gabonais et construire une proposition de valeur unique.',
        content: [
          "La segmentation consiste à découper un marché hétérogène en sous-ensembles homogènes de consommateurs partageant des besoins et comportements similaires.",
          "Le Ciblage : Choix des segments prioritaires sur lesquels l'entreprise concentrera ses ressources (concentré, différencié ou indifférencié).",
          "Le Positionnement : Place mentale distinctive et crédible que la marque occupe dans l'esprit du consommateur par rapport aux concurrents.",
        ],
        keyFormulasOrConcepts: [
          'Matrice SWOT (Forces, Faiblesses, Opportunités, Menaces)',
          'Part de marché = (Ventes de la marque / Ventes totales du marché) × 100',
        ],
      },
    ],
    keySummary: [
      'Un produit sans positionnement clair est invisible aux yeux des consommateurs.',
      'En Afrique Centrale, la recommandation par bouche-à-oreille et les canaux mobiles sont les premiers leviers de conversion.',
    ],
    exercises: [
      {
        id: 'ex-mkt1',
        title: 'Exercice : Calcul du Coût d\'Acquisition Client (CAC)',
        statement: "Une marque gabonaise investit 500 000 FCFA en publicité digitale. Elle génère 250 nouveaux clients payants. Calculez le CAC.",
        solution: "CAC = 500 000 FCFA / 250 clients = 2 000 FCFA par client acquis.",
      },
    ],
    quiz: [
      {
        id: 'q-mkt1',
        question: "Quelle stratégie de prix consiste à fixer un prix très bas pour conquérir rapidement des parts de marché ?",
        options: ['Stratégie d\'écrémage', 'Stratégie de pénétration', 'Stratégie d\'alignement', 'Stratégie de prestige'],
        correctIndex: 1,
        explanation: "La pénétration de marché vise à casser les prix pour attirer une large clientèle et créer des barrières à l'entrée.",
      },
    ],
  },
  {
    id: 'gestion-finance-audit-m2',
    filiere: 'Gestion',
    speciality: 'Finance d\'Entreprise, Audit & Contrôle de Gestion',
    academicCycle: 'Master / Ingénieur (Bac+4 à Bac+5)',
    title: 'Ingénierie Financière, Évaluation d\'Entreprise & Audit des Risques',
    level: 'Master 2 - Finance & Gouvernance',
    curriculumTrack: 'Cycle 2 : Décisions d\'Investissement & Gouvernance Bancaire',
    description: 'Modélisation des flux de trésorerie (DCF), analyse des fusions-acquisitions, cartographie des risques et normes internationales d\'audit (ISA / IFRS).',
    prerequisites: 'Analyse financière avancée, probabilités et mathématiques financières.',
    thesisOrCapstoneProject: 'Mémoire de Master 2 : "Impact de la volatilité des cours des matières premières (Pétrole & Manganèse) sur la structure financière des entreprises de la zone CEMAC".',
    chapters: [
      {
        id: 'fin-c1',
        title: 'Chapitre 1 : Évaluation d\'Entreprise par la méthode des Cash-Flows Actualisés (DCF)',
        duration: '8h de cours avancé',
        summary: 'Calcul du Coût Moyen Pondéré du Capital (CMPC/WACC) et valeur de marché des fonds propres.',
        content: [
          "La méthode DCF (Discounted Cash Flows) repose sur l'actualisation des flux de trésorerie futurs au Coût Moyen Pondéré du Capital (CMPC).",
          "Calcul du Coût des Capitaux Propres via le MEDAF (CAPM) : Re = Rf + β × (Rm - Rf) + Prime de risque pays.",
        ],
        keyFormulasOrConcepts: [
          'WACC / CMPC = [Ke × (E / (E + D))] + [Kd × (1 - Taux IS) × (D / (E + D))]',
          'Valeur des Fonds Propres = Valeur de l\'Entreprise - Dette Nette',
        ],
      },
    ],
    keySummary: [
      'La création de valeur économique (EVA) est positive seulement si le rendement du capital investi (ROIC) excède son coût (WACC).',
    ],
    exercises: [
      {
        id: 'ex-fin1',
        title: 'Exercice : Calcul du CMPC / WACC d\'une Société Énergétique',
        statement: "Capitaux propres E = 600M FCFA (Ke = 12%). Dette financière D = 400M FCFA (Kd = 7%). Taux IS Gabon = 30%. Calculez le CMPC.",
        solution: "Poids E = 60%, Poids D = 40%.\nKd après impôt = 7% × (1 - 0.30) = 4.9%.\nCMPC = (12% × 0.60) + (4.9% × 0.40) = 7.2% + 1.96% = 9.16%.",
      },
    ],
    quiz: [
      {
        id: 'q-fin1',
        question: "Dans le modèle MEDAF (CAPM), que mesure le coefficient Bêta (β) d'un titre ?",
        options: ['Le risque spécifique à l\'entreprise', 'La sensibilité du titre aux fluctuations du marché global (risque systématique)', 'Le taux sans risque', 'La rentabilité des dividendes'],
        correctIndex: 1,
        explanation: "Le Bêta mesure le risque systématique non diversifiable de l'entreprise par rapport à l'ensemble du marché.",
      },
    ],
  },
  {
    id: 'gestion-rh-logistique-m1',
    filiere: 'Gestion',
    speciality: 'Ressources Humaines & Supply Chain Management',
    academicCycle: 'Master / Ingénieur (Bac+4 à Bac+5)',
    title: 'Gestion Stratégique des Ressources Humaines & Chaîne Logistique Globale',
    level: 'Master 1 - Management Opérationnel',
    curriculumTrack: 'Cycle 2 : Optimisation des Flux Humains & Industriels',
    description: 'Gestion Prévisionnelle des Emplois et Compétences (GPEC), dialogue social en zone CEMAC, IncoTerms 2020 et gestion d\'entrepôts portuaires (Owendo / Port-Gentil).',
    prerequisites: 'Droit du travail gabonais, principes de gestion des stocks.',
    chapters: [
      {
        id: 'rh-c1',
        title: 'Chapitre 1 : GPEC, Recrutement & Politique Salariale au Gabon',
        duration: '6h de cours',
        summary: 'Anticipation des compétences et respect du Code du Travail gabonais.',
        content: [
          "La GPEC anticipe les besoins en qualifications futures par rapport aux effectifs actuels.",
          "Code du Travail Gabonais : Règlements des CDD/CDI, gabonisation progressive des postes d'encadrement et dialogue avec les délégués du personnel.",
        ],
        keyFormulasOrConcepts: [
          'Taux de rotation du personnel (Turnover) = [(Départs + Arrivées) / 2] / Effectif moyen × 100',
        ],
      },
    ],
    keySummary: [
      'Le capital humain est la première source d\'avantage concurrentiel durable.',
    ],
    exercises: [
      {
        id: 'ex-rh1',
        title: 'Exercice : Calcul du Turnover',
        statement: "Une entreprise compte 500 salariés en moyenne. En 2024, il y a eu 20 départs et 30 arrivées. Calculez le taux de turnover.",
        solution: "Moyenne des flux = (20 + 30) / 2 = 25.\nTurnover = (25 / 500) × 100 = 5%.",
      },
    ],
    quiz: [
      {
        id: 'q-rh1',
        question: "Que signifie le sigle GPEC en gestion des ressources humaines ?",
        options: ['Gestion Périodique des Emplois et Contrats', 'Gestion Prévisionnelle des Emplois et des Compétences', 'Grille Patronale d\'Évaluation des Cadres', 'Garantie Publique d\'Emploi Certifié'],
        correctIndex: 1,
        explanation: "La GPEC est la démarche stratégique d'anticipation des compétences futures dans l'organisation.",
      },
    ],
  },
  {
    id: 'gestion-doctorat-phd',
    filiere: 'Gestion',
    speciality: 'Recherche Doctorale en Sciences de Gestion & DBA',
    academicCycle: 'Doctorat / Ph.D. (Bac+6 à Bac+8)',
    title: 'Épistémologie, Méthodologie de la Recherche & Séminaire Doctoral en Stratégie',
    level: 'Doctorat (D1-D3) / Executive Doctorate (Ph.D. / DBA)',
    curriculumTrack: 'Cycle 3 : Recherche Académique, Publication & Thèse Doctorale (CAMES)',
    description: 'Paradigmes épistémologiques, modélisation causale (équations structurelles PLS-SEM), publications scientifiques dans les revues FNEGE/CAMES et préparation de la soutenance.',
    prerequisites: 'Titulaire d\'un Master 2 Recherche ou Professionnel avec mention.',
    thesisOrCapstoneProject: 'Thèse de Doctorat d\'État : "Gouvernance des entreprises publiques africaines et performance stratégique : une approche par la théorie de l\'agence contextualisée au Gabon".',
    chapters: [
      {
        id: 'doc-g1',
        title: 'Chapitre 1 : Postures Épistémologiques & Design de Recherche',
        duration: '12h de séminaire doctoral',
        summary: 'Positivisme, interprétativisme et constructivisme en sciences de gestion.',
        content: [
          "L'épistémologie interroge la nature de la connaissance produite : positivisme (démarche déductive), interprétativisme (compréhension inductive du sens) et constructivisme pragmatique.",
          "Modélisation PLS-SEM : Évaluation de la validité convergente (AVE > 0.50) et discriminante.",
        ],
        keyFormulasOrConcepts: [
          'Critères de validité convergente : AVE ≥ 0.50',
          'Fiabilité composite : Rhô de Jöreskog > 0.70',
        ],
      },
    ],
    keySummary: [
      'Une thèse doctorale doit apporter une contribution théorique originale et empiriquement vérifiée.',
    ],
    exercises: [
      {
        id: 'ex-doc-g1',
        title: 'Exercice : Formulation d\'une Question de Recherche Doctorale',
        statement: "Formulez une problématique scientifique portant sur la performance des banques gabonaises face au Mobile Money.",
        solution: "Exemple : 'Comment les banques commerciales traditionnelles en zone CEMAC réagissent-elles à la disruption du Mobile Money à travers leurs capacités dynamiques d'agilité organisationnelle ?'",
      },
    ],
    quiz: [
      {
        id: 'q-doc-g1',
        question: "En modélisation PLS-SEM, quel seuil minimal de l'Average Variance Extracted (AVE) valide la mesure d'un construit ?",
        options: ['AVE > 0.10', 'AVE > 0.50', 'AVE > 0.90', 'AVE = 1.00'],
        correctIndex: 1,
        explanation: "Selon Fornell & Larcker (1981), l'AVE doit être supérieur ou égal à 0.50 pour prouver la validité convergente.",
      },
    ],
  },
  {
    id: 'gestion-hotellerie-tourisme-l2',
    filiere: 'Gestion',
    speciality: 'Hôtellerie et tourisme',
    academicCycle: 'Licence / BTS (Bac+1 à Bac+3)',
    title: 'Management Hôtelier, Écotourisme Gabonais & Yield Management',
    level: 'Licence 2 / BTS Hôtellerie & Tourisme',
    curriculumTrack: 'Cycle 1 : Exploitation Hôtelière, Écotourisme (ANPN) & Revenue Management',
    description: 'Gestion opérationnelle de l\'hébergement, accueil et restauration (F&B), tarification dynamique (Yield Management), valorisation du patrimoine écotouristique gabonais (Loango, Ivindo, Lopé) et normes sanitaires HACCP.',
    prerequisites: 'Bases de gestion commerciale, techniques d\'accueil et anglais professionnel.',
    chapters: [
      {
        id: 'ht-c1',
        title: 'Chapitre 1 : Indicateurs Clés de l\'Hôtellerie (RevPAR, Taux d\'Occupation & ADR)',
        duration: '6h de cours et cas pratiques',
        summary: 'Calculs de rentabilité d\'un établissement hôtelier et pilotage du Yield Management.',
        content: [
          "L'industrie hôtelière repose sur des stocks périssables : une chambre non vendue cette nuit représente un revenu perdu à jamais. Le Yield Management optimise le chiffre d'affaires en modulant les tarifs selon la demande.",
          "Indicateurs fondamentaux : Le Taux d'Occupation (TO) mesure le remplissage : TO = (Chambres occupées / Chambres disponibles) × 100.",
          "Le Tarif Moyen Journalier (ADR - Average Daily Rate) : ADR = Revenu total des chambres / Nombre de chambres vendues.",
          "Le Revenu par Chambre Disponible (RevPAR) : RevPAR = ADR × TO = Revenu total des chambres / Chambres disponibles.",
        ],
        keyFormulasOrConcepts: [
          'RevPAR = ADR × Taux d\'Occupation',
          'Taux d\'Occupation (TO) = (Chambres Vendues / Chambres Disponibles) × 100',
          'GOPPAR = Résultat Brut d\'Exploitation / Nombre total de chambres disponibles',
        ],
      },
      {
        id: 'ht-c2',
        title: 'Chapitre 2 : Écotourisme Gabonais, Parcs Nationaux (ANPN) & Tourisme d\'Affaires',
        duration: '8h de séminaires et visites de terrain',
        summary: 'Valorisation des 13 parcs nationaux, tourisme d\'affaires à Libreville/Port-Gentil et normes HACCP.',
        content: [
          "Le Gabon dispose d'un réseau exceptionnel de 13 parcs nationaux gérés par l'Agence Nationale des Parcs Nationaux (ANPN), représentant plus de 10% du territoire national (Loango, Ivindo, Lopé, Pongara).",
          "Le tourisme d'affaires et de congrès (MICE) à Libreville et la demande pétrolière à Port-Gentil génèrent un flux régulier de clientèle corporate à haut pouvoir d'achat.",
          "Normes d'hygiène HACCP : Maîtrise des points critiques en restauration hôtelière pour garantir la sécurité alimentaire.",
        ],
        keyFormulasOrConcepts: [
          'Principe de durabilité écotouristique : Zéro empreinte carbone et retombées directes pour les communautés villageoises',
          'Système HACCP : 7 principes pour l\'analyse et la maîtrise des dangers microbiologiques',
        ],
      },
    ],
    keySummary: [
      'Le RevPAR combine le taux d\'occupation et le prix moyen pour mesurer la performance réelle d\'un hôtel.',
      'Le potentiel écotouristique du Gabon requiert des managers capables d\'allier hospitalité de luxe et préservation de la biodiversité.',
    ],
    exercises: [
      {
        id: 'ex-ht1',
        title: 'Exercice : Calcul du RevPAR d\'un Éco-resort à Pongara',
        statement: "Un écolodge à Pongara compte 50 bungalows. Durant le mois de juillet (31 jours), il loue 1 085 nuitées pour un revenu total hébergement de 108 500 000 FCFA. Calculez le Taux d'Occupation, l'ADR et le RevPAR.",
        solution: "1. Chambres disponibles totales = 50 × 31 = 1 550 nuitées.\n2. Taux d'Occupation (TO) = (1 085 / 1 550) × 100 = 70%.\n3. ADR (Tarif Moyen) = 108 500 000 / 1 085 = 100 000 FCFA par nuitée.\n4. RevPAR = ADR × TO = 100 000 × 0.70 = 70 000 FCFA (ou 108 500 000 / 1 550 = 70 000 FCFA).",
      },
    ],
    quiz: [
      {
        id: 'q-ht1',
        question: "Quelle est la définition exacte du RevPAR en gestion hôtelière ?",
        options: [
          'Revenu par Chambre Disponible (Revenue Per Available Room)',
          'Rendement Annuel Brut de la Restauration',
          'Remise Pourcentage Appliquée aux Réservations',
          'Ratio de Personnel par Étage',
        ],
        correctIndex: 0,
        explanation: "Le RevPAR (Revenue Per Available Room) est le ratio d'or de l'hôtellerie : il mesure le revenu généré par chaque chambre disponible.",
      },
    ],
  },
  {
    id: 'gestion-droit-public-prive-l3',
    filiere: 'Gestion',
    speciality: 'Droit public et privé',
    academicCycle: 'Licence / BTS (Bac+1 à Bac+3)',
    title: 'Droit des Sociétés OHADA, Droit Administratif & Marchés Publics',
    level: 'Licence 3 - Juriste d\'Entreprise & Administration Publique',
    curriculumTrack: 'Cycle 1 : Droit Privé (Sociétés & Contrats OHADA) et Droit Public (Code des Marchés Publics Gabonais)',
    description: 'Statuts des sociétés commerciales OHADA (SARL, SA, SAS), régime des actes de commerce, droit administratif gabonais, procédures d\'appels d\'offres de la DGMP et règlement des contentieux.',
    prerequisites: 'Introduction générale au droit, théorie générale des obligations civiles.',
    chapters: [
      {
        id: 'drt-c1',
        title: 'Chapitre 1 : Droit Privé : Droit des Sociétés Commerciales OHADA (AUDSCGIE)',
        duration: '7h de cours magistral',
        summary: 'Typologie des sociétés commerciales, constitution, capital social et responsabilité des mandataires.',
        content: [
          "L'Acte Uniforme relatif au Droit des Sociétés Commerciales et du GIE (OHADA) régit les entreprises au Gabon et dans les 17 États membres.",
          "La Société à Responsabilité Limitée (SARL) : Responsabilité limitée aux apports, souplesse de gestion, capital social déterminé librement ou fixé à 100 000 FCFA au Gabon.",
          "La Société Anonyme (SA) : Capital social minimum fixé à 10 000 000 FCFA, obligation d'un Commissaire aux Comptes (CAC), adaptée aux grands investissements industriels et bancaires.",
        ],
        keyFormulasOrConcepts: [
          'Capital social minimum SA OHADA = 10 000 000 FCFA',
          'Responsabilité civile et pénale des dirigeants sociaux (abus de biens sociaux)',
        ],
      },
      {
        id: 'drt-c2',
        title: 'Chapitre 2 : Droit Public : Code Gabonais des Marchés Publics & Recours Administratifs',
        duration: '8h de travaux dirigés',
        summary: 'Procédures de passation (DGMP), seuils de passation, appel d\'offres ouvert et contentieux.',
        content: [
          "Le Code des Marchés Publics gabonais encadre la commande publique selon trois principes fondamentaux : liberté d'accès à la commande publique, égalité de traitement des candidats et transparence des procédures.",
          "La Direction Générale des Marchés Publics (DGMP) contrôle a priori la régularité des dossiers d'appels d'offres (DAO) et l'attribution des marchés.",
          "Voies de recours des candidats lésés : Recours gracieux préalable devant l'autorité contractante, recours administratif devant l'organe de régulation, puis recours contentieux devant les juridictions administratives.",
        ],
        keyFormulasOrConcepts: [
          'Principe de mise en concurrence obligatoire au-delà des seuils réglementaires',
          'Délais légaux de recours : 7 à 15 jours ouvrables selon le type de contentieux',
        ],
      },
    ],
    keySummary: [
      'Le droit OHADA unifie et sécurise les affaires privées dans toute la zone CEMAC et UEMOA.',
      'En droit public, tout contrat passé par l\'État ou une collectivité sans respecter les règles de concurrence de la DGMP encourt la nullité absolue.',
    ],
    exercises: [
      {
        id: 'ex-drt1',
        title: 'Exercice : Qualification Juridique d\'une Société Commerciale OHADA',
        statement: "Trois entrepreneurs à Libreville souhaitent créer une société d'import-export avec un apport total de 3 000 000 FCFA, sans engager leurs patrimoines personnels. Quelle forme de société OHADA doivent-ils privilégier et quelles sont les formalités d'immatriculation ?",
        solution: "1. Forme recommandée : La SARL (Société à Responsabilité Limitée) ou SAS (Société par Actions Simplifiée).\n2. La SA est exclue car elle exige un capital minimum de 10 000 000 FCFA.\n3. Formalités : Rédaction des statuts notariés ou sous seing privé, dépôt au greffe du Tribunal de Commerce pour immatriculation au RCCM (Registre du Commerce et du Crédit Mobilier) et publication au Journal d'Annonces Légales.",
      },
    ],
    quiz: [
      {
        id: 'q-drt1',
        question: "Quel est le montant minimal du capital social requis par l'Acte Uniforme OHADA pour constituer une Société Anonyme (SA) sans appel public à l'épargne ?",
        options: ['1 000 000 FCFA', '5 000 000 FCFA', '10 000 000 FCFA', '50 000 000 FCFA'],
        correctIndex: 2,
        explanation: "Selon l'article 311 de l'AUDSCGIE de l'OHADA, le capital social minimum d'une SA est impérativement de 10 000 000 FCFA.",
      },
    ],
  },
  {
    id: 'gestion-institutions-sanitaires-m1',
    filiere: 'Gestion',
    speciality: 'Gestion des institutions sanitaires',
    academicCycle: 'Master / Ingénieur (Bac+4 à Bac+5)',
    title: 'Management Hospitalier, Économie Médicale & Gouvernance CNAMGS',
    level: 'Master 1 / Master 2 - Gestion des Établissements de Santé',
    curriculumTrack: 'Cycle 2 : Pilotage Médico-Économique, Qualité Hospitalière & Financement de la Santé',
    description: 'Pilotage budgétaire des CHU et hôpitaux régionaux (CHUO, CHUL, HIAO), gestion de la chaîne d\'approvisionnement pharmaceutique (OPN), couverture universelle CNAMGS et accréditation qualité.',
    prerequisites: 'Analyse financière de base, principes d\'épidémiologie et droit de la santé.',
    thesisOrCapstoneProject: 'Mémoire de Master : "Optimisation des processus de facturation et de recouvrement tiers-payant CNAMGS au Centre Hospitalier Universitaire de Libreville (CHUL)".',
    chapters: [
      {
        id: 'gis-c1',
        title: 'Chapitre 1 : Modèles Économiques Hospitaliers & Tarification à l\'Activité (T2A)',
        duration: '7h de cours spécialisé',
        summary: 'Calcul des coûts à la journée d\'hospitalisation, articulation avec la CNAMGS et équilibre budgétaire.',
        content: [
          "Le gestionnaire d'un établissement hospitalier pilote une organisation complexe à double rationalité : médicale (sauver des vies, qualité des soins) et économique (pérennité financière, maîtrise des charges).",
          "La Caisse Nationale d'Assurance Maladie et de Garantie Sociale (CNAMGS) est le pivot du financement des soins au Gabon : la gestion rigoureuse du tiers-payant conditionne la trésorerie hospitalière.",
          "Indicateurs d'activité : Taux d'Occupation des Lits (TOL), Durée Moyenne de Séjour (DMS) et Intervalle de Rotation (IR).",
        ],
        keyFormulasOrConcepts: [
          'Taux d\'Occupation des Lits (TOL) = (Journées d\'hospitalisation réalisées / Journées d\'hospitalisation possibles) × 100',
          'Durée Moyenne de Séjour (DMS) = Total des journées d\'hospitalisation / Nombre total d\'admissions',
          'Délai Moyen de Recouvrement Tiers-Payant CNAMGS',
        ],
      },
      {
        id: 'gis-c2',
        title: 'Chapitre 2 : Gestion de la Pharmacie Hospitalière (OPN) & Qualité des Soins',
        duration: '8h d\'études de cas',
        summary: 'Approvisionnement auprès de l\'Office Pharmaceutique National, chaîne du froid et prévention des risques infectieux.',
        content: [
          "L'approvisionnement en médicaments essentiels et consommables biomédicaux s'effectue via l'Office Pharmaceutique National (OPN). Les ruptures de stock mettent en péril la vie des patients.",
          "Contrôle qualité et accréditation : Mise en place de protocoles stricts de traçabilité, hygiène hospitalière et gestion des déchets biomédicaux infectieux (DASRI).",
        ],
        keyFormulasOrConcepts: [
          'Stock de Sécurité Pharmaceutique = Consommation moyenne journalière × Délai de réapprovisionnement de sécurité',
          'Taux d\'Infections Nosocomiales = (Nouveaux cas nosocomiaux / Admissions totales) × 100',
        ],
      },
    ],
    keySummary: [
      'Un taux d\'occupation des lits optimal se situe entre 80% et 85% pour préserver une capacité de réserve en cas d\'urgence sanitaire.',
      'La numérisation des dossiers patients et la télétransmission CNAMGS constituent le levier clé pour éliminer les retards de trésorerie des hôpitaux gabonais.',
    ],
    exercises: [
      {
        id: 'ex-gis1',
        title: 'Exercice : Calcul du TOL et de la DMS d\'un Service de Chirurgie',
        statement: "Un service de chirurgie dispose de 40 lits. Durant un mois de 30 jours, il a enregistré 120 admissions totalisant 960 journées d'hospitalisation. Calculez le Taux d'Occupation des Lits (TOL) et la Durée Moyenne de Séjour (DMS).",
        solution: "1. Journées possibles = 40 lits × 30 jours = 1 200 journées-lits.\n2. Taux d'Occupation (TOL) = (960 / 1 200) × 100 = 80%.\n3. Durée Moyenne de Séjour (DMS) = 960 journées / 120 admissions = 8 jours par patient.",
      },
    ],
    quiz: [
      {
        id: 'q-gis1',
        question: "Quelle institution gabonaise assure la couverture médicale universelle et le remboursement du panier de soins des assurés et Gabonais Économiquement Faibles (GEF) ?",
        options: ['La CNSS', 'La CNAMGS', 'La DGBS', 'L\'ANINF'],
        correctIndex: 1,
        explanation: "La CNAMGS (Caisse Nationale d'Assurance Maladie et de Garantie Sociale) est l'organisme étatique garantissant la couverture santé et la prise en charge des soins au Gabon.",
      },
    ],
  },
  {
    id: 'gestion-des-organisations-m2',
    filiere: 'Gestion',
    speciality: 'Gestion des organisations',
    academicCycle: 'Master / Ingénieur (Bac+4 à Bac+5)',
    title: 'Théorie des Organisations, Changement Stratégique & Agilité Managériale',
    level: 'Master 2 - Management Stratégique & Transformation des Organisations',
    curriculumTrack: 'Cycle 2 : Gouvernance d\'Entreprise, Conduite du Changement & Performance Globale',
    description: 'Modèles structurels de Henry Mintzberg, sociologie des relations de pouvoir (Michel Crozier), conduite agile du changement, digitalisation des processus et responsabilité sociétale (RSE) contextualisée au Gabon.',
    prerequisites: 'Management général des entreprises, principes de sociologie du travail.',
    thesisOrCapstoneProject: 'Mémoire de Master 2 : "Conduite du changement et digitalisation des processus administratifs dans les grandes entreprises para-publiques gabonaises".',
    chapters: [
      {
        id: 'gorg-c1',
        title: 'Chapitre 1 : Typologie Structurelle de Henry Mintzberg & Mécanismes de Coordination',
        duration: '7h de séminaire',
        summary: 'Les 5 composantes de l\'organisation et les modes d\'ajustement réciproque, supervision et standardisation.',
        content: [
          "Selon Henry Mintzberg, toute organisation se compose de 5 parties de base : le Sommet stratégique (direction générale), la Ligne hiérarchique (cadres intermédiaires), le Centre opérationnel (opérateurs de production), la Technostructure (analystes, méthodes, planificateurs) et les Fonctions de support logistique (RH, juridique, maintenance).",
          "Les 6 mécanismes de coordination : Ajustement mutuel, supervision directe, standardisation des procédés de travail, standardisation des résultats, standardisation des qualifications, et standardisation des normes/valeurs.",
        ],
        keyFormulasOrConcepts: [
          'Configurations archétypales : Structure simple, Bureaucratie mécaniste, Bureaucratie professionnelle, Structure divisionnalisée, Adhocratie',
          'Alignement contingent : Adapter la structure à l\'environnement (stable vs turbulent)',
        ],
      },
      {
        id: 'gorg-c2',
        title: 'Chapitre 2 : Sociologie des Relations de Pouvoir & Analyse Stratégique (Michel Crozier)',
        duration: '8h de cas pratiques',
        summary: 'Maîtrise des zones d\'incertitude, jeux d\'acteurs et dépassement des résistances au changement.',
        content: [
          "L'analyse stratégique de Crozier et Friedberg démontre que les acteurs organisationnels ne sont pas de simples exécutants passifs : ils disposent d'une marge de liberté et mobilisent des sources de pouvoir pour défendre leurs intérêts.",
          "Les 4 sources de pouvoir : La maîtrise d'une compétence particulière, la maîtrise des relations avec l'environnement extérieur, la maîtrise de la circulation de l'information, et la maîtrise des règles organisationnelles.",
          "Conduite du changement : Les 8 étapes de John Kotter pour créer l'urgence, mobiliser une coalition directrice et ancrer les nouvelles pratiques dans la culture d'entreprise.",
        ],
        keyFormulasOrConcepts: [
          'Zone d\'incertitude : Espace de non-réglementation où se négocie le pouvoir effectif',
          'Matrice d\'analyse des parties prenantes (Pouvoir vs Intérêt)',
        ],
      },
    ],
    keySummary: [
      'Il n\'existe pas de structure idéale universelle : la meilleure organisation est celle qui s\'adapte avec agilité à son environnement économique.',
      'Tout projet de transformation qui néglige les jeux d\'acteurs informels et la culture d\'entreprise est voué à l\'échec.',
    ],
    exercises: [
      {
        id: 'ex-gorg1',
        title: 'Exercice : Diagnostic Organisationnel d\'une Entreprise Publique',
        statement: "Une grande entreprise publique à Libreville connaît des lenteurs administratives aiguës : les décisions mettent 4 semaines à être validées à cause d'une chaîne hiérarchique de 6 niveaux et de règles rigides. Quelle est la configuration de Mintzberg correspondante et quelles réformes managériales préconisez-vous ?",
        solution: "1. Diagnostic : Il s'agit d'une 'Bureaucratie mécaniste', caractérisée par une standardisation excessive des procédés, un sommet stratégique distant et une technostructure pesante.\n2. Recommandations : Décentralisation du pouvoir de décision vers la ligne hiérarchique (aplatissement des niveaux hiérarchiques), passage d'une standardisation des procédés à une standardisation des résultats (gestion par objectifs/OKR) et mise en place d'équipes transverses agiles.",
      },
    ],
    quiz: [
      {
        id: 'q-gorg1',
        question: "Dans la typologie des organisations de Henry Mintzberg, quel groupe regroupe les analystes chargés de concevoir et normaliser les méthodes de travail (ex: ingénieurs méthodes, planificateurs, auditeurs) ?",
        options: ['Le Sommet stratégique', 'Le Support logistique', 'La Technostructure', 'Le Centre opérationnel'],
        correctIndex: 2,
        explanation: "La Technostructure est la composante composée d'experts qui planifient, organisent et standardisent le travail des autres acteurs.",
      },
    ],
  },

  // ==========================================
  // 2. INFORMATIQUE (WEB/MOBILE, CYBERSÉCURITÉ, RÉSEAUX/CLOUD, DOCTORAT)
  // ==========================================
  {
    id: 'info-dev-web-mobile-l1',
    filiere: 'Informatique',
    speciality: 'Développement Web, Mobile & Full-Stack',
    academicCycle: 'Licence / BTS (Bac+1 à Bac+3)',
    title: 'Développement Web Moderne, Algorithmes & Applications Mobiles',
    level: 'Licence 2 / BTS Informatique',
    curriculumTrack: 'Cycle 1 : Programmation Moderne, API REST & Front-End React/Mobile',
    description: 'Conception d\'architectures web interactives (React, TypeScript), API REST Express/Node.js, développement mobile multiplateforme et bases de données relationnelles.',
    prerequisites: 'Logique algorithmique de base, HTML/CSS élémentaire.',
    chapters: [
      {
        id: 'dev-c1',
        title: 'Chapitre 1 : Architectures Front-End Réactives & Cycle de Vie des Composants',
        duration: '7h de travaux pratiques',
        summary: 'Composants fonctionnels, Hooks (useState, useEffect), Virtual DOM et gestion d\'état.',
        content: [
          "Le développement moderne repose sur le découpage en composants réutilisables à sens unique de données (Unidirectional Data Flow). Le Virtual DOM optimise le rendu en calculant les diffs avant toute mutation réelle du DOM.",
          "Hooks fondamentaux : useState pour l'état local réactif, useEffect pour synchroniser les effets de bord (appels HTTP, écouteurs d'événements).",
        ],
        keyFormulasOrConcepts: [
          'Principe d\'immuabilité des états dans les applications réactives',
          'Rendu conditionnel et lazy loading des modules',
        ],
      },
      {
        id: 'dev-c2',
        title: 'Chapitre 2 : Conception d\'API RESTful & Connexion PostgreSQL',
        duration: '8h d\'ateliers backend',
        summary: 'Verbes HTTP, middleware d\'authentification JWT et ORM.',
        content: [
          "Une API REST (Representational State Transfer) expose des ressources identifiées par des URI uniques et manipulées par les verbes HTTP standards (GET, POST, PUT, DELETE).",
          "Sécurisation des requêtes : Headers d'autorisation Bearer Token avec signature JSON Web Token (JWT) stateless.",
        ],
        keyFormulasOrConcepts: [
          'Codes HTTP standards : 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), 500 (Server Error)',
        ],
      },
    ],
    keySummary: [
      'Toujours valider les données entrantes côté client ET côté serveur pour prévenir les failles XSS et injections.',
    ],
    exercises: [
      {
        id: 'ex-dev1',
        title: 'Exercice : Modélisation d\'une Route API d\'Inscription',
        statement: "Écrivez la logique d'une route Express POST /api/register recevant { email, password, nom }. Indiquez les vérifications obligatoires et le code de statut retourné en cas de succès.",
        solution: "1. Vérifier que email, password et nom sont renseignés (sinon return status 400).\n2. Vérifier si l'email existe déjà dans la base (sinon status 409 Conflict).\n3. Hacher le mot de passe avec bcrypt (sel de 10 tours).\n4. Insérer l'utilisateur dans la table et retourner status 201 (Created) avec un token JWT.",
      },
    ],
    quiz: [
      {
        id: 'q-dev1',
        question: "Quel code de statut HTTP indique qu'une nouvelle ressource a été créée avec succès sur le serveur ?",
        options: ['200 OK', '201 Created', '204 No Content', '304 Not Modified'],
        correctIndex: 1,
        explanation: "Le code 201 Created est le code officiel spécifiant la création réussie d'une nouvelle entité.",
      },
    ],
  },
  {
    id: 'info-cybersecurite-m1',
    filiere: 'Informatique',
    speciality: 'Cybersécurité, Hacking Éthique & Défense des SI',
    academicCycle: 'Master / Ingénieur (Bac+4 à Bac+5)',
    title: 'Sécurité Offensive (Pentesting), Cryptographie & Audit des Vulnérabilités',
    level: 'Master 1 - Sécurité des Systèmes d\'Information',
    curriculumTrack: 'Cycle 2 : Protection des Réseaux d\'Entreprise & Systèmes d\'Information Critiques',
    description: 'Analyse des vecteurs d\'attaque OWASP Top 10, tests d\'intrusion, cryptographie à clé publique (RSA/ECC), architecture Zero-Trust et réponse aux incidents SOC.',
    prerequisites: 'Réseaux TCP/IP avancés, administration Linux/Windows Server.',
    thesisOrCapstoneProject: 'Projet de Master : "Audit de sécurité et plan de remédiation contre les attaques de ransomware ciblant les infrastructures critiques au Gabon".',
    chapters: [
      {
        id: 'cyber-c1',
        title: 'Chapitre 1 : Vecteurs d\'Attaque Web OWASP & Mécanismes de Remédiation',
        duration: '8h de laboratoire pratique (Kali Linux)',
        summary: 'Injections SQL, Cross-Site Scripting (XSS), CSRF et mauvaises configurations d\'autorisation.',
        content: [
          "Le Top 10 de l'OWASP répertorie les risques les plus critiques pesant sur les applications web. L'Injection SQL se produit lorsque des entrées utilisateur non échappées sont directement interprétées par le moteur SQL.",
          "Défense absolue contre les injections SQL : Utilisation systématique de requêtes préparées avec paramètres typés (Prepared Statements / Parameterized Queries).",
          "Cross-Site Scripting (XSS) : Injection de scripts exécutés dans le navigateur de la victime. Remédiation : Nettoyage des balises (Sanitization) et politique de sécurité du contenu (Content Security Policy - CSP).",
        ],
        keyFormulasOrConcepts: [
          'Principe du moindre privilège (Least Privilege Access)',
          'Entropie d\'un mot de passe H = L × log₂(N)',
        ],
      },
    ],
    keySummary: [
      'La sécurité n\'est pas un produit mais un processus continu d\'évaluation et d\'atténuation des risques.',
    ],
    exercises: [
      {
        id: 'ex-cyber1',
        title: 'Exercice : Calcul de l\'Entropie d\'un Mot de Passe',
        statement: "Un mot de passe comporte 12 caractères choisis aléatoirement dans un jeu contenant minuscules (26), majuscules (26), chiffres (10) et symboles spéciaux (32), soit N = 94 caractères possibles. Calculez son entropie en bits.",
        solution: "H = L × log₂(N) = 12 × log₂(94) = 12 × (ln 94 / ln 2) = 12 × (4.543 / 0.693) = 12 × 6.554 ≈ 78.65 bits.\nUne entropie supérieure à 75 bits est considérée comme très robuste face aux attaques par force brute actuelles.",
      },
    ],
    quiz: [
      {
        id: 'q-cyber1',
        question: "Quelle méthode est la plus efficace pour neutraliser définitivement les vulnérabilités par injection SQL ?",
        options: ['Bloquer les apostrophes avec une regex simple', 'Utiliser des requêtes préparées paramétrées', 'Chiffrer le mot de passe de base', 'Désactiver le pare-feu'],
        correctIndex: 1,
        explanation: "Les requêtes préparées séparent le code SQL des données de manière étanche, empêchant toute modification de la structure de la requête.",
      },
    ],
  },
  {
    id: 'info-cloud-devops-m2',
    filiere: 'Informatique',
    speciality: 'Réseaux, Systèmes Distribués & Cloud DevOps',
    academicCycle: 'Master / Ingénieur (Bac+4 à Bac+5)',
    title: 'Conteneurisation Kubernetes, CI/CD & Architectures Microservices Cloud',
    level: 'Master 2 - Architectures Distribuées & DevOps',
    curriculumTrack: 'Cycle 2 : Déploiement Continu, Haute Disponibilité & Cloud Public/Privé',
    description: 'Orchestration avec Docker et Kubernetes, pipelines d\'intégration et déploiement continus (GitHub Actions / GitLab CI), observabilité et haute disponibilité.',
    prerequisites: 'Bases de la conteneurisation Docker et scripting bash.',
    thesisOrCapstoneProject: 'Projet d\'Ingénierie : "Déploiement d\'un cluster Kubernetes hybride résilient avec équilibrage de charge pour les banques en zone CEMAC".',
    chapters: [
      {
        id: 'devops-c1',
        title: 'Chapitre 1 : Orchestration de Conteneurs avec Kubernetes (K8s)',
        duration: '8h de cours pratique',
        summary: 'Pods, Deployments, Services, Ingress Controllers et mécanismes d\'auto-scaling (HPA).',
        content: [
          "Kubernetes est la plateforme d'orchestration de conteneurs de référence pour automatiser le déploiement, la montée en charge et la gestion d'applications conteneurisées.",
          "Objets fondamentaux : Le Pod (plus petite unité d'exécution contenant un ou plusieurs conteneurs), le Deployment (gère le cycle de vie et les réplicas de pods), le Service (expose les pods sous une IP virtuelle stable).",
          "Horizontal Pod Autoscaler (HPA) : Augmente ou réduit dynamiquement le nombre de pods en fonction de l'utilisation CPU ou mémoire.",
        ],
        keyFormulasOrConcepts: [
          'Formule HPA : Nombre de réplicas désiré = ⌈Nombre actuel × (Utilisation actuelle / Utilisation cible)⌉',
          'Rolling Update sans interruption de service (Zero-downtime deployment)',
        ],
      },
    ],
    keySummary: [
      'L\'approche Infrastructure as Code (IaC) avec Terraform ou Ansible garantit la reproductibilité absolue des environnements de production.',
    ],
    exercises: [
      {
        id: 'ex-devops1',
        title: 'Exercice : Calcul du Nombre de Réplicas HPA',
        statement: "Un service de paiement compte actuellement 4 pods avec une utilisation CPU moyenne de 80%. Le seuil cible configuré dans le HPA est de 50%. Combien de pods Kubernetes va-t-il provisionner ?",
        solution: "Réplicas = ⌈4 × (80% / 50%)⌉ = ⌈4 × 1.6⌉ = ⌈6.4⌉ = 7 pods.\nKubernetes lancera 3 pods supplémentaires pour stabiliser la charge.",
      },
    ],
    quiz: [
      {
        id: 'q-devops1',
        question: "Dans Kubernetes, quel composant résout le problème du changement constant d'adresses IP des pods en fournissant un point d'accès stable ?",
        options: ['Le ConfigMap', 'Le Service', 'Le Volume persistant', 'Le Kubelet'],
        correctIndex: 1,
        explanation: "Le Service Kubernetes fournit une adresse IP virtuelle unique et permanente ainsi qu'un nom DNS pour équilibrer la charge vers un groupe de pods dynamiques.",
      },
    ],
  },
  {
    id: 'info-doctorat-phd',
    filiere: 'Informatique',
    speciality: 'Informatique Théorique, Recherche Avancée & Ph.D.',
    academicCycle: 'Doctorat / Ph.D. (Bac+6 à Bac+8)',
    title: 'Théorie de la Complexité, Algorithmes Parallèles & Thèse de Doctorat',
    level: 'Doctorat en Informatique (D1-D3 / Ph.D.)',
    curriculumTrack: 'Cycle 3 : Modélisation Formelle, Systèmes Autonomes & Thèse Doctorale',
    description: 'Classes de complexité (P, NP, NP-complet), méthodes de vérification formelle, algorithmes de consensus byzantins (BFT) et publication scientifique dans les revues internationales.',
    prerequisites: 'Master 2 Recherche en Informatique avec mention.',
    thesisOrCapstoneProject: 'Thèse de Doctorat : "Algorithmes de consensus tolérants aux pannes byzantines à faible consommation énergétique adaptés aux infrastructures télécoms panafricaines".',
    chapters: [
      {
        id: 'doc-inf1',
        title: 'Chapitre 1 : Théorème CAP & Consensus Distribué dans les Systèmes Asynchrones',
        duration: '14h de séminaire doctoral',
        summary: 'Impossibilité FLP, algorithmes Raft/Paxos et quorum byzantin.',
        content: [
          "Le théorème de Fischer, Lynch et Paterson (FLP, 1985) démontre qu'aucun algorithme de consensus déterministe ne peut garantir l'accord dans un système asynchrone dès lors qu'un seul nœud peut subir une panne par crash.",
          "Les protocoles modernes de consensus (Raft, Paxos, PBFT) surmontent cette limite en adoptant des hypothèses de synchronie partielle ou des temporisations adaptatives.",
        ],
        keyFormulasOrConcepts: [
          'Condition de résilience Byzantine : N ≥ 3f + 1 pour tolérer f nœuds corrompus',
          'Quorum d\'intersection : R + W > N pour assurer la cohérence séquentielle',
        ],
      },
    ],
    keySummary: [
      'Prouver formellement la correction d\'un algorithme distribué est indispensable avant tout déploiement sur des systèmes critiques.',
    ],
    exercises: [
      {
        id: 'ex-doc-inf1',
        title: 'Exercice : Dimensionnement d\'un Réseau BFT National',
        statement: "On souhaite concevoir un réseau interbancaire souverain au Gabon tolérant jusqu'à 3 nœuds défaillants ou attaqués. Quel est le nombre minimal de nœuds indépendants requis ?",
        solution: "Selon la formule de tolérance aux pannes byzantines : N ≥ 3f + 1.\nPour f = 3 nœuds défaillants :\nN_min = 3 × 3 + 1 = 10 nœuds.",
      },
    ],
    quiz: [
      {
        id: 'q-doc-inf1',
        question: "D'après le résultat d'impossibilité FLP (1985), que ne peut-on pas garantir à 100% dans un système distribué totalement asynchrone avec pannes ?",
        options: ['La sécurité physique des serveurs', 'Le consensus déterministe garanti en temps fini', 'Le chiffrement des messages', 'La vitesse de la bande passante'],
        correctIndex: 1,
        explanation: "Le résultat fondamental FLP démontre l'impossibilité de garantir simultanément la terminaison et la consistance d'un consensus déterministe en environnement asynchrone avec risque de panne.",
      },
    ],
  },

  // ==========================================
  // 3. MÉDECINE & SANTÉ (DE PCEM1 AU DOCTORAT D'ÉTAT M.D.)
  // ==========================================
  {
    id: 'medecine-pcem1-fondements',
    filiere: 'Médecine',
    speciality: 'Médecine Générale & Sciences Biomédicales',
    academicCycle: 'Licence / BTS (Bac+1 à Bac+3)',
    title: 'Anatomie Descriptive, Physiologie Cardiovasculaire & Histologie Humaine',
    level: 'PCEM 1 / Première Année Médecine (USS Owendo)',
    curriculumTrack: 'Cycle 1 : Fondements Médicaux & Sciences Fondamentales',
    description: 'Organisation spatiale du corps humain, hémodynamique cardiaque, métabolisme biochimique et embryologie générale.',
    prerequisites: 'Bac D ou C avec mention, bases solides en biologie et chimie.',
    chapters: [
      {
        id: 'med-pc1',
        title: 'Chapitre 1 : Morphologie, Septations & Vascularisation du Cœur',
        duration: '8h de cours d\'amphithéâtre',
        summary: 'Cavités cardiaques, valves unidirectionnelles et artères coronaires.',
        content: [
          "Le cœur est un muscle creux (myocarde) à 4 cavités séparées par le septum interatrial et interventriculaire.",
          "Vascularisation coronaire : Les artères coronaires droite et gauche naissent des sinus de Valsalva et se remplissent en diastole.",
        ],
        keyFormulasOrConcepts: [
          'Débit Cardiaque (DC) = Volume d\'Éjection Systolique (VES) × Fréquence Cardiaque (FC)',
          'Pression Artérielle Moyenne (PAM) = Pression Diastolique + 1/3 (Pression Systolique - Pression Diastolique)',
        ],
      },
    ],
    keySummary: [
      'Le myocarde s\'irrigue en phase de diastole, contrairement aux organes de la circulation systémique.',
    ],
    exercises: [
      {
        id: 'ex-med1',
        title: 'Exercice : Calcul du Débit Cardiaque',
        statement: "Un patient au repos a une FC = 72 bpm et un VES = 70 mL. Calculez son Débit Cardiaque.",
        solution: "DC = 72 × 70 = 5 040 mL/min = 5.04 L/min.",
      },
    ],
    quiz: [
      {
        id: 'q-med1',
        question: "Quelle cavité cardiaque propulse le sang oxygéné dans la circulation systémique via l'aorte ?",
        options: ['Atrium droit', 'Ventricule droit', 'Atrium gauche', 'Ventricule gauche'],
        correctIndex: 3,
        explanation: "Le ventricule gauche propulse le sang à haute pression dans l'aorte vers l'ensemble des organes.",
      },
    ],
  },
  {
    id: 'medecine-pharmacie-m1',
    filiere: 'Médecine',
    speciality: 'Pharmacie, Pharmacologie & Toxicologie Tropicale',
    academicCycle: 'Master / Ingénieur (Bac+4 à Bac+5)',
    title: 'Pharmacocinétique, Médicaments Anti-Infectieux & Pharmacovigilance',
    level: 'Master 1 / 4ème Année Pharmacie (USS Owendo)',
    curriculumTrack: 'Cycle 2 : Thérapeutique Médicamenteuse & Santé Publique',
    description: 'Devenir du médicament dans l\'organisme (ADME : Absorption, Distribution, Métabolisme, Élimination), antibiorésistance et protocoles antipaludiques.',
    prerequisites: 'Chimie thérapeutique, biochimie médicale.',
    thesisOrCapstoneProject: 'Mémoire de Master en Pharmacie : "Étude comparative de la stabilité et de la biodisponibilité des dérivés d\'artémisinine en milieu tropical humide à Libreville".',
    chapters: [
      {
        id: 'pharma-c1',
        title: 'Chapitre 1 : Paramètres Pharmacocinétiques Fondamentaux (ADME)',
        duration: '7h de cours magistral',
        summary: 'Demi-vie plasmatique, clairance rénale/hépatique et volume de distribution.',
        content: [
          "La pharmacocinétique quantifie le devenir du principe actif dans l'organisme : Absorption (franchissement des barrières biologiques), Distribution (fixation aux protéines plasmatiques), Métabolisme (biotransformations hépatiques par les cytochromes P450), Élimination (voie rénale ou biliaire).",
          "La Demi-vie (T1/2) est le temps nécessaire pour que la concentration plasmatique du médicament diminue de moitié. Il faut environ 5 demi-vies pour atteindre l'état d'équilibre (Steady State).",
        ],
        keyFormulasOrConcepts: [
          'Clairance totale Cl = Dose / AUC (Aire sous la courbe)',
          'Demi-vie d\'élimination : T1/2 = (ln 2 × Vd) / Cl ≈ (0.693 × Vd) / Cl',
          'Biodisponibilité F = (AUC_orale / AUC_IV) × 100',
        ],
      },
    ],
    keySummary: [
      'L\'insuffisance rénale ou hépatique modifie la clairance et exige un ajustement posologique strict pour éviter tout surdosage toxique.',
    ],
    exercises: [
      {
        id: 'ex-pharma1',
        title: 'Exercice : Calcul de la Demi-vie d\'un Antibiotique',
        statement: "Un antibiotique a un volume de distribution Vd = 30 L et une clairance rénale Cl = 3 L/h. Calculez sa demi-vie d'élimination plasmatique T1/2.",
        solution: "T1/2 = (0.693 × Vd) / Cl = (0.693 × 30) / 3 = 20.79 / 3 = 6.93 heures.\nLe médicament est éliminé à moitié toutes les 7 heures environ.",
      },
    ],
    quiz: [
      {
        id: 'q-pharma1',
        question: "Combien de demi-vies (T1/2) sont nécessaires lors d'administrations répétées pour atteindre la concentration d'équilibre plasmatique stable (plateau) ?",
        options: ['1 demi-vie', '2 demi-vies', 'Environ 5 demi-vies', '50 demi-vies'],
        correctIndex: 2,
        explanation: "La règle universelle en pharmacocinétique établit que 97% de la concentration d'équilibre est atteinte après 5 demi-vies régulières.",
      },
    ],
  },
  {
    id: 'medecine-doctorat-etat-md',
    filiere: 'Médecine',
    speciality: 'Doctorat d\'État en Médecine (M.D.) & Spécialités Cliniques',
    academicCycle: 'Doctorat / Ph.D. (Bac+6 à Bac+8)',
    title: 'Thèse de Doctorat d\'État en Médecine & Pratique Clinique Hospitalière',
    level: 'Doctorat (7ème & 8ème Année Médecine / Internat des Hôpitaux)',
    curriculumTrack: 'Cycle 3 : Thèse de Doctorat d\'État (M.D.), Éthique Médicale & Spécialisation DES',
    description: 'Élaboration et soutenance publique de la thèse d\'exercice, conduite d\'essais cliniques, éthique biomédicale (CNER Gabon) et accès aux spécialités (Chirurgie, Cardiologie, Pédiatrie).',
    prerequisites: 'Validation des 6 premières années du cursus médical et des stages d\'internat.',
    thesisOrCapstoneProject: 'Thèse de Doctorat d\'État en Médecine : "Profil épidémiologique, bactériologique et facteurs de résistance aux antibiotiques des infections nosocomiales au Centre Hospitalier Universitaire d\'Owendo (CHUO)".',
    chapters: [
      {
        id: 'med-doc1',
        title: 'Chapitre 1 : Méthodologie de la Thèse Clinique & Épidémiologie Analytique',
        duration: '15h de séminaires doctoraux',
        summary: 'Études cas-témoins, cohortes, Odds Ratio et clairance éthique nationale.',
        content: [
          "L'obtention du titre de Docteur d'État en Médecine consacre la soutenance d'un travail de recherche clinique original devant un jury présidé par un Professeur Agrégé du CAMES.",
          "Étude cas-témoins : Calcule l'Odds Ratio (OR) pour mesurer l'association entre exposition et maladie. OR = (a × d) / (b × c).",
          "Aspects réglementaires : Approbation préalable obligatoire du Comité National d'Éthique pour la Recherche (CNER Gabon).",
        ],
        keyFormulasOrConcepts: [
          'Odds Ratio (OR) = (a · d) / (b · c)',
          'Risque Relatif (RR) = [a / (a + b)] / [c / (c + d)]',
        ],
      },
    ],
    keySummary: [
      'Le serment d\'Hippocrate et les règles de bienfaisance et d\'autonomie guident la pratique médicale toute la vie.',
    ],
    exercises: [
      {
        id: 'ex-med-doc1',
        title: 'Exercice : Calcul d\'un Odds Ratio (OR) Clinique',
        statement: "Dans une étude sur l'hypertension artérielle : 100 hypertendus (60 consomment du sel en excès) vs 100 témoins normotendus (30 consomment du sel en excès). Calculez l'OR.",
        solution: "OR = (60 × 70) / (30 × 40) = 4 200 / 1 200 = 3.5.\nLes personnes consommant un excès de sel ont 3.5 fois plus de risques d'être hypertendues.",
      },
    ],
    quiz: [
      {
        id: 'q-med-doc1',
        question: "Quelle institution nationale gabonaise valide obligatoirement les protocoles éthiques de recherche clinique ?",
        options: ['Le Rectorat de l\'UOB', 'Le Comité National d\'Éthique pour la Recherche (CNER)', 'Le Tribunal de Commerce', 'La Police de l\'Air'],
        correctIndex: 1,
        explanation: "Le CNER est l'organisme officiel garantissant le respect de la dignité, des droits et de la sécurité des patients au Gabon.",
      },
    ],
  },
  {
    id: 'medecine-imagerie-medicale-l3',
    filiere: 'Médecine',
    speciality: 'Imagerie médicale',
    academicCycle: 'Licence / BTS (Bac+1 à Bac+3)',
    title: 'Radiologie Diagnostique, Échographie, Scanner (TDM), IRM & Radioprotection',
    level: 'Licence 3 / Diplôme Supérieur d\'Imagerie Médicale (USS Owendo / INFASS)',
    curriculumTrack: 'Cycle 1 : Biophysique des Ondes, Sémiologie Radiologique & Protocoles d\'Acquisition',
    description: 'Production des rayons X, formation de l\'image radiographique, échographie Doppler tissulaire, tomodensitométrie hélicoïdale (Scanner), résonance magnétique nucléaire (IRM), produits de contraste et radioprotection des patients (normes CIPR / ALARA).',
    prerequisites: 'Anatomie descriptive et topographique, biophysique des rayonnements et physiologie.',
    thesisOrCapstoneProject: 'Projet de Fin d\'Études : "Optimisation des doses d\'irradiation délivrées aux patients pédiatriques lors des examens tomodensitométriques (Scanner) au CHU d\'Angondjé".',
    chapters: [
      {
        id: 'rad-c1',
        title: 'Chapitre 1 : Biophysique des Rayons X, Scanner (TDM) & Échelle de Hounsfield',
        duration: '7h de cours théorique et démonstrations cliniques',
        summary: 'Production des photons X, atténuation différentielle selon les tissus et reconstruction tomodensitométrique.',
        content: [
          "Les rayons X sont des rayonnements ionisants produits par freinage d'électrons accélérés sur une cible en tungstène (anode tournante). L'atténuation du faisceau traversant le corps obéit à la loi exponentielle de Beer-Lambert : I = I₀ · e^(-μx).",
          "La Tomodensitométrie (Scanner TDM) mesure les coefficients d'atténuation linéaire tissulaires pour reconstruire une image en coupes axiales grâce à l'algorithme de rétroprojection filtrée.",
          "L'Échelle de Hounsfield quantifie la densité radiologique en Unités Hounsfield (UH) : l'eau pure = 0 UH, l'air = -1 000 UH, le parenchyme pulmonaire = -700 à -500 UH, la graisse = -100 à -50 UH, le foie = +50 à +70 UH, et l'os compact = +1 000 à +3 000 UH.",
        ],
        keyFormulasOrConcepts: [
          'Nombre Hounsfield (UH) = 1 000 × [(μ_tissu - μ_eau) / μ_eau]',
          'Loi d\'atténuation : I = I₀ · exp(-μ · x)',
          'Principe ALARA : As Low As Reasonably Achievable (Justification, Optimisation, Limitation des doses)',
        ],
      },
      {
        id: 'rad-c2',
        title: 'Chapitre 2 : Échographie Ultrasonore & Imagerie par Résonance Magnétique (IRM)',
        duration: '8h d\'ateliers sur console d\'imagerie',
        summary: 'Sondes piézoélectriques, impédance acoustique, effet Doppler et séquences IRM en T1 et T2.',
        content: [
          "L'échographie utilise des ultrasons non ionisants émis par des cristaux piézoélectriques (1 à 15 MHz). La réflexion de l'onde à l'interface de deux milieux dépend du saut d'impédance acoustique Z = ρ · c.",
          "L'effet Doppler quantifie la vitesse d'écoulement sanguin dans les artères et veines : Δf = (2 · f₀ · v · cos θ) / c.",
          "L'Imagerie par Résonance Magnétique (IRM) repose sur l'aimantation des protons de l'atome d'hydrogène (onde radiofréquence de Larmor : ω₀ = γ · B₀). Elle n'utilise aucun rayonnement ionisant et excelle dans l'exploration du système nerveux central, de la moelle épinière et des articulations.",
          "Séquence Pondérée en T1 : L'eau/LCR apparaît noire (hyposignal), la graisse apparaît blanche (hypersignal). Séquence Pondérée en T2 : L'eau/LCR apparaît blanche (hypersignal franc), idéale pour déceler œdèmes et lésions inflammatoires.",
        ],
        keyFormulasOrConcepts: [
          'Fréquence de Larmor du proton 1H : f = 42.58 MHz / Tesla',
          'Impédance acoustique : Z = ρ × c (kg·m⁻²·s⁻¹)',
          'Contre-indications absolues IRM : Pacemaker non compatible, corps étranger métallique intra-oculaire, clips d\'anévrisme ferromagnétiques',
        ],
      },
    ],
    keySummary: [
      'Le Scanner utilise des rayons X et mesure la densité tissulaire (UH), tandis que l\'IRM utilise un champ magnétique et des radiofréquences sans danger d\'irradiation.',
      'En radioprotection, les 3 règles universelles sont : réduire le temps d\'exposition, maximiser la distance à la source et interposer des écrans de protection plombés.',
    ],
    exercises: [
      {
        id: 'ex-rad1',
        title: 'Exercice : Interprétation de Densité Scannographique (Unités Hounsfield)',
        statement: "Un médecin urgentiste au CHUO reçoit le scanner cérébral d'un patient victime d'un AVC. Une zone anormale dans l'hémisphère droit présente une densité mesurée à +75 UH. Une autre zone présente une densité de -60 UH. Interprétez ces valeurs de densité scannographique.",
        solution: "1. Densité à +75 UH : Correspond à une hyperdensité spontanée caractéristique du sang frais coagulé (hématome ou hémorragie intracérébrale aiguë, habituellement entre +60 et +80 UH).\n2. Densité à -60 UH : Correspond à une zone graisseuse (lipome ou tissu adipeux extracrânien, les graisses se situant toujours entre -100 et -50 UH). L'urgence est l'hématome hémorragique.",
      },
    ],
    quiz: [
      {
        id: 'q-rad1',
        question: "Sur une image de Scanner (TDM), quelle est par définition conventionnelle la valeur en Unités Hounsfield (UH) de l'eau pure à température ambiante ?",
        options: ['-1 000 UH', '0 UH', '+100 UH', '+1 000 UH'],
        correctIndex: 1,
        explanation: "L'échelle de Hounsfield est étalonnée avec l'eau pure comme valeur de référence zéro (0 UH), l'air valant -1 000 UH.",
      },
    ],
  },

  // ==========================================
  // 4. INGÉNIERIE & ÉNERGIES (PÉTROLE, ÉLECTRIQUE, MINES, DOCTORAT)
  // ==========================================
  {
    id: 'ing-mecanique-l1',
    filiere: 'Ingénierie',
    speciality: 'Génie Électromécanique, Matériaux & Maintenance',
    academicCycle: 'Licence / BTS (Bac+1 à Bac+3)',
    title: 'Statique, Cinématique & Résistance des Matériaux (RDM)',
    level: 'Licence 1 / Prépa Scientifique (EPM Masuku)',
    curriculumTrack: 'Cycle 1 : Socle Scientifique & Modélisation Mécanique',
    description: 'Principe fondamental de la statique, torseurs, diagrammes des efforts tranchants et moments fléchissants dans les ossatures.',
    prerequisites: 'Calcul différentiel et intégral, lois de Newton.',
    chapters: [
      {
        id: 'ing-l1-c1',
        title: 'Chapitre 1 : Torseurs d\'Efforts & Flexion Simple des Poutres',
        duration: '7h de cours magistral',
        summary: 'Équilibre des solides déformables et dimensionnement en contrainte normale.',
        content: [
          "Principe Fondamental de la Statique (PFS) : ∑ F_ext = 0 et ∑ M_ext = 0.",
          "Flexion simple : La contrainte normale maximale σ_max = (Mf_max / I_Gz) × (h / 2).",
          "Condition de résistance élastique : σ_max ≤ Rpe = Re / s.",
        ],
        keyFormulasOrConcepts: [
          'Moment quadratique section rectangulaire : I_G = (b × h³) / 12',
          'Loi de Hooke : σ = E × ε',
        ],
      },
    ],
    keySummary: [
      'L\'ingénieur dimensionne les structures pour que les contraintes maximales restent toujours dans le domaine d\'élasticité réversible.',
    ],
    exercises: [
      {
        id: 'ex-ing1',
        title: 'Exercice : Calcul de Contrainte en Flexion',
        statement: "Une poutre rectangulaire (b = 100 mm, h = 200 mm) subit Mf = 40 kN·m. Calculez σ_max.",
        solution: "I_G = (0.1 × 0.2³) / 12 = 6.667 × 10⁻⁵ m⁴.\nσ_max = (40 000 / 6.667 × 10⁻⁵) × 0.1 = 60 MPa.",
      },
    ],
    quiz: [
      {
        id: 'q-ing1',
        question: "Quelle est l'unité du moment quadratique d'une section dans le Système International ?",
        options: ['m²', 'm³', 'm⁴', 'N·m'],
        correctIndex: 2,
        explanation: "Le moment d'inertie quadratique exprime la répartition de matière et se mesure en mètres à la puissance 4 (m⁴).",
      },
    ],
  },
  {
    id: 'ing-petrole-gaz-m2',
    filiere: 'Ingénierie',
    speciality: 'Ingénierie Pétrolière, Gaz & Réservoirs Offshore',
    academicCycle: 'Master / Ingénieur (Bac+4 à Bac+5)',
    title: 'Génie Pétrolier, Raffinage & Opérations Offshore à Port-Gentil',
    level: 'Master 2 / Diplôme d\'Ingénieur de Conception (EPM Masuku)',
    curriculumTrack: 'Cycle 2 : Spécialisation Gisements & Procédés Industriels Énergétiques',
    description: 'Mécanique des réservoirs d\'hydrocarbures, forages dirigés offshore, diagraphies, séparation triphasique et récupération assistée (EOR).',
    prerequisites: 'Thermodynamique des fluides réels, mécanique des milieux continus.',
    thesisOrCapstoneProject: 'Projet d\'Ingénierie : "Optimisation de la récupération assistée par injection de gaz sur les champs pétroliers matures du bassin sédimentaire gabonais".',
    chapters: [
      {
        id: 'pet-c1',
        title: 'Chapitre 1 : Écoulement dans les Milieux Poreux & Loi de Darcy',
        duration: '8h de modélisation',
        summary: 'Perméabilité des roches sédimentaires et régimes d\'extraction.',
        content: [
          "Le bassin côtier gabonais contient des grès et calcaires où le brut est piégé sous pression.",
          "Loi de Darcy radiale : Q = [2π · k · h · (Pe - Pw)] / [μ · ln(re / rw)].",
        ],
        keyFormulasOrConcepts: [
          'Facteur de volume de formation Bo',
          'Perméabilité en milliDarcy (mD)',
        ],
      },
    ],
    keySummary: [
      'Le pétrole est piégé dans les pores microscopiques de roches perméables sous une couverture étanche.',
    ],
    exercises: [
      {
        id: 'ex-pet1',
        title: 'Exercice : Débit d\'un Puits Offshore',
        statement: "Un puits a h = 20 m, k = 10⁻¹³ m², Pe - Pw = 80 bars (8 × 10⁶ Pa), μ = 0.002 Pa·s, ln(re/rw) = 8.52. Calculez le débit Q.",
        solution: "Q = [2π × 10⁻¹³ × 20 × 8 × 10⁶] / [0.002 × 8.52] ≈ 0.0059 m³/s ≈ 5.9 L/s (environ 3 200 barils/jour).",
      },
    ],
    quiz: [
      {
        id: 'q-pet1',
        question: "Quel mécanisme d'entraînement naturel assure le meilleur taux de récupération d'un gisement pétrolier ?",
        options: ['La détente du gaz dissous', 'L\'afflux actif de nappe d\'eau souterraine (Water Drive)', 'Le pompage seul', 'La compression manuelle'],
        correctIndex: 1,
        explanation: "Le Water Drive maintient la pression de fond par afflux continu d'eau, assurant un taux de récupération de 35% à 50%.",
      },
    ],
  },
  {
    id: 'ing-doctorat-fluides',
    filiere: 'Ingénierie',
    speciality: 'Doctorat en Sciences de l\'Ingénieur & Mécanique des Fluides',
    academicCycle: 'Doctorat / Ph.D. (Bac+6 à Bac+8)',
    title: 'Équations de Navier-Stokes, Modélisation CFD de la Turbulence & Thèse',
    level: 'Doctorat en Sciences de l\'Ingénieur (D1-D3 / Ph.D.)',
    curriculumTrack: 'Cycle 3 : Modélisation Mathématique Avancée & Recherche en Laboratoire',
    description: 'Résolution numérique des écoulements multiphasiques turbulents (RANS, LES), simulation CFD sous OpenFOAM et application aux pipelines sous-marins.',
    prerequisites: 'Diplôme d\'Ingénieur ou Master Recherche en Mécanique / Physique.',
    thesisOrCapstoneProject: 'Thèse de Doctorat d\'État : "Modélisation numérique tridimensionnelle des écoulements diphasiques turbulents dans les pipelines pétroliers sous-marins du golfe de Guinée".',
    chapters: [
      {
        id: 'doc-ing1',
        title: 'Chapitre 1 : Navier-Stokes & Modèles de Turbulence k-epsilon',
        duration: '14h de recherche doctorale',
        summary: 'Écoulements à haut nombre de Reynolds et tensions de Reynolds.',
        content: [
          "Équation de Navier-Stokes pour fluide newtonien : ρ (∂u/∂t + u · ∇u) = - ∇p + μ ∇²u + ρ g.",
          "Décomposition de Reynolds pour la turbulence et modèles de fermeture à deux équations k-ε et k-ω SST.",
        ],
        keyFormulasOrConcepts: [
          'Continuité incompressible : ∇ · u = 0',
          'Nombre de Reynolds Re = (ρ · V · L) / μ',
        ],
      },
    ],
    keySummary: [
      'La non-linéarité du terme convectif (u · ∇)u est la source mathématique de l\'apparition du chaos et de la turbulence.',
    ],
    exercises: [
      {
        id: 'ex-doc-ing1',
        title: 'Exercice : Calcul du Nombre de Reynolds',
        statement: "Dans une conduite d'eau (ρ = 1000 kg/m³, μ = 0.001 Pa·s) de diamètre D = 0.2 m, la vitesse moyenne est V = 2 m/s. Calculez Re et qualifiez le régime d'écoulement.",
        solution: "Re = (1000 × 2 × 0.2) / 0.001 = 400 000.\nComme Re > 4 000, le régime d'écoulement est pleinement turbulent.",
      },
    ],
    quiz: [
      {
        id: 'q-doc-ing1',
        question: "Au-delà de quelle valeur approximative du nombre de Reynolds l'écoulement dans une conduite cylindrique devient-il pleinement turbulent ?",
        options: ['Re > 10', 'Re > 2 300', 'Re > 1 000 000', 'Re = 0'],
        correctIndex: 1,
        explanation: "Dans une conduite circulaire, la transition laminaire-turbulent s'opère classiquement autour d'un nombre de Reynolds critique de 2 300 à 4 000.",
      },
    ],
  },

  // ==========================================
  // 5. PILOTAGE D'AVION & AÉRONAUTIQUE (PPL, ATPL, DOCTORAT)
  // ==========================================
  {
    id: 'pilotage-ppl-l1',
    filiere: 'Pilotage d\'avion',
    speciality: 'Pilotage Privé & Commercial (PPL & CPL VFR)',
    academicCycle: 'Licence / BTS (Bac+1 à Bac+3)',
    title: 'Aérodynamique Fondamentale, Mécanique du Vol & Vol à Vue (VFR)',
    level: 'PPL / CPL - Licence 1 Aéronautique',
    curriculumTrack: 'Cycle 1 : Pilotage VFR & Maniabilité Élémentaire (Cessna / Piper)',
    description: 'Les 4 forces du vol (Portance, Poids, Traction, Traînée), décrochage, altimétrie (QNH/QFE), instruments gyroscopiques et radiotéléphonie aéronautique.',
    prerequisites: 'Bac scientifique, certificat médical aéronautique de Classe 2.',
    chapters: [
      {
        id: 'ppl-c1',
        title: 'Chapitre 1 : Les 4 Forces & Théorème de Bernoulli de l\'Aile',
        duration: '6h d\'instruction théorique au sol',
        summary: 'Équilibre des forces en palier, angle d\'attaque et portance.',
        content: [
          "En vol palier stabilisé, Portance = Poids et Traction = Traînée.",
          "Formule générale de la portance : Rz = 1/2 · ρ · S · V² · Cz.",
        ],
        keyFormulasOrConcepts: [
          'Facteur de charge en virage : n = 1 / cos(θ). À 60° d\'inclinaison, n = 2g.',
        ],
      },
    ],
    keySummary: [
      'L\'avion décroche toujours au même angle d\'attaque critique, peu importe sa vitesse ou son altitude.',
    ],
    exercises: [
      {
        id: 'ex-ppl1',
        title: 'Exercice : Facteur de Charge en Virage',
        statement: "Un avion de 1 200 kg incline ses ailes à 45° en virage horizontal coordonné. Calculez le facteur de charge n.",
        solution: "n = 1 / cos(45°) = 1 / 0.7071 ≈ 1.41 g.",
      },
    ],
    quiz: [
      {
        id: 'q-ppl1',
        question: "Quelle action prioritaire le pilote doit-il exécuter immédiatement lors d'un début de décrochage ?",
        options: ['Tirer fort sur le manche vers l\'arrière', 'Pousser le manche vers l\'avant pour diminuer l\'incidence', 'Couper totalement les moteurs', 'Ouvrir la verrière'],
        correctIndex: 1,
        explanation: "Pousser le manche vers l'avant réduit l'angle d'attaque sous l'incidence critique pour recoller l'écoulement d'air sur l'extrados.",
      },
    ],
  },
  {
    id: 'pilotage-atpl-m2',
    filiere: 'Pilotage d\'avion',
    speciality: 'Pilote de Ligne (ATPL) & Vol aux Instruments IFR Multipilote',
    academicCycle: 'Master / Ingénieur (Bac+4 à Bac+5)',
    title: 'Navigation Instrumentale Avancée, Météorologie Équatoriale & Conduite Multipilote (MCC)',
    level: 'ATPL Théorique & Pratique (Airline Transport Pilot) - Master 2',
    curriculumTrack: 'Cycle 2 : Qualification IFR/Multi-Moteurs & Transport Aérien Régulier',
    description: 'Procédures ILS/RNAV, gestion des turbulences orageuses (ZCIT / Cumulonimbus tropicaux au Gabon), calcul de carburant ETOPS et Crew Resource Management (CRM).',
    prerequisites: 'CPL, vol aux instruments IFR, visite médicale Classe 1.',
    thesisOrCapstoneProject: 'Mémoire de Synthèse Opérationnelle : "Gestion des menaces et des erreurs (TEM) lors des approches RNAV par mauvaise visibilité saisonnière sur l\'Aéroport International Léon Mba".',
    chapters: [
      {
        id: 'atpl-c1',
        title: 'Chapitre 1 : Météorologie Tropicale, ZCIT & Radar Météo Aéroportuaire',
        duration: '8h de formation simulateur',
        summary: 'Évitement des cellules orageuses et calculs PNR/ETP.',
        content: [
          "Le ciel équatorial est dominé par la Zone de Convergence Intertropicale (ZCIT). Les Cumulonimbus (Cb) peuvent monter jusqu'à 50 000 pieds.",
          "Dangers : Rafales descendantes (Microbursts) créant des cisaillements de vent, foudre et givrage sévère.",
        ],
        keyFormulasOrConcepts: [
          'Point d\'Égale Durée (ETP) = (Distance × Vitesse retour) / (Vitesse aller + Vitesse retour)',
        ],
      },
    ],
    keySummary: [
      'Dans un cockpit multipilote, la communication claire (CRM) et le partage des rôles PF/PM évitent 80% des accidents.',
    ],
    exercises: [
      {
        id: 'ex-atpl1',
        title: 'Exercice : Calcul du Point d\'Égale Durée',
        statement: "Distance D = 2 400 NM. Vitesse aller = 450 kts, vitesse retour = 390 kts. Calculez la distance de l'ETP.",
        solution: "D_ETP = (2 400 × 390) / (450 + 390) = 936 000 / 840 ≈ 1 114 NM.",
      },
    ],
    quiz: [
      {
        id: 'q-atpl1',
        question: "Sur un radar météo de bord, quelle couleur indique la zone de turbulence convective maximale à éviter impérativement ?",
        options: ['Vert', 'Jaune', 'Magenta', 'Bleu ciel'],
        correctIndex: 2,
        explanation: "Le magenta indique les turbulences sévères avec risque majeur de cisaillement de vent (Windshear).",
      },
    ],
  },
  {
    id: 'pilotage-doctorat-aero',
    filiere: 'Pilotage d\'avion',
    speciality: 'Sûreté Aérospatiale, Facteurs Humains & Recherche Doctorale',
    academicCycle: 'Doctorat / Ph.D. (Bac+6 à Bac+8)',
    title: 'Sûreté du Transport Aérien, Ergonomie Cognitive & Thèse Doctorale',
    level: 'Doctorat en Ingénierie Aérospatiale & Sécurité Aérienne',
    curriculumTrack: 'Cycle 3 : Recherche Aéronautique, Réglementation OACI & Thèse',
    description: 'Modélisation des facteurs humains, automatisation du cockpit, intelligence artificielle dans le contrôle aérien (ATC) et résilience opérationnelle.',
    prerequisites: 'Pilote professionnel ou ingénieur avec cursus Master Recherche.',
    thesisOrCapstoneProject: 'Thèse de Doctorat : "Modélisation prédictive de la fatigue cognitive des pilotes de ligne sur les liaisons transéquatoriales de nuit et optimisation des systèmes d\'alerte bord".',
    chapters: [
      {
        id: 'doc-aero1',
        title: 'Chapitre 1 : Modèle SHELL & Ergonomie Cognitive en Aéronautique',
        duration: '12h de recherche doctorale',
        summary: 'Interaction homme-machine, vigilance circadienne et résilience.',
        content: [
          "Modèle SHELL de l'OACI : Software (procédures), Hardware (aéronef), Environment (météo), Liveware (humain et ses interactions).",
          "Safety-II : Étudier les mécanismes d'adaptation et de réussite des équipages face à l'imprévu.",
        ],
        keyFormulasOrConcepts: [
          'Facteurs circadiens de vigilance de la FAA (modèle SAFTE)',
        ],
      },
    ],
    keySummary: [
      'Plus un système automatique est perfectionné, plus le rôle de l\'humain devient décisif lors d\'un événement imprévu.',
    ],
    exercises: [
      {
        id: 'ex-doc-aero1',
        title: 'Exercice : Modélisation de la Fatigue en Vol',
        statement: "Analysez l'impact d'une dette de sommeil de 4 heures sur la vigilance d'un équipage de nuit.",
        solution: "Une dette de 4h multiplie par 4 le risque de micro-sommeil entre 02h00 et 05h00 du matin, justifiant le protocole de repos contrôlé au poste.",
      },
    ],
    quiz: [
      {
        id: 'q-doc-aero1',
        question: "Dans le modèle SHELL de l'OACI, que représente le composant central 'L' ?",
        options: ["Le train d'atterrissage", "L'élément humain au centre du système (Liveware)", "La portance", "La loi"],
        correctIndex: 1,
        explanation: "Liveware représente l'être humain avec ses capacités et ses limites au centre de toutes les interactions aéronautiques.",
      },
    ],
  },

  // ==========================================
  // 6. GÉNIE CIVIL & BTP (L1 AU DOCTORAT)
  // ==========================================
  {
    id: 'genie-civil-l1-structures',
    filiere: 'Génie civil',
    speciality: 'Structures Béton Armé & Construction Durable',
    academicCycle: 'Licence / BTS (Bac+1 à Bac+3)',
    title: 'Béton Armé aux États Limites (BAEL / Eurocode 2) & Matériaux BTP',
    level: 'Licence 2 / Licence 3 Génie Civil',
    curriculumTrack: 'Cycle 1 : Calcul de Structures & Matériaux de Construction',
    description: 'Synergie acier-béton, calcul des armatures longitudinales à l\'ELU, flèche à l\'ELS et résistance des bétons en milieu tropical.',
    prerequisites: 'RDM de base, résistance des matériaux.',
    chapters: [
      {
        id: 'gc-l1-c1',
        title: 'Chapitre 1 : Dimensionnement du Ferraillage d\'une Poutre à l\'ELU',
        duration: '8h de cours et bureau d\'études',
        summary: 'Calcul d\'armatures tendues et vérification du béton comprimé.',
        content: [
          "À l'ELU, la combinaison d'actions fondamentale est 1.35 G + 1.5 Q.",
          "Section d'acier tendu en flexion simple : Ast = Mu / (z · fyd).",
        ],
        keyFormulasOrConcepts: [
          'Section d\'acier tendu : Ast = Mu / (z × fyd)',
          'Enrobage minimal en zone côtière gabonaise : 4 à 5 cm',
        ],
      },
    ],
    keySummary: [
      'En climat tropical côtier humide, l\'enrobage et la compacité du béton sont capitaux pour protéger les aciers contre la rouille saline.',
    ],
    exercises: [
      {
        id: 'ex-gc-l1',
        title: 'Exercice : Calcul de Section d\'Acier',
        statement: "Mu = 120 kN·m, z = 0.40 m, fyd = 435 MPa. Calculez la section Ast.",
        solution: "Ast = 120 000 / (0.40 × 435 × 10⁶) = 6.90 cm² (soit 4 barres HA 16).",
      },
    ],
    quiz: [
      {
        id: 'q-gc-l1',
        question: "Pourquoi ajoute-t-on des cadres et étriers transversaux dans une poutre en béton armé ?",
        options: ['Pour la décoration', 'Pour reprendre l\'effort tranchant et empêcher la fissuration oblique à 45°', 'Pour alléger le béton', 'Pour faciliter le coulage'],
        correctIndex: 1,
        explanation: "Les armatures transversales reprennent les contraintes de cisaillement causées par l'effort tranchant.",
      },
    ],
  },
  {
    id: 'genie-civil-doctorat-geotech',
    filiere: 'Génie civil',
    speciality: 'Géotechnique des Sols Tropicaux & Fondations Profondes',
    academicCycle: 'Doctorat / Ph.D. (Bac+6 à Bac+8)',
    title: 'Mécanique des Sols Non Saturés, Latérites Gabonaises & Thèse',
    level: 'Doctorat en Génie Civil (D1-D3 / Ph.D.)',
    curriculumTrack: 'Cycle 3 : Modélisation des Sols Tropicaux & Grands Travaux d\'Art',
    description: 'Comportement élastoplastique des latérites sous fortes pluies, calcul des pieux forés de fondation, stabilité des talus de la Transgabonaise et soutenance de thèse.',
    prerequisites: 'Master 2 Recherche ou Diplôme d\'Ingénieur BTP.',
    thesisOrCapstoneProject: 'Thèse de Doctorat : "Étude du comportement hydromécanique et de la stabilité des talus de déblais routiers sur les sols latéritiques du réseau routier national gabonais".',
    chapters: [
      {
        id: 'gc-doc1',
        title: 'Chapitre 1 : Latérites Tropicales, Succion Matricielle & Rupture de Talus',
        duration: '14h de recherche doctorale',
        summary: 'Écoulement des eaux d\'infiltration et perte de cohésion apparente.',
        content: [
          "Les sols latéritiques gabonais possèdent une cohésion apparente liée à la succion matricielle (ua - uw) en saison sèche.",
          "Lors des fortes pluies, la saturation annule la succion, déclenchant des glissements de terrain le long des routes nationales sans drainage adéquat.",
        ],
        keyFormulasOrConcepts: [
          'Facteur de sécurité d\'un talus Fs = Résistance au cisaillement disponible / Forces motrices',
        ],
      },
    ],
    keySummary: [
      'Sur les sols équatoriaux, les ouvrages hydrauliques de drainage des eaux sont aussi capitaux que le dimensionnement structural du pont.',
    ],
    exercises: [
      {
        id: 'ex-gc-doc1',
        title: 'Exercice : Facteur de Sécurité d\'un Talus',
        statement: "Forces motrices = 450 kN/m. Résistance sèche = 675 kN/m, résistance saturée = 400 kN/m. Calculez les Fs.",
        solution: "Fs sec = 675 / 450 = 1.50 (stable).\nFs saturé = 400 / 450 = 0.888 (instable : glissement imminent).",
      },
    ],
    quiz: [
      {
        id: 'q-gc-doc1',
        question: "Que provoque la saturation en eau d'un talus latéritique non saturé lors des saisons pluvieuses au Gabon ?",
        options: ['Une consolidation instantanée', 'L\'annulation de la succion matricielle et la perte de cohésion apparente', 'Une augmentation de résistance', 'Aucun effet'],
        correctIndex: 1,
        explanation: "La saturation annule la pression capillaire négative, faisant chuter la cohésion apparente et déclenchant la rupture du talus.",
      },
    ],
  },

  // ==========================================
  // 7. INTELLIGENCE ARTIFICIELLE (L1 AU DOCTORAT)
  // ==========================================
  {
    id: 'ia-fondements-l1',
    filiere: 'Intelligence Artificielle',
    speciality: 'Machine Learning & Data Science Fondamentale',
    academicCycle: 'Licence / BTS (Bac+1 à Bac+3)',
    title: 'Algèbre Linéaire, Probabilités & Apprentissage Supervisé en Python',
    level: 'Licence 2 / Licence 3 IA & Data Science',
    curriculumTrack: 'Cycle 1 : Bases Mathématiques & Algorithmes de Machine Learning',
    description: 'Vecteurs, matrices, régressions linéaires et logistiques, descente de gradient, arbres de décision et bibliothèques scikit-learn / NumPy.',
    prerequisites: 'Bac scientifique, bases de programmation Python.',
    chapters: [
      {
        id: 'ia-l1-c1',
        title: 'Chapitre 1 : Le Neurone Formel, Fonction de Coût & Descente de Gradient',
        duration: '7h de cours théorique et coding',
        summary: 'Poids synaptiques, biais, fonctions d\'activation (ReLU, Sigmoïde) et optimisation.',
        content: [
          "Un neurone artificiel réalise une combinaison linéaire de ses entrées x_i pondérées par des poids w_i, augmentée d'un biais b, puis applique une fonction d'activation non-linéaire f : y = f(∑ w_i x_i + b).",
          "La descente de gradient met à jour les poids pour minimiser l'erreur : W = W - η · ∇Loss(W).",
        ],
        keyFormulasOrConcepts: [
          'Erreur Quadratique Moyenne (MSE) = 1/n ∑ (y_réel - y_prédit)²',
          'ReLU : f(z) = max(0, z)',
        ],
      },
    ],
    keySummary: [
      'Sans fonction d\'activation non-linéaire, un réseau de neurones à 100 couches ne ferait qu\'une banale régression linéaire.',
    ],
    exercises: [
      {
        id: 'ex-ia-l1',
        title: 'Exercice : Calcul de Sortie d\'un Neurone Sigmoïde',
        statement: "x1 = 1, x2 = 2. w1 = 0.5, w2 = -0.5, b = 0.5. Calculez z puis y = 1 / (1 + e^-z).",
        solution: "z = (0.5 × 1) + (-0.5 × 2) + 0.5 = 0.\ny = 1 / (1 + e^0) = 1 / 2 = 0.5 (50%).",
      },
    ],
    quiz: [
      {
        id: 'q-ia-l1',
        question: "Quelle fonction d'activation retourne 0 pour toute entrée négative et la valeur de l'entrée elle-même pour toute entrée positive ?",
        options: ['Sigmoïde', 'Tangente Hyperbolique', 'ReLU (Rectified Linear Unit)', 'Softmax'],
        correctIndex: 2,
        explanation: "ReLU est définie par f(x) = max(0, x), évitant la disparition du gradient pour les valeurs positives.",
      },
    ],
  },
  {
    id: 'ia-deeplearning-m2',
    filiere: 'Intelligence Artificielle',
    speciality: 'Deep Learning, Vision par Ordinateur & NLP',
    academicCycle: 'Master / Ingénieur (Bac+4 à Bac+5)',
    title: 'Réseaux Convolutifs (CNN), Modèles Transformers & Traitement d\'Images',
    level: 'Master 2 - Intelligence Artificielle & Systèmes Intelligents',
    curriculumTrack: 'Cycle 2 : Deep Learning Avancé & Traitement Multimodal',
    description: 'Convolutions spatiales, architectures ResNet, Attention multi-têtes, fine-tuning de modèles de vision pour la surveillance de la forêt équatoriale gabonaise.',
    prerequisites: 'Master 1 IA, maîtrise de PyTorch.',
    thesisOrCapstoneProject: 'Projet de Recherche : "Détection automatique par vision par ordinateur des coupes illégales de bois dans le bassin de l\'Ogooué à partir d\'imagerie satellite Sentinel-2".',
    chapters: [
      {
        id: 'ia-m2-c1',
        title: 'Chapitre 1 : Réseaux Convolutifs (CNN) & Détection d\'Objets',
        duration: '8h d\'ateliers PyTorch',
        summary: 'Couches convolutives, filtres, Pooling et connexions résiduelles.',
        content: [
          "Les CNN utilisent des noyaux de convolution glissants pour extraire des caractéristiques visuelles locales invariantes par translation (bords, textures, formes complexes).",
          "Les connexions résiduelles (ResNet) permettent d'entraîner des réseaux de plus de 100 couches sans disparition du gradient.",
        ],
        keyFormulasOrConcepts: [
          'Formule de dimension de sortie de convolution : O = ⌊(W - K + 2P) / S⌋ + 1',
        ],
      },
    ],
    keySummary: [
      'Le transfert d\'apprentissage (Transfer Learning) permet d\'adapter des modèles pré-entraînés géants à des cas d\'usage locaux avec peu de données.',
    ],
    exercises: [
      {
        id: 'ex-ia-m2',
        title: 'Exercice : Dimension de Sortie d\'une Convolution',
        statement: "Image d'entrée W = 224, taille du filtre K = 7, padding P = 3, pas (stride) S = 2. Calculez la taille de sortie O.",
        solution: "O = ⌊(224 - 7 + 2×3) / 2⌋ + 1 = ⌊(224 - 7 + 6) / 2⌋ + 1 = ⌊223 / 2⌋ + 1 = 111 + 1 = 112 pixels.",
      },
    ],
    quiz: [
      {
        id: 'q-ia-m2',
        question: "Dans une architecture ResNet, quel mécanisme permet d'entraîner des réseaux extrêmement profonds ?",
        options: ['L\'utilisation exclusive de la fonction sigmoïde', 'Les connexions résiduelles de saut (Skip connections)', 'La suppression du gradient', 'La division par zéro'],
        correctIndex: 1,
        explanation: "Les skip connections permettent au gradient de s'écouler directement à travers le réseau sans être écrasé par les multiplications successives.",
      },
    ],
  },
  {
    id: 'ia-doctorat-phd',
    filiere: 'Intelligence Artificielle',
    speciality: 'Recherche Fondamentale en IA & Modèles Génératifs (Ph.D.)',
    academicCycle: 'Doctorat / Ph.D. (Bac+6 à Bac+8)',
    title: 'Architectures Transformers Avancées, Raisonnement Multimodal & Thèse de Doctorat',
    level: 'Doctorat en Intelligence Artificielle (Ph.D. / D1-D3)',
    curriculumTrack: 'Cycle 3 : Recherche Fondamentale, Modèles Fondations & Éthique pour l\'Afrique',
    description: 'Mécanismes d\'attention multi-têtes (Multi-Head Self-Attention), alignement RLHF / DPO, raisonnement avec chaînes de pensée (CoT), traitement des langues nationales gabonaises et publication scientifique internationale.',
    prerequisites: 'Master 2 Recherche en IA ou Data Science avec mémoire soutenu.',
    thesisOrCapstoneProject: 'Thèse de Doctorat en IA : "Modélisation de modèles de fondation multilingues auto-supervisés pour la préservation et la traduction des langues gabonaises à faibles ressources (Fang, Punu, Nzebi)".',
    chapters: [
      {
        id: 'ia-doc1',
        title: 'Chapitre 1 : Scaled Dot-Product Attention & Lois d\'Échelle (Scaling Laws)',
        duration: '15h de recherche doctorale',
        summary: 'Formulation matricielle QKV, encodages positionnels rotatifs et régularisation.',
        content: [
          "L'architecture Transformer (Vaswani et al.) repose sur l'attention globale : Attention(Q, K, V) = softmax((Q · K^T) / √d_k) · V.",
          "Lois d'échelle de Chinchilla : Le nombre optimal de tokens d'entraînement est d'environ 20 fois le nombre de paramètres du modèle.",
        ],
        keyFormulasOrConcepts: [
          'Scaled Dot-Product Attention : Softmax[(Q · K^T) / √d_k] · V',
        ],
      },
    ],
    keySummary: [
      'L\'Afrique ne doit pas être un simple consommateur d\'IA mais un acteur créateur de modèles adaptés à ses réalités linguistiques, agricoles et médicales.',
    ],
    exercises: [
      {
        id: 'ex-ia-doc1',
        title: 'Exercice : Calcul du Ratio Optimal Chinchilla',
        statement: "Pour entraîner un modèle de 7 milliards de paramètres (7B), combien de tokens d'entraînement sont recommandés ?",
        solution: "Tokens optimaux = 7 × 10⁹ × 20 = 140 milliards de tokens (140B tokens).",
      },
    ],
    quiz: [
      {
        id: 'q-ia-doc1',
        question: "Dans le mécanisme d'attention des Transformers, pourquoi divise-t-on le produit matriciel par la racine carrée de la dimension √d_k ?",
        options: ['Pour réduire la mémoire', 'Pour éviter les gradients quasi-nuls dans le Softmax', 'Pour traduire automatiquement', 'Pour compresser le texte'],
        correctIndex: 1,
        explanation: "Diviser par √d_k normalise la variance à 1, empêchant le Softmax de saturer avec des gradients évanescents.",
      },
    ],
  },
];
