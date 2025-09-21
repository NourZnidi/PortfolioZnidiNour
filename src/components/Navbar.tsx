import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-crypto-blue/80 backdrop-blur-md py-3 shadow-lg' : 'py-6'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
          Mon<span className="text-crypto-purple px-2">Portfolio</span>
          </h1>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center space-x-12">
          <li>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
            À propos
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
            Compétences
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
            Projets
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
            </a>
          </li>
        </ul>

        {/* <div className="hidden lg:flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            Login
          </Button>
          <Link to="#!">
            <Button className="bg-crypto-purple hover:bg-crypto-dark-purple text-white w-full">Buy Now</Button>
          </Link>
        </div> */}

        {/* Mobile menu button */}
        {/* <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}
      </div>

     
    </nav>
  );
};

export default Navbar;
