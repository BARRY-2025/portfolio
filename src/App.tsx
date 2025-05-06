import React, { useState } from 'react';
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
} from 'lucide-react';

// Project type definition
type Project = {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Profile Photo */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Photo */}
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/images/profil.jpg"
                alt="Photo de profil"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Développeur Logiciel
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Passionné par la création de solutions innovantes.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://github.com/BARRY-2025/profil_developper"
                  className="p-2 hover:text-blue-200 transition-colors"
                >
                  <GithubIcon size={24} />
                </a>
                <a
                  href="www.linkedin.com/in/barry-mamadou-94a7b5319"
                  className="p-2 hover:text-blue-200 transition-colors"
                >
                  <LinkedinIcon size={24} />
                </a>
                <a
                  href="#"
                  className="p-2 hover:text-blue-200 transition-colors"
                >
                  <MailIcon size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Compétences Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Code2Icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Développement Frontend
              </h3>
              <p className="text-gray-600">
                React, TypeScript, HTML5, CSS3, Tailwind CSS
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <DatabaseIcon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Développement Backend
              </h3>
              <p className="text-gray-600">
                Node.js, PHP, Laravel, Python, SQL, APIs Rest
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <TerminalIcon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Outils & DevOps</h3>
              <p className="text-gray-600">Git, Docker, CI/CD, Linux</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Projets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button
                    onClick={() => openGallery(project)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Voir le projet →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="mb-4">
            Intéressé par une collaboration ? N'hésitez pas à me contacter.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:yayaclnmamadou22@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <MailIcon size={24} />
            </a>
            <a
              href="https://github.com/BARRY-2025/profil_developper"
              className="hover:text-blue-400 transition-colors"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="www.linkedin.com/in/barry-mamadou-94a7b5319"
              className="hover:text-blue-400 transition-colors"
            >
              <LinkedinIcon size={24} />
            </a>
          </div>
        </div>
      </footer>

      {/* Gallery Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-4">
            {/* Close button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
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