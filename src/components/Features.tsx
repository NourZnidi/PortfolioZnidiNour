
import { Activity, Lock, Zap, Compass, LineChart, Shield } from 'lucide-react';
import { features } from '../data/featuresData';
import { GraduationCap, Laptop, Briefcase, Code, Globe, BookOpen } from 'lucide-react';
const formationData = [
  {
    year: "2019 - 2020",
    degree: "Baccalauréat Scientifique (Mention Bien)",
    institution: "Lycée Hedi Soussi, Sfax",
    description: "Formation scientifique solide en Mathématiques, Physique, Électricité et Mécanique."
  },
  {
    year: "2020 - 2022",
    degree: "Classes préparatoires intégrées",
    institution: "Institut Supérieur d'Informatique et Multimédia de Sfax",
    description: "Préparation intensive en informatique et multimédia, bases solides en algorithmique, programmation et mathématiques appliquées."
  },
  {
    year: "2022 - 2023",
    degree: "Cycle Ingénieur ITWM",
    institution: "Institut Supérieur d'Informatique et Multimédia de Sfax",
    description: "Acquisition de compétences avancées en développement web, conception d'applications et technologies multimédia."
  },
  {
    year: "2023 - 2025",
    degree: "Ingénierie spécialisée en Génie Logiciel",
    institution: "Institut Supérieur d'Informatique et Multimédia de Sfax",
    description: "Développement de projets avancés, maîtrise des frameworks modernes, architecture logicielle et bonnes pratiques de génie logiciel."
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-indigo-900 to-[#12141C]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">À propos de moi</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Jeune ingénieure en génie logiciel passionnée par le développement logiciel et les technologies web. Expériences variées en projets académiques et stages, toujours curieuse et motivée pour apprendre et innover.
          </p>
        </div>

        {/* Section Formation */}
        <h3 className="text-2xl text-center font-semibold text-white mb-8">Formation</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {formationData.map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <span className="text-indigo-400 font-semibold">{item.year}</span>
                <GraduationCap className="h-6 w-6 text-indigo-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{item.degree}</h4>
              <p className="text-gray-400 mb-2 font-semibold">{item.institution}</p>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
    
          {/* Projet PFE */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
            <Laptop className="h-6 w-6 text-indigo-400 mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">Projet de Fin d'Études</h3>
            <p className="text-gray-400 text-sm">
              Conception et développement d'une application workflow pour l’automatisation et l’optimisation du support client selon ITIL, intégrant Angular, Spring Boot, PostgreSQL et un chatbot IA.
            </p>
          </div>

          {/* Expériences */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
            <Briefcase className="h-6 w-6 text-indigo-400 mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">Expériences Professionnelles</h3>
            <p className="text-gray-400 text-sm">
              Stages en développement web et mobile chez Curiolearn Academy, Empire Training et Formanet. Travail sur Angular, Spring Boot, Node.js , Express.js , Nest.js, Flutter et Firebase.
            </p>
          </div>

          {/* Compétences */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
            <Code className="h-6 w-6 text-indigo-400 mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">Compétences Techniques</h3>
            <p className="text-gray-400 text-sm">
              Java, Python , C#, C, C++, JavaScript , Dart, ReactJS, Angular, Node.js, Express.js, Nest.js, Spring Boot, SQL, MongoDB, Docker, Power BI, Flutter et autres technologies liées au développement web, mobile et IoT.
            </p>
          </div>

          {/* Langues */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
            <Globe className="h-6 w-6 text-indigo-400 mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">Langues</h3>
            <p className="text-gray-400 text-sm">Arabe (maternelle), Français (C1), Anglais (B2).</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;