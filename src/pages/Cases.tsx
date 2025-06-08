
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, TrendingUp, Users, Shield, Clock } from 'lucide-react';

const Cases = () => {
  const cases = [
    {
      id: 1,
      title: 'Reestruturação Empresarial Completa',
      sector: 'Indústria',
      challenge: 'Empresa familiar enfrentando crise operacional e financeira',
      result: 'Redução significativa de custos e retorno à lucratividade',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      timeline: '6 meses',
      icon: <TrendingUp className="text-brand-gold" size={32} />
    },
    {
      id: 2,
      title: 'Recuperação Estratégica de Ativos',
      sector: 'Construção',
      challenge: 'Recuperação de créditos em atraso com múltiplos devedores',
      result: 'Recuperação expressiva de valores através de acordos estratégicos',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      timeline: '4 meses',
      icon: <Shield className="text-brand-gold" size={32} />
    },
    {
      id: 3,
      title: 'Resolução de Conflito Societário',
      sector: 'Tecnologia',
      challenge: 'Impasse entre sócios que paralisava operações da empresa',
      result: 'Acordo amigável com reestruturação societária bem-sucedida',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      timeline: '3 meses',
      icon: <Users className="text-brand-gold" size={32} />
    },
    {
      id: 4,
      title: 'Otimização Tributária Estratégica',
      sector: 'Varejo',
      challenge: 'Alto passivo tributário comprometendo o fluxo de caixa',
      result: 'Economia substancial em impostos com planejamento personalizado',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      timeline: '8 meses',
      icon: <TrendingUp className="text-brand-gold" size={32} />
    },
    {
      id: 5,
      title: 'Governança Corporativa Moderna',
      sector: 'Serviços',
      challenge: 'Estruturação de governança para empresa familiar em crescimento',
      result: 'Implantação de governança sólida e planejamento sucessório',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      timeline: '5 meses',
      icon: <Shield className="text-brand-gold" size={32} />
    },
    {
      id: 6,
      title: 'Due Diligence para Expansão',
      sector: 'Alimentício',
      challenge: 'Análise completa para aquisição estratégica no setor',
      result: 'Aquisição bem-sucedida com redução de riscos e otimização de custos',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      timeline: '2 meses',
      icon: <Clock className="text-brand-gold" size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black">
      <Header />
      
      {/* Hero Section with SEO optimization */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-black to-brand-gray">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-8 animate-fade-in">
            Cases de <span className="text-gradient">Sucesso</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-white/80 max-w-4xl mx-auto leading-relaxed animate-slide-in-left">
            Conheça histórias reais de transformação empresarial e jurídica. 
            Cada case representa uma vitória conquistada através do nosso modelo baseado em êxito.
          </p>
          
          <div className="mt-12 glass-card p-6 rounded-2xl max-w-2xl mx-auto">
            <p className="text-brand-gold font-semibold text-lg mb-2">
              📊 Resultados Comprovados
            </p>
            <p className="text-brand-white/80">
              Mais de 50 casos resolvidos com sucesso • 98% de satisfação dos clientes
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="section-spacing bg-brand-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((case_item, index) => (
              <article
                key={case_item.id}
                className="card-premium group cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => {
                  console.log(`Navegando para case ${case_item.id}`);
                }}
              >
                <div className="relative h-48 mb-6">
                  <img
                    src={case_item.image}
                    alt={`Case de sucesso - ${case_item.title}`}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent rounded-2xl" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-gold/90 text-brand-black text-sm px-3 py-1 rounded-full font-bold">
                      {case_item.sector}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 right-4">
                    {case_item.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-4 text-brand-gold group-hover:text-brand-gold-light transition-colors duration-300">
                    {case_item.title}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-brand-white/60 mb-2 uppercase tracking-wide">
                        O Desafio
                      </h4>
                      <p className="text-brand-white/80 text-sm leading-relaxed">
                        {case_item.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-brand-white/60 mb-2 uppercase tracking-wide">
                        Resultado
                      </h4>
                      <p className="text-brand-gold text-sm font-medium">
                        {case_item.result}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-brand-white/60 text-sm">
                      <Clock size={16} />
                      <span>{case_item.timeline}</span>
                    </div>
                    
                    <button className="flex items-center space-x-2 text-brand-gold hover:text-brand-gold-light transition-colors duration-300 font-semibold">
                      <span>Ver Detalhes</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Individual Template - Exemplo Detalhado */}
      <section className="section-spacing bg-brand-black">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
                Anatomia de um Case de Sucesso
              </h2>
              <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
                Veja como estruturamos e executamos estratégias vencedoras
              </p>
            </div>
            
            <div className="card-premium overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Case detalhado de reestruturação empresarial"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="bg-brand-gold text-brand-black text-sm px-4 py-2 rounded-full font-bold">
                    Indústria • Reestruturação
                  </span>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-brand-gold">
                  Reestruturação Empresarial Completa
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-2xl font-playfair font-semibold mb-4 text-brand-gold flex items-center">
                        <span className="w-8 h-8 bg-brand-gold text-brand-black rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                        O Cenário Inicial
                      </h4>
                      <p className="text-brand-white/80 leading-relaxed text-lg">
                        Empresa familiar do setor industrial enfrentando graves dificuldades operacionais 
                        e financeiras. Conflitos internos, processos desatualizados e pressão de credores 
                        ameaçavam a continuidade do negócio após 30 anos de operação.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-2xl font-playfair font-semibold mb-4 text-brand-gold flex items-center">
                        <span className="w-8 h-8 bg-brand-gold text-brand-black rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                        Nossa Estratégia
                      </h4>
                      <p className="text-brand-white/80 leading-relaxed text-lg mb-6">
                        Implementamos um plano de reestruturação integral, combinando expertise 
                        empresarial e jurídica para abordar todos os aspectos críticos simultaneamente.
                      </p>
                      <ul className="space-y-3 text-brand-white/70">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0" />
                          <span>Diagnóstico completo dos processos operacionais e financeiros</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0" />
                          <span>Mediação de conflitos societários e reorganização da governança</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0" />
                          <span>Negociação estratégica com credores e fornecedores</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0" />
                          <span>Implementação de novos processos e controles financeiros</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-2xl font-playfair font-semibold mb-4 text-brand-gold flex items-center">
                        <span className="w-8 h-8 bg-brand-gold text-brand-black rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                        Transformação Alcançada
                      </h4>
                      <p className="text-brand-white/80 leading-relaxed text-lg">
                        Em 6 meses, a empresa não apenas superou a crise, mas estabeleceu uma 
                        base sólida para crescimento sustentável, com processos otimizados e 
                        governança familiar estruturada.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="glass-card p-6 rounded-2xl text-center">
                      <div className="text-4xl font-bold text-brand-gold mb-2">6</div>
                      <div className="text-brand-white/80 text-sm">Meses para Conclusão</div>
                    </div>
                    <div className="glass-card p-6 rounded-2xl text-center">
                      <div className="text-4xl font-bold text-brand-gold mb-2">40%</div>
                      <div className="text-brand-white/80 text-sm">Redução de Custos</div>
                    </div>
                    <div className="glass-card p-6 rounded-2xl text-center">
                      <div className="text-4xl font-bold text-brand-gold mb-2">100%</div>
                      <div className="text-brand-white/80 text-sm">Objetivos Alcançados</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-brand-gray to-brand-black">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
            Seu Próximo Case de Sucesso Começa{' '}
            <span className="text-gradient">Aqui</span>
          </h2>
          <p className="text-xl text-brand-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Cada case representa uma parceria de sucesso construída com dedicação, 
            estratégia e o nosso compromisso inabalável com seus resultados.
          </p>
          
          <div className="glass-card p-8 rounded-3xl mb-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-gold mb-2">50+</div>
                <div className="text-brand-white/70">Cases Resolvidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-gold mb-2">98%</div>
                <div className="text-brand-white/70">Taxa de Sucesso</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-gold mb-2">24h</div>
                <div className="text-brand-white/70">Resposta Média</div>
              </div>
            </div>
          </div>
          
          <a
            href="/contato"
            className="brand-button text-2xl px-12 py-6 inline-block shadow-premium"
          >
            Quero Meu Case de Sucesso
          </a>
          <p className="text-brand-white/60 mt-6 text-lg">
            🚀 Transformação garantida • 📊 Resultados mensuráveis • 🤝 Parceria de verdade
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cases;
