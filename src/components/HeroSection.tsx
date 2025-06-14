
import { useState, useEffect } from 'react';
import { ArrowDown, Shield, Clock, Target, Award, Zap, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const heroImages = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes heroFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
          @keyframes heroSlideIn {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes heroFadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes heroScale {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes heroGlow {
            0%, 100% { box-shadow: 0 0 20px rgba(197, 165, 106, 0.3); }
            50% { box-shadow: 0 0 40px rgba(197, 165, 106, 0.6); }
          }
        `}
      </style>
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" itemScope itemType="https://schema.org/Organization">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-2000 ${
                index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('${image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>

        {/* Dynamic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black/70 via-transparent to-brand-black/70 z-10" />
        
        <div className="container-custom relative z-20 text-center">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Competitive Badge */}
            <div className="flex justify-center mb-8">
              <div 
                className="bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-black px-8 py-3 rounded-full font-bold text-lg shadow-luxury transform hover:scale-105 transition-all duration-300"
                style={{
                  animation: isVisible ? 'heroGlow 3s ease-in-out infinite' : 'none'
                }}
              >
                <Award className="inline mr-2" size={20} />
                Excelência Comprovada em Resultados
              </div>
            </div>

            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold leading-tight"
              style={{
                animation: isVisible ? 'heroSlideIn 1s ease-out' : 'none'
              }}
              itemProp="name"
            >
              Transforme Desafios Complexos em{' '}
              <span className="text-gradient block mt-4">Soluções Estratégicas</span>
              <span className="block mt-4 text-4xl md:text-5xl lg:text-6xl">
                Com Metodologia Única
              </span>
            </h1>
            
            <p 
              className="text-2xl md:text-3xl text-brand-white/95 max-w-4xl mx-auto leading-relaxed"
              style={{
                animation: isVisible ? 'heroFadeUp 1s ease-out 0.3s both' : 'none'
              }}
              itemProp="description"
            >
              Combinamos expertise jurídica e visão empresarial para entregar resultados que impactam diretamente o crescimento do seu negócio.
              <span className="text-brand-gold font-semibold block mt-2">
                📈 Resultados Mensuráveis • 🎯 Estratégias Personalizadas • ⚡ Execução Rápida
              </span>
            </p>

            {/* Animated Competitive Indicators */}
            <div 
              className="flex flex-wrap justify-center gap-6 my-16"
              style={{
                animation: isVisible ? 'heroScale 1s ease-out 0.6s both' : 'none'
              }}
            >
              <div className="flex items-center space-x-3 glass-card px-8 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 group">
                <Shield className="text-brand-gold group-hover:animate-pulse" size={28} />
                <div className="text-left">
                  <div className="text-brand-white font-bold text-lg">Garantia Total</div>
                  <div className="text-brand-white/70 text-sm">Comprometimento absoluto</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 glass-card px-8 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 group">
                <TrendingUp className="text-brand-gold group-hover:animate-pulse" size={28} />
                <div className="text-left">
                  <div className="text-brand-white font-bold text-lg">ROI Comprovado</div>
                  <div className="text-brand-white/70 text-sm">Retorno sobre investimento</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 glass-card px-8 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 group">
                <Zap className="text-brand-gold group-hover:animate-pulse" size={28} />
                <div className="text-left">
                  <div className="text-brand-white font-bold text-lg">Metodologia Exclusiva</div>
                  <div className="text-brand-white/70 text-sm">Abordagem diferenciada</div>
                </div>
              </div>
            </div>
            
            <div 
              className="pt-8"
              style={{
                animation: isVisible ? 'heroFloat 4s ease-in-out infinite' : 'none'
              }}
            >
              <a
                href="/contato"
                className="brand-button text-2xl px-16 py-6 inline-block shadow-premium relative overflow-hidden group transform hover:scale-110 transition-all duration-500"
                itemProp="url"
              >
                <span className="relative z-10 flex items-center">
                  <Target className="mr-3" size={24} />
                  Descobrir Minha Estratégia Personalizada
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-gold-light to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <p className="text-brand-white/70 mt-6 text-lg">
                🚀 Análise estratégica personalizada • 💡 Sem compromisso inicial • 📊 Diagnóstico completo
              </p>
            </div>
          </div>
        </div>
        
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          style={{
            animation: 'heroFloat 3s ease-in-out infinite'
          }}
        >
          <ArrowDown className="text-brand-gold" size={40} />
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'bg-brand-gold scale-125' : 'bg-brand-white/40'
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
