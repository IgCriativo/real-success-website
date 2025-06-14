
import { useState, useEffect, useRef } from 'react';
import { Shield, Target, Zap, Trophy, Users, TrendingUp, Award, CheckCircle } from 'lucide-react';

const CompetitiveAdvantages = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const advantages = [
    {
      icon: <Shield className="text-brand-gold" size={48} />,
      title: "Garantia Total de Resultados",
      description: "Comprometimento absoluto com o sucesso do seu projeto. Trabalhamos até você alcançar seus objetivos.",
      details: "Nossa metodologia exclusiva garante que cada estratégia seja executada com precisão e acompanhada de perto.",
      color: "from-blue-900/20 to-blue-800/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <Target className="text-brand-gold" size={48} />,
      title: "ROI Comprovado",
      description: "Cada estratégia é desenvolvida para maximizar o retorno sobre o investimento com resultados mensuráveis.",
      details: "Acompanhamento contínuo com métricas claras e relatórios detalhados de performance.",
      color: "from-green-900/20 to-green-800/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: <Zap className="text-brand-gold" size={48} />,
      title: "Execução Ágil",
      description: "Implementação rápida e eficiente, sem burocracias desnecessárias ou delays operacionais.",
      details: "Metodologia própria que acelera a tomada de decisões e implementação de soluções.",
      color: "from-purple-900/20 to-purple-800/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: <Trophy className="text-brand-gold" size={48} />,
      title: "Metodologia Exclusiva",
      description: "Processo estruturado e testado que combina expertise jurídica com visão estratégica empresarial.",
      details: "Desenvolvida ao longo de anos de experiência, nossa metodologia é única no mercado.",
      color: "from-orange-900/20 to-orange-800/20",
      borderColor: "border-orange-500/30"
    },
    {
      icon: <Users className="text-brand-gold" size={48} />,
      title: "Atendimento Personalizado",
      description: "Cada cliente recebe atenção exclusiva com estratégias desenvolvidas especificamente para seu negócio.",
      details: "Time dedicado que entende profundamente os desafios e oportunidades do seu setor.",
      color: "from-red-900/20 to-red-800/20",
      borderColor: "border-red-500/30"
    },
    {
      icon: <TrendingUp className="text-brand-gold" size={48} />,
      title: "Crescimento Sustentável",
      description: "Estratégias focadas em resultados de longo prazo que garantem crescimento consistente.",
      details: "Não apenas resolvemos problemas, mas criamos fundações sólidas para o futuro.",
      color: "from-teal-900/20 to-teal-800/20",
      borderColor: "border-teal-500/30"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % advantages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes advantageSlide {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes advantageGlow {
            0%, 100% { box-shadow: 0 0 20px rgba(197, 165, 106, 0.2); }
            50% { box-shadow: 0 0 40px rgba(197, 165, 106, 0.4); }
          }
        `}
      </style>
      
      <section ref={sectionRef} className="py-24 bg-gradient-to-br from-brand-black via-brand-gray/30 to-brand-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Award className="text-brand-gold mr-4" size={40} />
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-gold">
                Diferenciais Competitivos
              </h2>
            </div>
            <p className="text-xl text-brand-white/90 max-w-4xl mx-auto leading-relaxed">
              Descubra por que somos a escolha preferida de empresários que buscam 
              resultados excepcionais e crescimento sustentável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${advantage.color} backdrop-blur-sm p-8 rounded-3xl border ${advantage.borderColor} transform transition-all duration-500 hover:scale-105 cursor-pointer group ${
                  activeCard === index ? 'ring-2 ring-brand-gold' : ''
                }`}
                style={{
                  animation: isVisible ? `advantageSlide 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
                onClick={() => setActiveCard(index)}
              >
                <div className="flex justify-center mb-6 group-hover:animate-pulse">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-playfair font-bold text-brand-white mb-4 text-center">
                  {advantage.title}
                </h3>
                <p className="text-brand-white/80 text-center mb-4 leading-relaxed">
                  {advantage.description}
                </p>
                <div className={`overflow-hidden transition-all duration-500 ${
                  activeCard === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-brand-white/70 text-sm text-center pt-4 border-t border-brand-gold/20">
                    {advantage.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto mb-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <CheckCircle className="text-green-400" size={32} />
                <h3 className="text-2xl font-playfair font-bold text-brand-gold">
                  Compromisso com a Excelência
                </h3>
              </div>
              <p className="text-brand-white/90 text-lg leading-relaxed mb-6">
                Não somos apenas mais uma consultoria. Somos parceiros estratégicos comprometidos 
                com a transformação e o crescimento sustentável do seu negócio.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-semibold">
                  🎯 Foco em Resultados
                </span>
                <span className="bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-semibold">
                  📈 Crescimento Comprovado
                </span>
                <span className="bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-semibold">
                  ⚡ Implementação Ágil
                </span>
                <span className="bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-semibold">
                  🔒 Confidencialidade Total
                </span>
              </div>
            </div>
            
            <a
              href="/contato"
              className="brand-button text-xl px-12 py-6 shadow-premium transform hover:scale-110 transition-all duration-300 relative overflow-hidden group"
              style={{
                animation: isVisible ? 'advantageGlow 3s ease-in-out infinite' : 'none'
              }}
            >
              <span className="relative z-10 flex items-center">
                <Target className="mr-3 group-hover:animate-spin" size={24} />
                Descobrir Como Podemos Ajudar
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold-light to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompetitiveAdvantages;
