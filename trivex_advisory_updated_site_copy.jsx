import { useMemo, useState, type ComponentType, type FormEvent } from "react";
import {
  Globe,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Briefcase,
  FileCheck2,
  Scale,
  Warehouse,
  ChevronRight,
  Sparkles,
  Building2,
  FileText,
  CheckCircle2,
  BadgeCheck,
  ArrowRight,
  Landmark,
  LifeBuoy,
} from "lucide-react";

type Lang = "en" | "fr" | "nl";

type ServiceItem = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

type CardItem = {
  label: string;
  title: string;
  text: string;
};

type LocaleContent = {
  nav: { services: string; process: string; about: string; contact: string };
  badge: string;
  heroTitle: string;
  heroText: string;
  ctaPrimary: string;
  ctaSecondary: string;
  highlights: string[];
  cards: {
    core: CardItem;
    auth: CardItem;
    network: CardItem;
    approach: CardItem;
  };
  whoTitle: string;
  whoText: string;
  brandText: string;
  servicesTitle: string;
  servicesText: string;
  services: ServiceItem[];
  recoveryLabel: string;
  recoveryTitle: string;
  recoveryText: string;
  recoveryPoints: string[];
  logisticsLabel: string;
  logisticsTitle: string;
  logisticsText: string;
  logisticsPoints: string[];
  processTitle: string;
  processText: string;
  process: string[];
  aboutLabel1: string;
  aboutTitle1: string;
  aboutText1: string;
  aboutLabel2: string;
  aboutTitle2: string;
  aboutText2: string;
  trustIntroTitle: string;
  trustIntroText: string;
  disclaimerTitle: string;
  disclaimerText: string;
  contactLabel: string;
  contactTitle: string;
  contactText: string;
  form: {
    name: string;
    company: string;
    email: string;
    message: string;
    submit: string;
  };
};

type TrustPoint = { title: string; text: string };

