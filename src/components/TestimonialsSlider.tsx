
import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ricardo Silva',
      company: 'CEO - Indústria Metalúrgica',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: 'A REAL Consultoria salvou nossa empresa de uma crise que parecia sem solução. O modelo de pagamento por êxito nos deu confiança total no processo.',
      rating: 5,
      result: 'Economia de R$ 1.2M em reestruturação'
    },
    {
      id: 2,
      name: 'Maria Fernanda Costa',
      company: 'Diretora - Rede de Varejo',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: 'Transparência e competência excepcionais. Resolveram um conflito societário complexo que durava 2 anos em apenas 3 meses.',
      rating: 5,
      result: 'Conflito resolvido em 90 dias'
    },
    {
      id: 3,
      name: 'João Martins',
      company: 'Fundador - Startup de Tecnologia',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: 'O envolvimento direto dos sócios fez toda diferença. Sentimos que éramos a prioridade deles, não apenas mais um cliente.',
      rating: 5,
      result: 'Estruturação societária completa'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-spacing bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
            Histórias reais de transformação e sucesso
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card p-12 rounded-3xl relative">
            <Quote className="absolute top-6 left-6 text-brand-gold/30" size={48} />
            
            <div className="text-center">
              <div className="mb-8">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-3 border-brand-gold/30"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="text-brand-gold fill-current" size={20} />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-brand-white/90 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="space-y-2">
                <h4 className="text-brand-gold font-playfair font-semibold text-xl">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-brand-white/70">
                  {testimonials[currentTestimonial].company}
                </p>
                <div className="inline-block bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-semibold mt-4">
                  {testimonials[currentTestimonial].result}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-brand-gold/20 hover:bg-brand-gold/30 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="text-brand-gold" size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-brand-gold/20 hover:bg-brand-gold/30 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="text-brand-gold" size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-brand-gold' : 'bg-brand-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
