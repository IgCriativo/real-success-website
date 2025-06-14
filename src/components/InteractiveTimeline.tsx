
import { useState } from 'react';
import { CheckCircle, ArrowRight, Clock, Target, Award } from 'lucide-react';

const InteractiveTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: 'Análise Estratégica Gratuita',
      subtitle: 'Diagnóstico Completo',
      description: 'Realizamos uma análise profunda do seu cenário atual, identificando oportunidades e definindo estratégias personalizadas.',
      duration: '24-48h',
      deliverables: [
        'Diagnóstico completo da situação',
        'Identificação de oportunidades',
        'Proposta de valor personalizada',
        'Roadmap estratégico inicial'
      ],
      icon: <Target className="text-brand-gold" size={32} />,
      color: 'from-blue-500/20 to-purple-500/20'
    },
    {
      id: 2,
      title: 'Planejamento Detalhado',
      subtitle: 'Estratégia Sob Medida',
      description: 'Desenvolvemos um plano de ação detalhado com metas claras, prazos definidos e métricas de sucesso.',
      duration: '3-5 dias',
      deliverables: [
        'Plano de ação detalhado',
        'Cronograma de implementação',
        'Definição de KPIs',
        'Estrutura de acompanhamento'
      ],
      icon: <Clock className="text-brand-gold" size={32} />,
      color: 'from-green-500/20 to-blue-500/20'
    },
    {
      id: 3,
      title: 'Implementação Focada',
      subtitle: 'Execução Ágil',
      description: 'Colocamos o plano em ação com acompanhamento constante, ajustes quando necessário e transparência total.',
      duration: 'Conforme projeto',
      deliverables: [
        'Execução do plano estratégico',
        'Monitoramento contínuo',
        'Relatórios de progresso',
        'Ajustes e otimizações'
      ],
      icon: <ArrowRight className="text-brand-gold" size={32} />,
      color: 'from-yellow-500/20 to-red-500/20'
    },
    {
      id: 4,
      title: 'Resultados e Êxito',
      subtitle: 'Sucesso Garantido',
      description: 'Alcançamos os objetivos definidos e celebramos o sucesso juntos. É aqui que nossa parceria é remunerada.',
      duration: 'Resultado final',
      deliverables: [
        'Objetivos alcançados',
        'Resultados mensuráveis',
        'Relatório final de êxito',
        'Suporte pós-implementação'
      ],
      icon: <Award className="text-brand-gold" size={32} />,
      color: 'from-purple-500/20 to-pink-500/20'
    }
  ];

  return (
    <section className="section-spacing bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-gold/5" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
            Nosso Processo de Sucesso
          </h2>
          <p className="text-xl text-brand-white/80 max-w-4xl mx-auto leading-relaxed">
            Um método comprovado e estruturado que garante resultados excepcionais em cada etapa da nossa parceria
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline Navigation */}
          <div className="flex flex-col lg:flex-row justify-between mb-12 space-y-4 lg:space-y-0 lg:space-x-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`relative p-6 rounded-2xl transition-all duration-500 text-left group ${
                  activeStep === index
                    ? 'bg-brand-gold/20 border-2 border-brand-gold scale-105'
                    : 'bg-brand-gray/50 border-2 border-transparent hover:border-brand-gold/50'
                }`}
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className={`p-3 rounded-full transition-all duration-300 ${
                    activeStep === index ? 'bg-brand-gold/30' : 'bg-brand-gray'
                  }`}>
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-brand-gold">
                    {step.id.toString().padStart(2, '0')}
                  </div>
                </div>
                
                <h3 className={`font-playfair font-semibold mb-2 transition-colors duration-300 ${
                  activeStep === index ? 'text-brand-gold' : 'text-brand-white'
                }`}>
                  {step.title}
                </h3>
                
                <p className="text-sm text-brand-white/70">
                  {step.subtitle}
                </p>
                
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === index ? 'bg-brand-gold' : 'bg-brand-white/30'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="card-premium p-12 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${steps[activeStep].color} opacity-30 rounded-3xl`} />
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-4 bg-brand-gold/20 rounded-full">
                      {steps[activeStep].icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-playfair font-bold text-brand-gold">
                        {steps[activeStep].title}
                      </h3>
                      <p className="text-brand-gold/80">
                        {steps[activeStep].subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-brand-white/90 leading-relaxed mb-8">
                    {steps[activeStep].description}
                  </p>
                  
                  <div className="flex items-center space-x-6">
                    <div className="bg-brand-gold/20 px-4 py-2 rounded-full">
                      <span className="text-brand-gold font-semibold">
                        ⏱️ {steps[activeStep].duration}
                      </span>
                    </div>
                    <div className="bg-brand-gold/20 px-4 py-2 rounded-full">
                      <span className="text-brand-gold font-semibold">
                        📋 Etapa {steps[activeStep].id}/4
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-playfair font-semibold text-brand-gold mb-6">
                    Entregas desta Etapa:
                  </h4>
                  
                  <div className="space-y-4">
                    {steps[activeStep].deliverables.map((deliverable, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-brand-gray/30 rounded-lg"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <CheckCircle className="text-brand-gold flex-shrink-0" size={20} />
                        <span className="text-brand-white/90">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-brand-gold/20">
                    <a
                      href="/contato"
                      className="brand-button w-full text-center block"
                    >
                      Iniciar Processo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-4">
              <span className="text-brand-white/70">Progresso do Processo</span>
              <span className="text-brand-gold font-semibold">
                {Math.round(((activeStep + 1) / steps.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-brand-gray/30 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-brand-gold to-brand-gold-light h-3 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;
