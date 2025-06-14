
import { useState } from 'react';
import { Target, TrendingUp, Shield, Zap, Users, Award } from 'lucide-react';

const SolutionsShowcase = () => {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      icon: <Target className="text-brand-gold" size={48} />,
      title: 'Resultados Garantidos',
      description: 'Modelo único baseado em êxito - você só paga quando alcançamos os resultados acordados.',
      stats: '98% taxa de sucesso',
      color: 'from-blue-500/20 to-purple-500/20'
    },
    {
      icon: <TrendingUp className="text-brand-gold" size={48} />,
      title: 'Crescimento Exponencial',
      description: 'Estratégias comprovadas que geram crescimento sustentável e lucratividade a longo prazo.',
      stats: '300% crescimento médio',
      color: 'from-green-500/20 to-blue-500/20'
    },
    {
      icon: <Shield className="text-brand-gold" size={48} />,
      title: 'Proteção Total',
      description: 'Blindagem jurídica completa para proteger seu patrimônio e garantir operações seguras.',
      stats: '100% proteção legal',
      color: 'from-red-500/20 to-orange-500/20'
    },
    {
      icon: <Zap className="text-brand-gold" size={48} />,
      title: 'Implementação Ágil',
      description: 'Processos otimizados e implementação rápida para gerar resultados em tempo recorde.',
      stats: '24h resposta garantida',
      color: 'from-yellow-500/20 to-red-500/20'
    },
    {
      icon: <Users className="text-brand-gold" size={48} />,
      title: 'Equipe Especializada',
      description: 'Sócios envolvidos diretamente em cada projeto, garantindo excelência e atenção personalizada.',
      stats: '15+ anos experiência',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: <Award className="text-brand-gold" size={48} />,
      title: 'Excelência Reconhecida',
      description: 'Histórico comprovado de casos de sucesso e clientes satisfeitos em diversos segmentos.',
      stats: '500+ casos resolvidos',
      color: 'from-indigo-500/20 to-blue-500/20'
    }
  ];

  return (
    <section className="section-spacing bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-gold/5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
            Soluções que Transformam
          </h2>
          <p className="text-xl text-brand-white/80 max-w-4xl mx-auto leading-relaxed">
            Descubra como nossas soluções inovadoras podem revolucionar seu negócio e gerar resultados extraordinários
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Solution Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`card-premium p-8 cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  activeSolution === index ? 'ring-2 ring-brand-gold/50' : ''
                }`}
                onClick={() => setActiveSolution(index)}
                onMouseEnter={() => setActiveSolution(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-20 rounded-3xl`} />
                
                <div className="relative z-10">
                  <div className="mb-6 transform transition-transform duration-300 hover:scale-110">
                    {solution.icon}
                  </div>
                  
                  <h3 className="text-xl font-playfair font-semibold mb-4 text-brand-gold">
                    {solution.title}
                  </h3>
                  
                  <p className="text-brand-white/80 leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  
                  <div className="bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-semibold inline-block">
                    {solution.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Solution Display */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="card-premium p-8 h-full">
                <div className="text-center mb-8">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-brand-gold/20 rounded-full">
                      {solutions[activeSolution].icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-playfair font-bold text-brand-gold mb-4">
                    {solutions[activeSolution].title}
                  </h3>
                  
                  <p className="text-brand-white/90 leading-relaxed mb-6">
                    {solutions[activeSolution].description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-brand-gold/20 to-transparent p-4 rounded-lg">
                      <div className="text-3xl font-bold text-brand-gold mb-2">
                        {solutions[activeSolution].stats}
                      </div>
                      <div className="text-brand-white/70">
                        Performance comprovada
                      </div>
                    </div>
                    
                    <a
                      href="/contato"
                      className="brand-button w-full text-center block"
                    >
                      Implementar Solução
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-playfair font-bold text-brand-gold mb-4">
              Pronto para Transformar seu Negócio?
            </h3>
            <p className="text-xl text-brand-white/80 mb-8">
              Agende uma análise gratuita e descubra como nossas soluções podem revolucionar seus resultados
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contato" className="brand-button text-lg px-8 py-4">
                Análise Gratuita
              </a>
              <a href="/cases" className="brand-button-outline text-lg px-8 py-4">
                Ver Cases de Sucesso
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcase;
