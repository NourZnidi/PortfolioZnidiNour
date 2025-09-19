
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Mail, Phone, MapPin } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-crypto-blue to-[#12141C] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-crypto-purple/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-crypto-light-purple/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
          Contactez-moi <span className="text-gradient"></span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Pour toute question, collaboration ou opportunité professionnelle, n'hésitez pas à me contacter via les informations ci-dessous.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <MapPin className="mx-auto mb-4 h-8 w-8 text-crypto-purple" />
            <h3 className="text-xl font-semibold text-white mb-2">Adresse</h3>
            <p className="text-gray-400">Route de Tunis, Sfax, Tunisie</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <Phone className="mx-auto mb-4 h-8 w-8 text-crypto-purple" />
            <h3 className="text-xl font-semibold text-white mb-2">Téléphone</h3>
            <p className="text-gray-400">+216 56 678 087</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <Mail className="mx-auto mb-4 h-8 w-8 text-crypto-purple" />
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400">znidi2025nour@gmail.com</p>
          </div>
        </div>

        
        </div>
      </div>
    </section>
  );
};

export default CTA;