const content: Record<Lang, LocaleContent> = {
  en: {
    nav: { services: "Services", process: "Process", about: "About", contact: "Contact" },
    badge: "Premium advisory and operational coordination for customs, excise, VAT, restructuring and complex business files",
    heroTitle: "Premium advisory for customs, excise, VAT and business-critical situations.",
    heroText:
      "Trivex Advisory supports importers, exporters, warehouses, logistics businesses, entrepreneurs and international operators with customs strategy, excise support, import VAT and global VAT files, customs authorizations, business recovery guidance, insurance-related coordination and cross-border structuring support.",
    ctaPrimary: "Request a consultation",
    ctaSecondary: "Explore services",
    highlights: [
      "Premium advisory positioning",
      "Belgium-based operational support",
      "Structured strategic files",
      "Customs and recovery coordination",
    ],
    cards: {
      core: {
        label: "Core Focus",
        title: "Customs Representative & Strategic Files",
        text: "Structured support for customs-related registrations, annexes, internal documents, supporting evidence, operational positioning and sensitive business files.",
      },
      auth: {
        label: "Authorizations",
        title: "Bonded Warehouse & Compliance Set-Ups",
        text: "Guidance for bonded warehouse applications, temporary storage, customs authorizations, and related operational compliance requirements.",
      },
      network: {
        label: "Recovery",
        title: "Entrepreneurs in Difficulty",
        text: "Strategic review and coordination for entrepreneurs and companies facing debt pressure, unprofitable contracts, excessive fixed costs or complex administrative situations.",
      },
      approach: {
        label: "Approach",
        title: "Precise, Premium & Coordinated",
        text: "A clear, high-value approach built around file quality, operational speed, credibility and trusted partner coordination where needed.",
      },
    },
    whoTitle: "A firm built to create confidence before the first meeting.",
    whoText:
      "The website should present much more than a list of services. It should reflect a documented, serious and organized structure capable of handling sensitive customs, VAT, restructuring, logistics and business recovery matters.",
    brandText:
      "A premium visual direction with offices, files, logistics environments, insurance-related casework and administrative detail immediately reinforces commercial credibility.",
    servicesTitle: "A premium advisory structure around customs, trade compliance and business recovery.",
    servicesText:
      "Built for importers, exporters, logistics businesses, warehouses, customs-sensitive operators, entrepreneurs under pressure and companies that need structure, clarity and credible coordination.",
    services: [
      {
        icon: ShieldCheck,
        title: "Customs & Excise Advisory",
        desc: "Specialized consulting for customs, excise, import and export operations, regulatory interpretation, process structuring, and operational guidance for companies trading internationally.",
      },
      {
        icon: FileCheck2,
        title: "Customs Representative Registration Support",
        desc: "End-to-end preparation and follow-up of files for companies seeking registration as customs representatives, including document structuring, annex review, and practical guidance throughout the process.",
      },
      {
        icon: Warehouse,
        title: "Bonded Warehouse & Customs Authorizations",
        desc: "Preparation and coordination of applications related to bonded warehouses, temporary storage, customs authorizations, and operational customs set-ups requiring a compliant and structured file.",
      },
      {
        icon: Briefcase,
        title: "Import VAT & Global VAT Assistance",
        desc: "Direct handling of import VAT and global VAT procedures, including file preparation, supporting documentation, practical follow-up, and coordination where tax or accounting input is required.",
      },
      {
        icon: Landmark,
        title: "Business Recovery & Strategic Restructuring Guidance",
        desc: "Support for entrepreneurs and companies facing financial pressure, poor margins, excessive fixed costs, unprofitable contracts or administrative complexity, with a focus on clarity, options and next-step coordination.",
      },
      {
        icon: Scale,
        title: "Dispute File Preparation & Partner Coordination",
        desc: "Technical preparation and strategic follow-up of customs-related or business-sensitive files, including document review, chronology building and coordination with trusted legal or specialist partners when needed.",
      },
      {
        icon: LifeBuoy,
        title: "Insurance, Claims & Logistics Incident Support",
        desc: "Structured support for logistics incidents, cargo loss, theft, damages, insurance-related documentation and case coordination to help the client defend its interests properly.",
      },
      {
        icon: Globe,
        title: "International Structuring & Cross-Border Guidance",
        desc: "Strategic support for entrepreneurs exploring foreign company formation, international expansion, and cross-border operational structuring with the right partner ecosystem.",
      },
    ],
    recoveryLabel: "Entrepreneurs in difficulty",
    recoveryTitle: "Because a difficult period should not mean the end of the road.",
    recoveryText:
      "Trivex Advisory also supports entrepreneurs and companies facing financial pressure, heavy debt exposure, operational instability, excessive fixed costs, unprofitable contracts or complex administrative situations. The objective is to restore visibility, identify realistic options and coordinate the right next steps with trusted partners.",
    recoveryPoints: [
      "Review of fixed costs, contract profitability and structural pressure points",
      "Strategic guidance for entrepreneurs who need a clear recovery path",
      "Preparation and coordination of files with legal, accounting or specialist partners",
      "Support for business interruption, insolvency-related preparation and practical next-step planning",
    ],
    logisticsLabel: "Operational incidents & support",
    logisticsTitle: "When a file becomes urgent, technical or sensitive, structure matters.",
    logisticsText:
      "Thanks to its proximity to logistics and operational environments, Trivex can also assist with the preparation and coordination of insurance files, transport incidents, theft-related documentation, cargo disputes and continuity matters requiring both structure and speed.",
    logisticsPoints: [
      "Insurance and claims file preparation support",
      "Coordination of logistics incidents and supporting evidence",
      "Chronology building, document review and operational clarification",
      "Guidance for companies needing both administrative and strategic support",
    ],
    processTitle: "A clear workflow from first review to final follow-up.",
    processText:
      "Every file is approached with structure, document control and coordinated execution to reduce delays, strengthen credibility and avoid preventable mistakes.",
    process: [
      "Initial review of the company’s customs, VAT, excise, restructuring or authorization objective",
      "Assessment of documents, missing elements, commercial exposure and compliance positioning",
      "Preparation of the file, annexes, supporting evidence and action structure",
      "Coordination with appropriate legal, accounting, customs or specialist partners when required",
      "Submission follow-up, practical support and ongoing monitoring until completion or strategic handover",
    ],
    aboutLabel1: "Why Trivex",
    aboutTitle1: "One strategic point of contact for customs, restructuring and complex business files.",
    aboutText1:
      "Trivex Advisory is designed as a premium coordination and advisory structure for businesses facing customs, excise, VAT, authorization, logistics incident and business recovery challenges. The objective is simple: make files stronger, clearer and better prepared from the start.",
    aboutLabel2: "Positioning",
    aboutTitle2: "Advisory first. Structured execution and partner coordination when needed.",
    aboutText2:
      "The model combines high-level advisory, direct operational handling of strategic files, and close collaboration with trusted professional partners, including legal, accounting, logistics and specialist support where required.",
    trustIntroTitle: "A structure designed to win complex files and inspire confidence from the first contact.",
    trustIntroText:
      "Trivex Advisory is built to appear as a premium, rare and immediately credible player in its market.",
    disclaimerTitle: "Important positioning note",
    disclaimerText:
      "Trivex Advisory provides strategic advisory, operational file preparation and partner coordination. Legal acts, court representation and reserved legal services are handled by qualified professionals where required.",
    contactLabel: "Contact",
    contactTitle: "Let’s structure your file properly.",
    contactText:
      "Contact us for customs strategy, bonded warehouse applications, customs representative registration support, import VAT and global VAT files, business recovery guidance, insurance-related matters and cross-border structuring support.",
    form: {
      name: "Name",
      company: "Company",
      email: "Email",
      message: "Tell us what you need support with",
      submit: "Send request",
    },
  },
  fr: {
    nav: { services: "Services", process: "Process", about: "À propos", contact: "Contact" },
    badge:
      "Conseil premium et coordination opérationnelle pour la douane, les accises, la TVA, le redressement et les dossiers d’entreprise complexes",
    heroTitle: "Le conseil premium pour la douane, les accises, la TVA et les situations critiques d’entreprise.",
    heroText:
      "Trivex Advisory accompagne les importateurs, exportateurs, entrepôts, logisticiens, entrepreneurs et opérateurs internationaux avec une stratégie douanière claire, un support accises, la prise en charge des dossiers de TVA à l’importation et de TVA globale, les autorisations douanières, l’accompagnement en redressement, la coordination de dossiers assurances et l’assistance en structuration internationale.",
    ctaPrimary: "Demander une consultation",
    ctaSecondary: "Découvrir nos services",
    highlights: [
      "Positionnement premium",
      "Support opérationnel basé en Belgique",
      "Dossiers stratégiques structurés",
      "Coordination douane et redressement",
    ],
    cards: {
      core: {
        label: "Spécialité",
        title: "Dossiers douaniers & dossiers stratégiques",
        text: "Accompagnement structuré pour les inscriptions, annexes, documents internes, pièces justificatives, positionnement opérationnel et dossiers sensibles de l’entreprise.",
      },
      auth: {
        label: "Autorisations",
        title: "Entrepôt sous douane & conformité",
        text: "Accompagnement pour les demandes d’entrepôt sous douane, stockage temporaire, autorisations douanières et exigences opérationnelles liées à la conformité.",
      },
      network: {
        label: "Redressement",
        title: "Entrepreneurs en difficulté",
        text: "Analyse stratégique et coordination pour les indépendants et sociétés confrontés à l’endettement, à des contrats non rentables, à des frais fixes trop élevés ou à des situations administratives complexes.",
      },
      approach: {
        label: "Approche",
        title: "Précise, premium & coordonnée",
        text: "Une approche claire à forte valeur ajoutée, fondée sur la qualité des dossiers, la rapidité opérationnelle, la crédibilité et la coordination des bons partenaires.",
      },
    },
    whoTitle: "Un cabinet construit pour inspirer confiance avant même le premier rendez-vous.",
    whoText:
      "Le site doit montrer bien plus qu’une liste de services. Il doit refléter une structure documentée, sérieuse et organisée capable de gérer des dossiers sensibles en douane, TVA, redressement, logistique et continuité d’activité.",
    brandText:
      "Une direction artistique premium avec bureaux, dossiers, environnement logistique, gestion de sinistres et détails administratifs renforce immédiatement la crédibilité commerciale.",
    servicesTitle: "Une structure premium de conseil autour de la douane, de la conformité et du redressement.",
    servicesText:
      "Pensé pour les importateurs, exportateurs, logisticiens, entrepôts, opérateurs sensibles à la douane, entrepreneurs sous pression et sociétés qui ont besoin de structure, de clarté et d’une coordination crédible.",
    services: [
      {
        icon: ShieldCheck,
        title: "Conseil en douane & accises",
        desc: "Conseil spécialisé pour les opérations d’import-export, les accises, l’interprétation réglementaire, la structuration des process et l’accompagnement opérationnel des entreprises actives à l’international.",
      },
      {
        icon: FileCheck2,
        title: "Accompagnement à l’inscription comme représentant en douane",
        desc: "Préparation complète et suivi des dossiers pour les sociétés souhaitant s’inscrire comme représentants en douane, avec structuration du dossier, revue des annexes et accompagnement pratique à chaque étape.",
      },
      {
        icon: Warehouse,
        title: "Entrepôt sous douane & autorisations douanières",
        desc: "Préparation et coordination des demandes liées aux entrepôts sous douane, au stockage temporaire, aux autorisations douanières et aux montages opérationnels nécessitant un dossier structuré et conforme.",
      },
      {
        icon: Briefcase,
        title: "TVA à l’importation & TVA globale",
        desc: "Prise en charge des procédures de TVA à l’importation et de TVA globale, avec préparation du dossier, pièces justificatives, suivi pratique et coordination lorsqu’un support fiscal ou comptable est nécessaire.",
      },
      {
        icon: Landmark,
        title: "Conseil en redressement & difficultés d’entreprise",
        desc: "Accompagnement des indépendants et des sociétés confrontés à des tensions financières, des marges insuffisantes, des coûts fixes trop élevés, des contrats non rentables ou des situations administratives complexes, avec un focus sur la clarté et les prochaines étapes.",
      },
      {
        icon: Scale,
        title: "Préparation de dossiers sensibles & coordination partenaires",
        desc: "Préparation technique et suivi stratégique des dossiers douaniers ou d’entreprise sensibles, avec revue documentaire, chronologie des faits et coordination avec les partenaires juridiques ou spécialisés lorsque nécessaire.",
      },
      {
        icon: LifeBuoy,
        title: "Sinistres logistiques, assurances & réclamations",
        desc: "Support structuré pour les incidents logistiques, pertes, vols, dommages, documentation assurance et coordination des dossiers afin de défendre correctement les intérêts du client.",
      },
      {
        icon: Globe,
        title: "Structuration internationale & accompagnement transfrontalier",
        desc: "Accompagnement stratégique pour les entrepreneurs qui envisagent une société à l’étranger, une implantation internationale ou une structuration cross-border avec le bon écosystème de partenaires.",
      },
    ],
    recoveryLabel: "Entrepreneurs en difficulté",
    recoveryTitle: "Parce qu’une période difficile ne doit pas signifier la fin du parcours.",
    recoveryText:
      "Trivex Advisory accompagne aussi les indépendants et les sociétés confrontés à une pression financière, à un endettement important, à une instabilité opérationnelle, à des coûts fixes trop lourds, à des contrats non rentables ou à des situations administratives complexes. L’objectif est de redonner de la visibilité, d’identifier les options réalistes et de coordonner les bonnes étapes avec des partenaires de confiance.",
    recoveryPoints: [
      "Analyse des frais fixes, de la rentabilité des contrats et des points de pression structurels",
      "Orientation stratégique pour les entrepreneurs qui ont besoin d’un plan de redressement clair",
      "Préparation et coordination des dossiers avec partenaires juridiques, comptables ou spécialisés",
      "Support pour interruption d’activité, préparation liée à l’insolvabilité et organisation des prochaines étapes",
    ],
    logisticsLabel: "Incidents opérationnels & support",
    logisticsTitle: "Quand un dossier devient urgent, technique ou sensible, la structure fait la différence.",
    logisticsText:
      "Grâce à sa proximité avec l’univers logistique et opérationnel, Trivex peut aussi assister les clients dans la préparation et la coordination de dossiers d’assurance, de sinistres transport, de vols, de dommages cargo, de litiges opérationnels et de continuité d’activité nécessitant à la fois méthode et rapidité.",
    logisticsPoints: [
      "Support à la préparation des dossiers assurance et réclamations",
      "Coordination des incidents logistiques et des pièces justificatives",
      "Construction de chronologies, revue documentaire et clarification opérationnelle",
      "Accompagnement des entreprises ayant besoin d’un support à la fois administratif et stratégique",
    ],
    processTitle: "Une méthode claire, du premier audit au suivi final.",
    processText:
      "Chaque dossier est traité avec méthode, contrôle documentaire et coordination opérationnelle afin de réduire les délais, renforcer la crédibilité et éviter les erreurs évitables.",
    process: [
      "Analyse initiale de l’objectif de l’entreprise en matière de douane, TVA, accises, redressement ou autorisation",
      "Évaluation des documents, des éléments manquants, de l’exposition commerciale et du positionnement conformité",
      "Préparation du dossier, des annexes, des pièces justificatives et du plan d’action",
      "Coordination avec les partenaires juridiques, comptables, douaniers ou spécialisés si nécessaire",
      "Suivi du dossier, accompagnement pratique et monitoring jusqu’à finalisation ou relais stratégique",
    ],
    aboutLabel1: "Pourquoi Trivex",
    aboutTitle1: "Un seul point de contact stratégique pour la douane, le redressement et les dossiers d’entreprise complexes.",
    aboutText1:
      "Trivex Advisory est conçu comme une structure premium de coordination et de conseil pour les entreprises confrontées à des enjeux de douane, d’accises, de TVA, d’autorisations, de sinistres logistiques et de redressement. L’objectif est simple : rendre les dossiers plus solides, plus lisibles et mieux préparés dès le départ.",
    aboutLabel2: "Positionnement",
    aboutTitle2: "Le conseil d’abord. L’exécution structurée et la coordination des partenaires ensuite.",
    aboutText2:
      "Le modèle combine un conseil de haut niveau, une prise en charge opérationnelle des dossiers stratégiques et une collaboration étroite avec des partenaires professionnels de confiance, notamment juridiques, comptables, logistiques ou spécialisés lorsque cela est nécessaire.",
    trustIntroTitle:
      "Une structure conçue pour capter les dossiers complexes et inspirer confiance dès le premier contact.",
    trustIntroText:
      "Trivex Advisory est pensé comme un acteur premium, rare et immédiatement crédible sur son marché.",
    disclaimerTitle: "Important",
    disclaimerText:
      "Trivex Advisory fournit du conseil stratégique, de la préparation opérationnelle de dossiers et de la coordination de partenaires. Les actes juridiques, la représentation en justice et les services légalement réservés sont pris en charge par des professionnels qualifiés lorsque nécessaire.",
    contactLabel: "Contact",
    contactTitle: "Structurons correctement votre dossier.",
    contactText:
      "Contactez-nous pour votre stratégie douanière, vos demandes d’entrepôt sous douane, votre inscription comme représentant en douane, vos dossiers TVA à l’importation et TVA globale, vos besoins en redressement, vos dossiers assurances et votre structuration internationale.",
    form: {
      name: "Nom",
      company: "Société",
      email: "E-mail",
      message: "Expliquez votre besoin",
      submit: "Envoyer la demande",
    },
  },
  nl: {
    nav: { services: "Diensten", process: "Proces", about: "Over ons", contact: "Contact" },
    badge: "Premium advies en operationele coördinatie voor douane, accijnzen, btw, herstructurering en complexe bedrijfsdossiers",
    heroTitle: "Premium advies voor douane, accijnzen, btw en kritieke bedrijfssituaties.",
    heroText:
      "Trivex Advisory ondersteunt importeurs, exporteurs, magazijnen, logistieke bedrijven, ondernemers en internationale operatoren met douanestrategie, accijnsondersteuning, invoer-btw- en globale btw-dossiers, douanevergunningen, begeleiding bij hersteltrajecten, verzekeringsdossiers en internationale structurering.",
    ctaPrimary: "Consultatie aanvragen",
    ctaSecondary: "Diensten bekijken",
    highlights: [
      "Premium positionering",
      "Operationele ondersteuning vanuit België",
      "Sterk gestructureerde strategische dossiers",
      "Coördinatie voor douane en herstel",
    ],
    cards: {
      core: {
        label: "Kernfocus",
        title: "Douanedossiers & strategische dossiers",
        text: "Gestructureerde ondersteuning voor registraties, bijlagen, interne documenten, bewijsstukken, operationele positionering en gevoelige bedrijfsdossiers.",
      },
      auth: {
        label: "Vergunningen",
        title: "Douane-entrepot & compliance",
        text: "Begeleiding bij aanvragen voor douane-entrepots, tijdelijke opslag, douanevergunningen en bijhorende operationele compliancevereisten.",
      },
      network: {
        label: "Herstel",
        title: "Ondernemers in moeilijkheden",
        text: "Strategische analyse en coördinatie voor zelfstandigen en ondernemingen met schulddruk, verlieslatende contracten, te hoge vaste kosten of complexe administratieve situaties.",
      },
      approach: {
        label: "Aanpak",
        title: "Precisie, premium & gecoördineerd",
        text: "Een duidelijke aanpak met hoge toegevoegde waarde, gebouwd rond dossierkwaliteit, operationele snelheid, geloofwaardigheid en coördinatie van de juiste partners.",
      },
    },
    whoTitle: "Een kantoor dat vertrouwen uitstraalt nog voor het eerste gesprek.",
    whoText:
      "De website moet veel meer tonen dan enkel een lijst van diensten. Hij moet een gedocumenteerde, ernstige en georganiseerde structuur uitstralen die gevoelige dossiers inzake douane, btw, herstructurering, logistiek en bedrijfscontinuïteit aankan.",
    brandText:
      "Een premium art direction met kantoren, dossiers, logistieke omgevingen, schadegevallen en administratieve details versterkt meteen de commerciële geloofwaardigheid.",
    servicesTitle: "Een premium adviesstructuur rond douane, compliance en herstel.",
    servicesText:
      "Gebouwd voor importeurs, exporteurs, logistieke bedrijven, magazijnen, douanegevoelige operatoren, ondernemers onder druk en ondernemingen die nood hebben aan structuur, duidelijkheid en geloofwaardige coördinatie.",
    services: [
      {
        icon: ShieldCheck,
        title: "Advies inzake douane & accijnzen",
        desc: "Gespecialiseerd advies voor import- en exportactiviteiten, accijnzen, reglementaire interpretatie, processtructurering en operationele begeleiding voor internationaal actieve ondernemingen.",
      },
      {
        icon: FileCheck2,
        title: "Begeleiding bij registratie als douanevertegenwoordiger",
        desc: "Volledige voorbereiding en opvolging van dossiers voor ondernemingen die zich willen registreren als douanevertegenwoordiger, inclusief documentstructuur, nazicht van bijlagen en praktische begeleiding doorheen het proces.",
      },
      {
        icon: Warehouse,
        title: "Douane-entrepot & douanevergunningen",
        desc: "Voorbereiding en coördinatie van aanvragen met betrekking tot douane-entrepots, tijdelijke opslag, douanevergunningen en operationele set-ups die een gestructureerd en conform dossier vereisen.",
      },
      {
        icon: Briefcase,
        title: "Invoer-btw & globale btw-ondersteuning",
        desc: "Rechtstreekse behandeling van invoer-btw- en globale btw-procedures, inclusief dossieropbouw, bewijsstukken, praktische opvolging en coördinatie wanneer fiscale of boekhoudkundige input nodig is.",
      },
      {
        icon: Landmark,
        title: "Advies bij herstel & bedrijfsmoeilijkheden",
        desc: "Begeleiding van zelfstandigen en ondernemingen met financiële druk, zwakke marges, te hoge vaste kosten, verlieslatende contracten of complexe administratieve situaties, met focus op duidelijkheid en volgende stappen.",
      },
      {
        icon: Scale,
        title: "Voorbereiding van gevoelige dossiers & partnercoördinatie",
        desc: "Technische voorbereiding en strategische opvolging van douane- of bedrijfsgevoelige dossiers, inclusief documentanalyse, chronologie-opbouw en coördinatie met juridische of gespecialiseerde partners wanneer nodig.",
      },
      {
        icon: LifeBuoy,
        title: "Logistieke schadegevallen, verzekeringen & claims",
        desc: "Gestructureerde ondersteuning bij logistieke incidenten, verlies, diefstal, schade, verzekeringsdocumentatie en dossiercoördinatie om de belangen van de cliënt correct te verdedigen.",
      },
      {
        icon: Globe,
        title: "Internationale structurering & grensoverschrijdende begeleiding",
        desc: "Strategische begeleiding voor ondernemers die een buitenlandse vennootschap, internationale uitbreiding of cross-border structurering overwegen met het juiste partnernetwerk.",
      },
    ],
    recoveryLabel: "Ondernemers in moeilijkheden",
    recoveryTitle: "Omdat een moeilijke periode niet het einde van het traject hoeft te betekenen.",
    recoveryText:
      "Trivex Advisory begeleidt ook zelfstandigen en ondernemingen die geconfronteerd worden met financiële druk, zware schuldblootstelling, operationele instabiliteit, te hoge vaste kosten, verlieslatende contracten of complexe administratieve situaties. Het doel is opnieuw overzicht te creëren, realistische opties in kaart te brengen en de juiste volgende stappen te coördineren met vertrouwde partners.",
    recoveryPoints: [
      "Analyse van vaste kosten, contractrendabiliteit en structurele drukpunten",
      "Strategische begeleiding voor ondernemers die nood hebben aan een duidelijk herstelplan",
      "Voorbereiding en coördinatie van dossiers met juridische, boekhoudkundige of gespecialiseerde partners",
      "Ondersteuning bij bedrijfsstilstand, insolventiegerelateerde voorbereiding en praktische volgende stappen",
    ],
    logisticsLabel: "Operationele incidenten & ondersteuning",
    logisticsTitle: "Wanneer een dossier urgent, technisch of gevoelig wordt, maakt structuur het verschil.",
    logisticsText:
      "Dankzij de nabijheid tot logistieke en operationele omgevingen kan Trivex cliënten ook ondersteunen bij de voorbereiding en coördinatie van verzekeringsdossiers, transportincidenten, diefstaldocumentatie, cargogeschillen en continuïteitskwesties die zowel methode als snelheid vereisen.",
    logisticsPoints: [
      "Ondersteuning bij voorbereiding van verzekerings- en claimdossiers",
      "Coördinatie van logistieke incidenten en bewijsstukken",
      "Opbouw van chronologieën, documentreview en operationele verduidelijking",
      "Begeleiding voor ondernemingen die zowel administratieve als strategische ondersteuning nodig hebben",
    ],
    processTitle: "Een duidelijke workflow van eerste analyse tot finale opvolging.",
    processText:
      "Elk dossier wordt benaderd met structuur, documentcontrole en gecoördineerde uitvoering om vertragingen te beperken, geloofwaardigheid te versterken en vermijdbare fouten te voorkomen.",
    process: [
      "Eerste analyse van de doelstelling van de onderneming inzake douane, btw, accijnzen, herstel of vergunningen",
      "Beoordeling van documenten, ontbrekende elementen, commerciële blootstelling en compliance-positionering",
      "Voorbereiding van het dossier, de bijlagen, de bewijsstukken en de actiestructuur",
      "Coördinatie met de juiste juridische, boekhoudkundige, douane- of gespecialiseerde partners indien nodig",
      "Opvolging, praktische ondersteuning en monitoring tot afronding of strategische overdracht",
    ],
    aboutLabel1: "Waarom Trivex",
    aboutTitle1: "Eén strategisch aanspreekpunt voor douane, herstel en complexe bedrijfsdossiers.",
    aboutText1:
      "Trivex Advisory is opgezet als een premium coördinatie- en adviesstructuur voor bedrijven met uitdagingen op het vlak van douane, accijnzen, btw, vergunningen, logistieke schadegevallen en herstel. Het doel is eenvoudig: dossiers sterker, duidelijker en vanaf het begin beter voorbereid maken.",
    aboutLabel2: "Positionering",
    aboutTitle2: "Eerst advies. Daarna gestructureerde uitvoering en partnercoördinatie.",
    aboutText2:
      "Het model combineert high-level advies, rechtstreekse operationele behandeling van strategische dossiers en nauwe samenwerking met vertrouwde professionele partners, waaronder juridische, boekhoudkundige, logistieke en gespecialiseerde ondersteuning wanneer nodig.",
    trustIntroTitle:
      "Een structuur ontworpen om complexe dossiers aan te trekken en vanaf het eerste contact vertrouwen te creëren.",
    trustIntroText:
      "Trivex Advisory is opgezet als een premium, zeldzame en onmiddellijk geloofwaardige speler in zijn markt.",
    disclaimerTitle: "Belangrijke opmerking",
    disclaimerText:
      "Trivex Advisory levert strategisch advies, operationele dossieropbouw en partnercoördinatie. Juridische handelingen, vertegenwoordiging voor de rechtbank en wettelijk voorbehouden diensten worden waar nodig uitgevoerd door gekwalificeerde professionals.",
    contactLabel: "Contact",
    contactTitle: "Laten we uw dossier correct structureren.",
    contactText:
      "Contacteer ons voor douanestrategie, aanvragen voor douane-entrepots, ondersteuning bij registratie als douanevertegenwoordiger, invoer-btw- en globale btw-dossiers, herstelbegeleiding, verzekeringsdossiers en internationale structurering.",
    form: {
      name: "Naam",
      company: "Bedrijf",
      email: "E-mail",
      message: "Beschrijf uw aanvraag",
      submit: "Verstuur aanvraag",
    },
  },
};

