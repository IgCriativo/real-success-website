
import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

const AnimatedStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ success: 0, clients: 0, years: 0, cases: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalCounts = {
    success: 98,
    clients: 150,
    years: 15,
    cases: 500
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCount = (key: keyof typeof finalCounts, duration: number) => {
      const startTime = Date.now();
      const startValue = 0;
      const endValue = finalCounts[key];

      const updateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

        setCounts(prev => ({ ...prev, [key]: currentValue }));

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    };

    setTimeout(() => animateCount('success', 2000), 200);
    setTimeout(() => animateCount('clients', 2200), 400);
    setTimeout(() => animateCount('years', 1800), 600);
    setTimeout(() => animateCount('cases', 2500), 800);
  }, [isVisible]);

  const stats = [
    {
      icon: <Target className="text-brand-black" size={48} />,
      value: counts.success,
      suffix: '%',
      label: 'Taxa de Sucesso',
      description: 'Casos resolvidos com êxito'
    },
    {
      icon: <Users className="text-brand-black" size={48} />,
      value: counts.clients,
      suffix: '+',
      label: 'Clientes Atendidos',
      description: 'Empresas transformadas'
    },
    {
      icon: <Award className="text-brand-black" size={48} />,
      value: counts.years,
      suffix: '+',
      label: 'Anos de Experiência',
      description: 'Expertise comprovada'
    },
    {
      icon: <TrendingUp className="text-brand-black" size={48} />,
      value: counts.cases,
      suffix: '+',
      label: 'Cases de Sucesso',
      description: 'Resultados entregues'
    }
  ];

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
        `}
      </style>
      
      <section ref={sectionRef} className="py-20 bg-brand-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold via-brand-gold-light to-brand-gold" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-black mb-6">
              Números que Falam por Si
            </h2>
            <p className="text-xl text-brand-black/80 max-w-3xl mx-auto">
              Resultados comprovados que demonstram nosso compromisso com a excelência e o sucesso dos nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white/20 backdrop-blur-sm p-8 rounded-3xl text-center transform transition-all duration-500 hover:scale-105 hover:bg-white/30 ${
                  isVisible ? 'fade-in-up' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="mb-6 flex justify-center transform transition-transform duration-300 hover:scale-110">
                  {stat.icon}
                </div>
                
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl font-bold text-brand-black mb-2">
                    {stat.value}
                    <span className="text-brand-black/80">{stat.suffix}</span>
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-brand-black mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-brand-black/70 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-3xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-playfair font-bold text-brand-black mb-4">
                Seja o Próximo Case de Sucesso
              </h3>
              <p className="text-brand-black/80 mb-6">
                Junte-se a centenas de empresários que já transformaram seus negócios com nossa expertise
              </p>
              <a
                href="/contato"
                className="bg-brand-black text-brand-gold font-semibold px-8 py-4 rounded-2xl inline-block transition-all duration-300 hover:bg-brand-gray hover:scale-105"
              >
                Começar Agora
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnimatedStats;
