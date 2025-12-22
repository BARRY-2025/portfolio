import { useState } from 'react';
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  Code2Icon,
  DatabaseIcon,
  TerminalIcon,
  XIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
} from 'lucide-react';

// Project type definition
type Project = {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
};

type Experience = {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
};

// Project data
const projects: Project[] = [
  {
    id: 1,
    title: "StockMasterPro – Système de Gestion de Stock",
    description: `StockMasterPro est une solution complète de gestion de stock destinée aux boutiques, pharmacies, magasins et supermarchés. 
    Elle permet un suivi précis des produits, des ventes, des achats ainsi que la gestion des utilisateurs avec des droits différenciés.
    Développée en React (frontend) et Node.js (
    backend), elle est disponible en version web et desktop pour offrir une flexibilité maximale aux utilisateurs.
    `,
    coverImage: "images/stockMasterPro/SM_1.png",
    galleryImages: [
      "images/stockMasterPro/SM_2.png",
      "images/stockMasterPro/SM_3.png",
      "images/stockMasterPro/SM_4.png"
    ]
  },
  {
    id: 2,
    title: "DocumentProcessor – Traitement intelligent de documents comptables",
    description: `DocumentProcessor est une application intelligente conçue pour extraire automatiquement des données à partir
    de documents (factures, reçus, bons de commande, etc.) dans un format exploitable 
    par les outils de comptabilité. Elle facilite l'automatisation des processus comptables et réduit les erreurs manuelles.
    `,
    coverImage: "images/documentProcessor/DP_1.png",
    galleryImages: [
      "images/documentProcessor/DP_1.png",
      "images/documentProcessor/DP_2.png",
      "images/documentProcessor/DP_3.png"
    ]
  },
  {
    id: 3,
    title: "EasyStay – Plateforme de réservation de logements touristiques",
    description: `EasyStay est une application intuitive permettant aux voyageurs de rechercher, comparer et réserver des logements touristiques.
    Elle met en relation les hôtes et les visiteurs via une interface fluide et sécurisée, tout en intégrant un système de gestion des réservations,
    des profils et des avis.
    `,
    coverImage: "images/easyStay/ES_1.png",
    galleryImages: [
      "images/easyStay/ES_1.png",
      "images/easyStay/ES_2.png",
      "images/easyStay/ES_3.png"
    ]
  },
  {
    id: 4,
    title: "EduCentral – Système centralisé pour les institutions scolaires",
    description: `EduCentral est une plateforme de gestion scolaire destinée aux ministères ou
    institutions éducatives souhaitant centraliser les données relatives aux écoles, aux élèves, enseignants, 
    cours et emplois du temps. Elle facilite la prise de décision par la consolidation des
    données à l’échelle nationale.
    `,
    coverImage: "images/eduCentral/EC_1.png",
    galleryImages: [
      "images/eduCentral/EC_1.png",
      "images/eduCentral/EC_2.png",
      "images/eduCentral/EC_3.png"
    ]
  },
  {
    id: 5,
    title: "ImmoConnect – Gestion de logements locatifs",
    description: `ImmoConnect est une application dédiée à la gestion des logements, permettant aux propriétaires,
    agences ou particuliers de publier leurs biens et aux utilisateurs de les réserver. 
    Elle comprend un système de réservation, de gestion des contrats et de suivi des paiements.
    `,
    coverImage: "images/immoConnect/IC_1.png",
    galleryImages: [
      "images/immoConnect/IC_1.png",
      "images/immoConnect/IC_2.png",
      "images/immoConnect/IC_3.png",
      "images/immoConnect/IC_4.png"
    ]
  },
  {
    id: 6,
    title: "PUB – CMS pour affiches et campagnes publicitaires",
    description: `PUB est un système de gestion de contenu (CMS) conçu pour la création, la diffusion et la gestion des campagnes d’affichage publicitaire. Il
    permet une centralisation de toutes les ressources (affiches, vidéos, messages) et leur déploiement sur différents supports de manière planifiée.
    `,
    coverImage: "images/pub/AM_1.png",
    galleryImages: [
      "images/pub/AM_1.png",
      "images/pub/AM_2.png",
      "images/pub/AM_3.png"
    ]
  },
  {
    id: 7,
    title: "SafeHorizon – Lutte contre les Violences Basées sur le Genre",
    description: `SafeHorizon est une application de soutien et de lutte contre les violences basées sur le genre (VBG).
    Elle permet aux victimes de signaler des cas, d’obtenir un accompagnement personnalisé et de consulter des ressources juridiques,
    médicales et psychologiques.
    `,
    coverImage: "images/safeHorizon/SH_1.png",
    galleryImages: [
      "images/safeHorizon/SH_1.png",
      "images/safeHorizon/SH_2.png",
      "images/safeHorizon/SH_3.png",
      "images/safeHorizon/SH_4.png"
    ]
  },
  {
    id: 8,
    title: "TalkBridge – Application de traduction conversationnelle en temps réel",
    description: `TalkBridge facilite la communication entre personnes parlant des langues différentes. Grâce à
    la traduction en temps réel des messages écrits ou vocaux, l’application rend les échanges simples, fluides et accessibles
    même en contexte multilingue.
    `,
    coverImage: "images/talkBridge/TB_1.png",
    galleryImages: [
      "images/talkBridge/TB_1.png",
      "images/talkBridge/TB_2.png",
      "images/talkBridge/TB_3.png"
    ]
  }
];

