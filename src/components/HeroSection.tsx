
import { useState, useEffect } from 'react';
import { ArrowDown, Shield, Clock, Target } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      {/* Premium overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black/60 via-transparent to-brand-black/60 z-10" />
      
      <div className="container-custom relative z-20 text-center">
        <div className="max-w-6xl mx-auto space-y-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold leading-tight animate-fade-in">
            Resolva seus Desafios Jurídicos e Empresariais{' '}
            <span className="text-gradient block mt-4">Mais Complexos</span>
            <span className="block mt-4 text-4xl md:text-5xl lg:text-6xl">
              Com Risco Zero.
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-brand-white/90 max-w-4xl mx-auto leading-relaxed animate-slide-in-left">
            Compromisso, transparência e excelência para seus desafios. 
            <span className="text-brand-gold font-semibold block mt-2">
              Você só paga se tiver sucesso.
            </span>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 my-12 animate-slide-in-right">
            <div className="flex items-center space-x-3 glass-card px-6 py-3 rounded-2xl">
              <Shield className="text-brand-gold" size={24} />
              <span className="text-brand-white font-medium">Risco Zero</span>
            </div>
            <div className="flex items-center space-x-3 glass-card px-6 py-3 rounded-2xl">
              <Target className="text-brand-gold" size={24} />
              <span className="text-brand-white font-medium">100% Focado em Resultados</span>
            </div>
            <div className="flex items-center space-x-3 glass-card px-6 py-3 rounded-2xl">
              <Clock className="text-brand-gold" size={24} />
              <span className="text-brand-white font-medium">Resposta em 24h</span>
            </div>
          </div>
          
          <div className="pt-8 animate-scale-in">
            <a
              href="/contato"
              className="brand-button text-xl px-12 py-6 inline-block shadow-premium relative overflow-hidden group"
            >
              <span className="relative z-10">Quero minha Análise GRATUITA</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold-light to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <p className="text-brand-white/60 mt-4 text-lg">
              ⏰ Análise estratégica sem custo • Sem compromisso
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float z-20">
        <ArrowDown className="text-brand-gold" size={36} />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-brand-gold' : 'bg-brand-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