const trustPoints: Record<Lang, TrustPoint[]> = {
  en: [
    {
      title: "Rare market positioning",
      text: "A high-value structure focused on customs, excise, VAT, restructuring, insurance-related coordination and strategic file handling rather than generic consulting.",
    },
    {
      title: "Direct operational handling",
      text: "Trivex does not simply advise. It actively prepares, structures, follows up and drives strategic files forward for the client.",
    },
    {
      title: "Premium credibility",
      text: "Designed for operators who need a serious counterpart capable of dealing with administrations, partners and complex documentation.",
    },
    {
      title: "Integrated partner model",
      text: "When a file requires legal, accounting, declarative or specialist support, Trivex coordinates with trusted partners in a controlled and efficient way.",
    },
  ],
  fr: [
    {
      title: "Un positionnement rare sur le marché",
      text: "Une structure à forte valeur ajoutée centrée sur la douane, les accises, la TVA, le redressement, la coordination de sinistres et la gestion de dossiers stratégiques, et non sur du consulting générique.",
    },
    {
      title: "Une prise en charge opérationnelle directe",
      text: "Trivex ne se limite pas au conseil. La structure prépare, organise, suit et fait avancer directement les dossiers stratégiques pour le client.",
    },
    {
      title: "Une crédibilité premium",
      text: "Pensé pour les opérateurs qui ont besoin d’un interlocuteur solide, sérieux et capable de gérer l’administration, les partenaires et la documentation complexe.",
    },
    {
      title: "Un modèle intégré avec partenaires de confiance",
      text: "Lorsqu’un dossier nécessite un support juridique, comptable, déclaratif ou spécialisé, Trivex coordonne l’intervention de partenaires de confiance de manière efficace et maîtrisée.",
    },
  ],
  nl: [
    {
      title: "Een zeldzame marktpositionering",
      text: "Een high-value structuur die focust op douane, accijnzen, btw, herstel, schadecoördinatie en strategische dossierbehandeling in plaats van op generieke consulting.",
    },
    {
      title: "Rechtstreekse operationele behandeling",
      text: "Trivex beperkt zich niet tot advies. De structuur bereidt strategische dossiers rechtstreeks voor, organiseert ze, volgt ze op en duwt ze vooruit voor de cliënt.",
    },
    {
      title: "Premium geloofwaardigheid",
      text: "Ontworpen voor operatoren die een sterke en ernstige gesprekspartner nodig hebben die administraties, partners en complexe documentatie aankan.",
    },
    {
      title: "Geïntegreerd model met vertrouwenspartners",
      text: "Wanneer een dossier juridische, boekhoudkundige, declaratieve of gespecialiseerde ondersteuning vereist, coördineert Trivex de inzet van vertrouwde partners op een gecontroleerde en efficiënte manier.",
    },
  ],
};

