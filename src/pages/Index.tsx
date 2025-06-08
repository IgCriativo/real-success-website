
import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-brand-black">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight">
              Resolva seus Desafios Jurídicos e Empresariais{' '}
              <span className="text-gradient">Mais Complexos</span>
              <br />
              Com Risco Zero.
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-white/90 max-w-3xl mx-auto leading-relaxed">
              Compromisso, transparência e excelência para seus desafios. 
              Você só paga se tiver sucesso.
            </p>
            
            <div className="pt-8">
              <a
                href="/contato"
                className="brand-button text-lg px-8 py-4 inline-block"
              >
                Quero minha Análise sem Custo
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-brand-gold" size={32} />
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-spacing bg-brand-black fade-on-scroll">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
              A Parceria que Sua Empresa Realmente Precisa
            </h2>
            <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
              Descubra por que empresas escolhem nosso modelo único de consultoria
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Modelo de Êxito Garantido',
                description: 'Você só paga pelo resultado. Seu sucesso é o nosso sucesso.'
              },
              {
                icon: '🤝',
                title: 'Compromisso Total',
                description: 'Envolvimento direto dos sócios no seu caso para garantir agilidade e decisões assertivas.'
              },
              {
                icon: '💎',
                title: 'Transparência Absoluta',
                description: 'Comunicação clara e honesta do início ao fim do processo. Sem surpresas.'
              },
              {
                icon: '⚡',
                title: 'Soluções Sob Medida',
                description: 'Não usamos fórmulas prontas. Mergulhamos no seu desafio para construir a estratégia vencedora.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-brand-gray/50 card-hover"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
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

      {/* Serviços */}
      <section className="section-spacing bg-brand-gray fade-on-scroll">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
              Nossa Expertise ao seu Dispor
            </h2>
            <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
              Soluções completas para seus desafios empresariais e jurídicos
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-brand-black p-8 rounded-lg card-hover">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-brand-gold">
                Consultoria Empresarial
              </h3>
              <p className="text-brand-white/80 mb-6 leading-relaxed">
                Reestruturação organizacional, planejamento estratégico, gestão de crises 
                e soluções personalizadas para aumentar a eficiência e lucratividade do seu negócio.
              </p>
              <a
                href="/servicos"
                className="brand-button-outline inline-block"
              >
                Saiba Mais
              </a>
            </div>
            
            <div className="bg-brand-black p-8 rounded-lg card-hover">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-brand-gold">
                Consultoria Jurídica
              </h3>
              <p className="text-brand-white/80 mb-6 leading-relaxed">
                Direito empresarial, societário, contencioso estratégico e assessoria 
                jurídica especializada para proteger e impulsionar seus negócios.
              </p>
              <a
                href="/servicos"
                className="brand-button-outline inline-block"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="section-spacing bg-brand-black fade-on-scroll">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
              Como Funciona o Modelo Baseado em Êxito?
            </h2>
            <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
              Um processo transparente e estruturado para garantir os melhores resultados
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Análise Estratégica',
                  description: 'Mergulhamos fundo no seu caso para definir as metas e o caminho para a vitória. Sem custo para você.'
                },
                {
                  step: '02',
                  title: 'Execução Focada',
                  description: 'Implementamos o plano com agilidade e mantemos você informado em cada etapa. Transparência total.'
                },
                {
                  step: '03',
                  title: 'Resultado e Êxito',
                  description: 'Alcançamos o objetivo definido. É aqui que celebramos juntos e nossa parceria é remunerada.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative bg-brand-gray p-8 rounded-lg card-hover"
                >
                  <div className="text-6xl font-playfair font-bold text-brand-gold/20 mb-4">
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
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-spacing bg-brand-gray fade-on-scroll">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8">
            Pronto para Resolver Desafios Complexos com um{' '}
            <span className="text-gradient">Parceiro de Verdade</span>?
          </h2>
          <p className="text-xl text-brand-white/80 mb-12 max-w-3xl mx-auto">
            Não deixe seus problemas empresariais e jurídicos sem solução. 
            Agende sua análise estratégica sem custo e descubra como podemos ajudar.
          </p>
          <a
            href="/contato"
            className="brand-button text-lg px-8 py-4 inline-block"
          >
            Agendar Análise Estratégica
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
