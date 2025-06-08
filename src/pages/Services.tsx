
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-brand-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-brand-black">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
            Nossos Serviços
          </h1>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto leading-relaxed">
            Soluções empresariais e jurídicas de alto nível, todas operando sob nosso 
            modelo único baseado em êxito. Você só paga quando alcançamos os resultados.
          </p>
        </div>
      </section>

      {/* Modelo de Êxito Destacado */}
      <section className="py-12 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-4xl font-playfair font-bold mb-4 text-brand-black">
            Todos os Serviços Operam sob o Modelo de Êxito
          </h2>
          <p className="text-lg text-brand-black/80 max-w-4xl mx-auto">
            Independentemente do serviço escolhido, nosso compromisso é o mesmo: 
            você só paga quando obtemos os resultados acordados. Sem risco para sua empresa.
          </p>
        </div>
      </section>

      {/* Consultoria Empresarial */}
      <section className="section-spacing bg-brand-black">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8">
                Consultoria Empresarial
              </h2>
              <p className="text-xl text-brand-white/80 max-w-4xl mx-auto leading-relaxed">
                Transformamos desafios empresariais em oportunidades de crescimento através 
                de estratégias personalizadas e implementação focada em resultados.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Reestruturação Organizacional',
                  description: 'Reorganização de processos, estruturas e hierarquias para otimizar a eficiência operacional e reduzir custos.',
                  icon: '🏗️'
                },
                {
                  title: 'Planejamento Estratégico',
                  description: 'Desenvolvimento de estratégias de longo prazo, definição de metas e criação de roadmaps para crescimento sustentável.',
                  icon: '📊'
                },
                {
                  title: 'Gestão de Crises',
                  description: 'Assessoria especializada para navegar por momentos críticos e transformar crises em oportunidades de renovação.',
                  icon: '🛡️'
                },
                {
                  title: 'Otimização Financeira',
                  description: 'Análise e reestruturação de fluxos financeiros, redução de custos e maximização de rentabilidade.',
                  icon: '💰'
                },
                {
                  title: 'Governança Corporativa',
                  description: 'Implementação de práticas de governança, compliance e estruturas de decisão mais eficientes.',
                  icon: '⚖️'
                },
                {
                  title: 'Fusões e Aquisições',
                  description: 'Assessoria completa em processos de M&A, desde due diligence até integração pós-transação.',
                  icon: '🤝'
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-brand-gray p-6 rounded-lg card-hover"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-playfair font-semibold mb-4 text-brand-gold">
                    {service.title}
                  </h3>
                  <p className="text-brand-white/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultoria Jurídica */}
      <section className="section-spacing bg-brand-gray">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8">
                Consultoria Jurídica
              </h2>
              <p className="text-xl text-brand-white/80 max-w-4xl mx-auto leading-relaxed">
                Proteção jurídica estratégica para seu negócio, com foco em soluções 
                práticas e resultados mensuráveis que impulsionam o crescimento empresarial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Direito Empresarial',
                  description: 'Assessoria completa em contratos comerciais, operações societárias e compliance regulatório.',
                  icon: '🏢'
                },
                {
                  title: 'Direito Societário',
                  description: 'Estruturação societária, governança, alterações contratuais e resolução de conflitos entre sócios.',
                  icon: '📋'
                },
                {
                  title: 'Contencioso Estratégico',
                  description: 'Litígios empresariais complexos com foco em soluções rápidas e eficazes para proteger seus interesses.',
                  icon: '⚔️'
                },
                {
                  title: 'Recuperação de Crédito',
                  description: 'Estratégias especializadas para recuperação de valores em atraso e negociação de dívidas.',
                  icon: '💳'
                },
                {
                  title: 'Direito Tributário',
                  description: 'Planejamento tributário, defesas fiscais e recuperação de créditos tributários.',
                  icon: '🧮'
                },
                {
                  title: 'Propriedade Intelectual',
                  description: 'Proteção de marcas, patentes e ativos intangíveis essenciais para seu negócio.',
                  icon: '🔐'
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-brand-black p-6 rounded-lg card-hover"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-playfair font-semibold mb-4 text-brand-gold">
                    {service.title}
                  </h3>
                  <p className="text-brand-white/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="section-spacing bg-brand-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
              Nossa metodologia garante resultados através de um processo estruturado e transparente
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Diagnóstico Completo',
                description: 'Análise profunda do cenário atual e identificação de oportunidades'
              },
              {
                step: '02',
                title: 'Estratégia Personalizada',
                description: 'Desenvolvimento de plano de ação específico para seus desafios'
              },
              {
                step: '03',
                title: 'Implementação Ágil',
                description: 'Execução focada com acompanhamento constante e ajustes quando necessário'
              },
              {
                step: '04',
                title: 'Resultados Mensuráveis',
                description: 'Entrega de resultados concretos e mensuráveis conforme acordado'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-6xl font-playfair font-bold text-brand-gold/30 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-4 text-brand-gold">
                  {item.title}
                </h3>
                <p className="text-brand-white/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-brand-gray">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8">
            Pronto para Transformar Seus Desafios em{' '}
            <span className="text-gradient">Oportunidades</span>?
          </h2>
          <p className="text-xl text-brand-white/80 mb-12 max-w-3xl mx-auto">
            Agende sua análise estratégica gratuita e descubra como nossos serviços 
            podem impulsionar os resultados da sua empresa.
          </p>
          <a
            href="/contato"
            className="brand-button text-lg px-8 py-4 inline-block"
          >
            Solicitar Análise Gratuita
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