const CARD_ICONS = [FileText, Warehouse, Building2, BadgeCheck] as const;
const TRUST_ICONS = [Sparkles, CheckCircle2, BadgeCheck, Building2] as const;

export default function TrivexAdvisoryWebsite() {
  const [lang, setLang] = useState<Lang>("fr");
  const t = useMemo(() => content[lang], [lang]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const company = String(form.get("company") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Website inquiry - ${company || name || "Trivex Advisory"}`);
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:info@trivex-contact.com?subject=${subject}&body=${body}`;
  }

  function LanguageButton({ code, label }: { code: Lang; label: string }) {
    return (
      <button
        onClick={() => setLang(code)}
        className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
          lang === code ? "bg-amber-500 text-slate-950" : "bg-white/70 text-slate-700 hover:bg-white"
        }`}
      >
        {label}
      </button>
    );
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffdf8_0%,#ffffff_30%,#f8fafc_100%)] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-amber-100/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-[20px] bg-slate-900 text-white shadow-[0_12px_35px_rgba(15,23,42,0.18)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#fbbf24_0%,transparent_35%),linear-gradient(135deg,#0f172a_0%,#111827_45%,#1e293b_100%)]" />
              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:14px_14px]" />
              <span className="relative text-xl font-semibold tracking-[0.3em]">T</span>
            </div>
            <div>
              <div className="text-2xl font-semibold tracking-tight">Trivex Advisory</div>
              <div className="text-sm text-slate-500">Customs, VAT, Recovery & Strategic Advisory</div>
            </div>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex gap-6 text-sm text-slate-600">
              <a href="#services" className="hover:text-slate-900">{t.nav.services}</a>
              <a href="#process" className="hover:text-slate-900">{t.nav.process}</a>
              <a href="#about" className="hover:text-slate-900">{t.nav.about}</a>
              <a href="#contact" className="hover:text-slate-900">{t.nav.contact}</a>
            </nav>
            <div className="flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50/70 p-1.5">
              <LanguageButton code="en" label="EN" />
              <LanguageButton code="fr" label="FR" />
              <LanguageButton code="nl" label="NL" />
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-end px-6 pb-4 md:hidden">
          <div className="flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50/70 p-1.5">
            <LanguageButton code="en" label="EN" />
            <LanguageButton code="fr" label="FR" />
            <LanguageButton code="nl" label="NL" />
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_28%),radial-gradient(circle_at_right,rgba(217,119,6,0.09),transparent_24%)]" />
        <div className="absolute left-0 top-0 h-full w-full opacity-40 [background-image:linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-100 bg-white/90 px-4 py-2 text-sm text-slate-700 shadow-sm">
              <Sparkles className="h-4 w-4 text-amber-500" />
              {t.badge}
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">{t.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{t.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-[0_12px_35px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5">
                {t.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-amber-50">
                {t.ctaSecondary}
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {t.highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-amber-100 bg-white/90 px-4 py-3 text-sm text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[t.cards.core, t.cards.auth, t.cards.network, t.cards.approach].map((card, index) => {
              const Icon = CARD_ICONS[index];
              return (
                <div
                  key={card.title}
                  className={`rounded-[28px] border border-slate-200 bg-white/95 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)] min-h-[320px] ${
                    index % 2 === 1 ? "md:mt-10" : ""
                  }`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-sm text-slate-500">{card.label}</div>
                  <div className="mt-2 break-words text-lg font-semibold leading-tight md:text-xl xl:text-2xl">{card.title}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 md:leading-7">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">
              {lang === "fr" ? "Qui nous sommes" : lang === "nl" ? "Wie wij zijn" : "Who we are"}
            </div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">{t.whoTitle}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{t.whoText}</p>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-[linear-gradient(135deg,#111827_0%,#1f2937_55%,#0f172a_100%)] p-8 text-white shadow-[0_20px_50px_rgba(15,23,42,0.14)]">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200">
              {lang === "fr" ? "Image de marque" : lang === "nl" ? "Merkbeeld" : "Brand image"}
            </div>
            <p className="mt-4 text-base leading-8 text-slate-300">{t.brandText}</p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">{t.nav.services}</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">{t.servicesTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{t.servicesText}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {t.services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#fff7ed_0%,#fef3c7_100%)] text-amber-600 shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                  <span>Trivex Advisory</span>
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">{t.recoveryLabel}</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">{t.recoveryTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{t.recoveryText}</p>
          </div>
          <div className="grid gap-4">
            {t.recoveryPoints.map((item) => (
              <div key={item} className="flex gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div className="pt-1 text-base leading-7 text-slate-700">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">{t.logisticsLabel}</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">{t.logisticsTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{t.logisticsText}</p>
          </div>
          <div className="grid gap-4">
            {t.logisticsPoints.map((item) => (
              <div key={item} className="flex gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                  <LifeBuoy className="h-5 w-5" />
                </div>
                <div className="pt-1 text-base leading-7 text-slate-700">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[linear-gradient(180deg,#fffaf0_0%,#f8fafc_100%)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">{t.nav.process}</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">{t.processTitle}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">{t.processText}</p>
            </div>
            <div className="space-y-4">
              {t.process.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-sm">
                    {index + 1}
                  </div>
                  <div className="pt-1 text-base leading-7 text-slate-700">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">{t.aboutLabel1}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">{t.aboutTitle1}</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">{t.aboutText1}</p>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-[linear-gradient(135deg,#111827_0%,#1f2937_55%,#0f172a_100%)] p-8 text-white shadow-[0_20px_50px_rgba(15,23,42,0.14)]">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">{t.aboutLabel2}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">{t.aboutTitle2}</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">{t.aboutText2}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">
            {lang === "fr" ? "Pourquoi nous choisir" : lang === "nl" ? "Waarom Trivex" : "Why choose Trivex"}
          </div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">{t.trustIntroTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{t.trustIntroText}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trustPoints[lang].map((point, idx) => {
            const Icon = TRUST_ICONS[idx];
            return (
              <div key={point.title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-base font-semibold tracking-tight">{point.title}</div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{point.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[28px] border border-amber-100 bg-amber-50/70 p-6 text-slate-700 shadow-sm">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">{t.disclaimerTitle}</div>
          <p className="mt-3 text-sm leading-7">{t.disclaimerText}</p>
        </div>
      </section>

      <section id="contact" className="bg-[linear-gradient(135deg,#0f172a_0%,#111827_45%,#1f2937_100%)] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1fr_1fr]">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">{t.contactLabel}</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">{t.contactTitle}</h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">{t.contactText}</p>
            <div className="mt-8 space-y-4 text-slate-300">
              <div className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-amber-300" /> <span>info@trivex-contact.com</span></div>
              <div className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-amber-300" /> <span>+32 4 71 74 35 03</span></div>
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-amber-300" /> <span>Siemenslaan 16a, 3650 Dilsen-Stokkem, Belgium</span></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[30px] border border-white/10 bg-white/10 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <div className="grid gap-4">
              <input name="name" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none" placeholder={t.form.name} />
              <input name="company" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none" placeholder={t.form.company} />
              <input name="email" type="email" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none" placeholder={t.form.email} />
              <textarea name="message" className="min-h-[140px] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none" placeholder={t.form.message} />
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300">
                {t.form.submit}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