const experiences: Experience[] = [
  {
    id: 1,
    title: "Développeur Full Stack Senior",
    company: "Tech Solutions Inc.",
    location: "Conakry, Guinée",
    startDate: "Jan 2022",
    endDate: "Présent",
    description: [
      "Conception et développement d'applications web et desktop complètes",
      "Optimisation des performances et amélioration de l'UX/UI",
      "Mise en place de bonnes pratiques DevOps et CI/CD"
    ],
    technologies: ["React", "Node.js", "TypeScript", "Docker", "MySQL"]
  },
  {
    id: 2,
    title: "Développeur Full Stack",
    company: "Global Itect",
    location: "Conakry, Guinée",
    startDate: "Avr 2025",
    endDate: "En cours",
    description: [
      "Développement de solutions digitales pour collectivités locales et autres",
      "Integration d'APIs tierces et services externes",
      "Tests unitaires",
      "Documentation technique et support client"
    ],
    technologies: ["React", "Laravel", "MySQL", "Git"]
  },
  {
    id: 3,
    title: "Expériences en installation réseaux",
    company: "Services tiers",
    location: "Conakry, Guinée",
    startDate: "Jan 2024",
    endDate: "En cours",
    description: [
      "Installation et diffusion d'internet dans les places publiques",
      "Configuration de routeurs et points d'accès",
      "Maintenance et support technique"
    ],
    technologies: ["React", "HTML5", "CSS3", "JavaScript"]
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.galleryImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.galleryImages.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section with Profile Photo */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Photo */}
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0 hover:shadow-3xl transition-shadow duration-300">
              <img
                src="/images/profil.png"
                alt="Photo de profil"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Développeur Logiciel
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
                Passionné par la création de solutions innovantes et scalables. Spécialisé en développement Full Stack.
              </p>
              <div className="flex justify-center md:justify-start space-x-6">
                <a
                  href="https://github.com/BARRY-2025/profil_developper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-blue-200 transition-colors duration-200 hover:scale-110"
                >
                  <GithubIcon size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/barry-mamadou-94a7b5319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-blue-200 transition-colors duration-200 hover:scale-110"
                >
                  <LinkedinIcon size={28} />
                </a>
                <a
                  href="mailto:yayaclnmamadou22@gmail.com"
                  className="p-2 hover:text-blue-200 transition-colors duration-200 hover:scale-110"
                >
                  <MailIcon size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Compétences Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Compétences Techniques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100">
              <Code2Icon className="w-14 h-14 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Frontend
              </h3>
              <p className="text-gray-700 leading-relaxed">
                React, TypeScript, HTML5, CSS3, Tailwind CSS, Vue.js, JavaScript ES6+
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100">
              <DatabaseIcon className="w-14 h-14 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Backend & Données
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Node.js, PHP, Laravel, Python, SQL, PostgreSQL, MongoDB, APIs REST
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
              <TerminalIcon className="w-14 h-14 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Outils & DevOps</h3>
              <p className="text-gray-700 leading-relaxed">
                Git, Docker, CI/CD, Linux, Electron, Webpack, GitHub Actions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expériences Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Expériences Professionnelles
          </h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-8">
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-200"></div>
                )}
                
                <div className="flex gap-8">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white shadow-lg">
                      <BriefcaseIcon size={28} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border-l-4 border-blue-500">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                        <p className="text-lg text-blue-600 font-semibold mt-1">{exp.company}</p>
                      </div>
                      <div className="mt-3 md:mt-0 text-gray-600 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <MapPinIcon size={18} className="text-gray-500" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-500 mb-4">
                      <CalendarIcon size={18} />
                      <span className="text-sm">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-700">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Projets Réalisés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden h-48 bg-gray-200">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <button
                    onClick={() => openGallery(project)}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors group/btn"
                  >
                    Voir le projet
                    <ChevronRightIcon size={20} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à Collaborer ?</h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto text-lg">
            Je suis ouvert à des opportunités intéressantes. N'hésitez pas à me contacter pour discuter de votre projet.
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="mailto:yayaclnmamadou22@gmail.com"
              className="hover:text-blue-400 transition-colors duration-200 hover:scale-110"
            >
              <MailIcon size={28} />
            </a>
            <a
              href="https://github.com/BARRY-2025/profil_developper"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200 hover:scale-110"
            >
              <GithubIcon size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/barry-mamadou-94a7b5319"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200 hover:scale-110"
            >
              <LinkedinIcon size={28} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Développeur Logiciel. Tous droits réservés.</p>
        </div>
      </footer>

      {/* Gallery Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-4">
            {/* Close button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2 transition-all hover:bg-opacity-75"
            >
              <XIcon size={24} />
            </button>

            {/* Image container */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <img
                src={selectedProject.galleryImages[currentImageIndex]}
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-opacity"
              >
                <ChevronLeftIcon size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-opacity"
              >
                <ChevronRightIcon size={24} />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 px-3 py-1 rounded-full text-white text-sm">
                {currentImageIndex + 1} / {selectedProject.galleryImages.length}
              </div>
            </div>

            {/* Project title and description */}
            <div className="mt-4 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-300">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;