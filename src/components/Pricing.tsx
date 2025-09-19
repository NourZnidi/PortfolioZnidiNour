
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: { monthly: string; annual: string };
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

import { pricingPlans } from '@/data/pricingData'; // Adjust the import path as necessary


const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const projects = [
    {
      name: "PFE - Application Workflow ITIL",
      description: "Conception et implémentation d’une solution de gestion de workflow ITIL pour le support client, intégrant Angular, Spring Boot et PostgreSQL. L’application se distingue par l’orchestration automatisée des processus ITSM (Incident, Problem, Change, Service Level, Event, Request Management) et l’intégration d’un chatbot IA pour optimiser l’efficacité opérationnelle.",
technologies: ["Angular", "Spring Boot", "PostgreSQL", "Chatbot IA","Ollama"],
    },
    {
      name: "PFA - Application Pharmacie Centrale",
      description: "Développement d’une plateforme web dédiée à la Pharmacie Centrale de Tunisie, assurant la gestion intégrée des services clients, des processus d’approvisionnement et de distribution des produits pharmaceutiques à l’échelle nationale. L’architecture repose sur Angular pour le front-end, Express.js/Node.js pour le back-end et PostgreSQL pour la persistance des données, garantissant performance, sécurité et évolutivité.",

      technologies: ["Angular", "Express.js", "Node.js", "PostgreSQL"],
    },
    {
      name: "Application Mobile - Chat",
      description: "Conception et développement d’une application mobile de messagerie instantanée, inspirée des standards des applications sociales modernes. Implémentée avec Flutter et Firebase, elle intègre l’authentification en temps réel, la synchronisation des conversations multi-utilisateurs et une architecture orientée performance et scalabilité.",
technologies: ["Flutter", "Firebase","Dart"],
    },
    {
      name: "To-Do List",
      description:
      "Développement d’une application de gestion de tâches offrant des fonctionnalités CRUD (Create, Read, Update, Delete) avec une interface utilisateur ergonomique. Conçue en Java avec une architecture orientée objets et implémentée via Swing pour la couche graphique.",
    
      technologies: ["Java", "Android Studio"],
    },
    {
      name: "Projet IoT - Détection intelligente",
      description:
  "Conception et implémentation d’un système IoT intelligent basé sur une carte ESP32 équipée d’une caméra, permettant la détection et la classification automatique des déchets via des modèles d’intelligence artificielle embarqués. L’application intègre une interface utilisateur développée avec React, une communication temps réel par protocole MQTT, ainsi qu’une architecture orientée edge computing pour optimiser les performances et la fiabilité.",
 technologies: ["ESP32-CAM", "MQTT", "IA", "React","C++"],
    },
    {
      name: "Projet Blockchain - Anti-contrefaçon",
      description:
        "Application blockchain pour la détection de produits contrefaits. Suivi de la chaîne de production via un QR Code scanné par le client afin de consulter le cycle de vie du produit. Utilisation de Ganache pour le développement et connexion frontend/backend.",
      technologies: ["Blockchain", "Web3.js", "React", "Node.js", "Ganache","Solidity"],
    },
    {
      name: "Autres projets",
      description:
    "Projets variés incluant créations graphiques, illustrations et animations 3D, mettant en œuvre des compétences avancées en design et visualisation.",
  technologies: ["Photoshop", "Blender", "React","Adobe Illustrator","Canva"],
    },
  ];
  return (
    <section id="pricing" className="py-24 bg-[#12141C]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
          Mes Projets
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Voici une sélection de mes projets académiques et personnels,
          couvrant le développement web, mobile, IoT, blockchain et plus.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <p className="text-sm font-medium text-gray-300 mb-2">
                Technologies :
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <li
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-crypto-purple/20 text-crypto-purple"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
          
            </div>
          ))}
        </div>
      </div>
          {/* <div className="inline-flex p-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                billingCycle === 'monthly' ? 'bg-crypto-purple text-white' : 'text-gray-400'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                billingCycle === 'annual' ? 'bg-crypto-purple text-white' : 'text-gray-400'
              }`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual <span className="text-xs font-medium">Save 20%</span>
            </button>
          </div> */}
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white/5 backdrop-blur-sm border rounded-xl overflow-hidden animate-on-scroll ${
                plan.highlighted 
                  ? 'border-crypto-purple relative shadow-xl shadow-crypto-purple/10' 
                  : 'border-white/10'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.highlighted && (
                <div className="bg-crypto-purple text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-2 text-white">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    {billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual}
                  </span>
                  <span className="text-gray-400 ml-1">{plan.price.monthly !== "$0" ? "/month" : ""}</span>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <Button 
                  className={`w-full mb-6 ${
                    plan.highlighted 
                      ? 'bg-crypto-purple hover:bg-crypto-dark-purple' 
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {plan.buttonText}
                </Button>
                
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-4">What's included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-crypto-purple mr-3 shrink-0" />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div> */}
    </section>
  );
};

export default Pricing;
