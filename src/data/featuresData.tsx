import React from 'react';
import { Activity, Lock, Zap, Compass, LineChart, Shield } from 'lucide-react';
import { GraduationCap, Laptop, Code, Briefcase, Globe, BookOpen } from 'lucide-react';




export const features = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Formation",
    description: `Parcours académique complet en informatique et génie logiciel :
- 2 ans de classes préparatoires intégrées à l'Institut Supérieur d'Informatique et Multimédia de Sfax.
- 1 an en cycle ingénieur ITWM (Informatique, Technologie Web et Multimédia).
- 2 ans en ingénierie spécialisée en Génie Logiciel à l'ISIMS (Institut Supérieur d'Informatique et Multimédia de Sfax), incluant le développement de projets avancés et la maîtrise de technologies modernes.`
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "Projet de Fin d'Études",
    description: "Conception et développement d'une application workflow pour l’automatisation et l’optimisation du support client selon la norme ITIL, intégrant Angular, Spring Boot, PostgreSQL et un chatbot IA."
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Expériences Professionnelles",
    description: "Stages en développement web et mobile chez Curiolearn Academy, Empire Training et Formanet. Travail sur Angular, Spring Boot, Node.js, Nest.js, Flutter et Firebase."
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Compétences Techniques",
    description: "Langages et frameworks : Java, Python, JavaScript, C#,C,C++, ReactJS, Angular, Node.js, Express.Js , Nest.Js , Spring Boot, SQL, MongoDB, Docker, Power BI, Flutter, et autres technologies liées au développement web, mobile et IoT."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Langues",
    description: "Arabe (maternelle), Français (C1), Anglais (B2)."
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Centres d’intérêt",
    description: "Développement web et mobile, Business Intelligence, Intelligence Artificielle, Blockchain, IoT et design numérique."
  }
];