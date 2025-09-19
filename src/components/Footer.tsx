
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12141C] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              Znidi <span className="text-crypto-purple">Nour</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-xs">
              Portfolio personnel de Znidi Nour – Ingénieure en Génie Logiciel, passionnée par le développement web, mobile, IoT, IA et la création de solutions innovantes.
            </p>
            {/* <div className="flex space-x-4">
              <a href="https://www.facebook.com/nour.zn.98745" target="_blank" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Facebook className="h-5 w-5" /><span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com/tonprofil" target="_blank" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Twitter className="h-5 w-5" /><span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.instagram.com/tonprofil" target="_blank" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Instagram className="h-5 w-5" /><span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/in/tonprofil" target="_blank" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Linkedin className="h-5 w-5" /><span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/tonprofil" target="_blank" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Github className="h-5 w-5" /><span className="sr-only">GitHub</span>
              </a>
            </div> */}
          </div>
          
         
          
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Téléphone : +216 56 678 087</li>
              <li>Email : <a href="mailto:znidi2025nour@gmail.com" className="hover:text-crypto-purple">znidi2025nour@gmail.com</a></li>
              <li>Adresse : Sfax, Tunisie</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-crypto-purple transition-colors">Compétences</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-crypto-purple transition-colors">À propos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-crypto-purple transition-colors">Me contacter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Znidi Nour. Tous droits réservés.
            </p>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
