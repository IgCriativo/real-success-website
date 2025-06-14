
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      id: 1,
      title: 'Reestruturação Empresarial',
      subtitle: 'Transformação Organizacional',
      description: 'Reorganização completa de processos, estruturas e hierarquias para maximizar eficiência e reduzir custos operacionais.',
      image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      benefits: ['Redução de 30-50% nos custos', 'Aumento da produtividade', 'Otimização de processos'],
      icon: '🏗️'
    },
    {
      id: 2,
      title: 'Consultoria Jurídica Estratégica',
      subtitle: 'Proteção Legal Completa',
      description: 'Assessoria jurídica especializada em direito empresarial, societário e contencioso estratégico para proteger seus negócios.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      benefits: ['Blindagem jurídica total', 'Prevenção de litígios', 'Recuperação de créditos'],
      icon: '⚖️'
    },
    {
      id: 3,
      title: 'Planejamento Estratégico',
      subtitle: 'Visão de Futuro',
      description: 'Desenvolvimento de estratégias de longo prazo, definição de metas e criação de roadmaps para crescimento sustentável.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      benefits: ['Crescimento sustentável', 'Metas claras e alcançáveis', 'ROI comprovado'],
      icon: '📊'
    },
    {
      id: 4,
      title: 'Gestão de Crises',
      subtitle: 'Recuperação e Estabilidade',
      description: 'Intervenção especializada para navegar por momentos críticos e transformar crises em oportunidades de renovação.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      benefits: ['Recuperação rápida', 'Estabilização financeira', 'Transformação positiva'],
      icon: '🛡️'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="section-spacing bg-brand-gray relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 via-transparent to-brand-gold/10" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8 animate-fade-in">
            Nossos Serviços Principais
          </h2>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto leading-relaxed">
            Soluções completas e personalizadas para transformar seus desafios em oportunidades de crescimento
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={service.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8">
                    {/* Image Side */}
                    <div className="relative order-2 lg:order-1">
                      <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden group">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                        <div className="absolute top-6 left-6">
                          <div className="text-4xl mb-2">{service.icon}</div>
                          <span className="bg-brand-gold text-brand-black px-4 py-2 rounded-full text-sm font-bold">
                            Serviço Premium
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex flex-col justify-center space-y-6 order-1 lg:order-2">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-playfair font-bold text-brand-gold mb-2">
                          {service.title}
                        </h3>
                        <h4 className="text-xl text-brand-gold/80 mb-4">
                          {service.subtitle}
                        </h4>
                        <p className="text-lg text-brand-white/90 leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="text-brand-gold flex-shrink-0" size={20} />
                            <span className="text-brand-white/80">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex space-x-4 pt-4">
                        <a
                          href="/servicos"
                          className="brand-button inline-flex items-center space-x-2"
                        >
                          <span>Saiba Mais</span>
                          <ArrowRight size={20} />
                        </a>
                        <a
                          href="/contato"
                          className="brand-button-outline inline-flex items-center space-x-2"
                        >
                          <span>Consultar</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-brand-gold/20 hover:bg-brand-gold/40 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
          >
            <ChevronLeft className="text-brand-gold group-hover:scale-110 transition-transform" size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-brand-gold/20 hover:bg-brand-gold/40 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
          >
            <ChevronRight className="text-brand-gold group-hover:scale-110 transition-transform" size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-brand-gold w-8' 
                    : 'bg-brand-white/30 hover:bg-brand-white/50'
                }`}
              />
            ))}
          </div>

          {/* Auto-play toggle */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-brand-white/60 hover:text-brand-gold text-sm transition-colors duration-300"
            >
              {isAutoPlaying ? '⏸️ Pausar' : '▶️ Reproduzir'} apresentação automática
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
