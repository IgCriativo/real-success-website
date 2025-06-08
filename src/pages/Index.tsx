
import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import BlogSection from '../components/BlogSection';
import TestimonialsSlider from '../components/TestimonialsSlider';
import { Target, Users, Award, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

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
      
      <HeroSection />

      {/* Diferenciais */}
      <section className="section-spacing bg-brand-black fade-on-scroll">
        <div className="container-custom">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-10">
              A Parceria que Sua Empresa Realmente Precisa
            </h2>
            <p className="text-xl text-brand-white/80 max-w-4xl mx-auto leading-relaxed">
              Descubra por que empresários escolhem nosso modelo único de consultoria
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Target className="text-brand-gold" size={52} />,
                title: 'Modelo de Êxito Garantido',
                description: 'Você só paga pelo resultado alcançado. Seu sucesso é literalmente o nosso sucesso.',
                highlight: 'Risco Zero'
              },
              {
                icon: <Users className="text-brand-gold" size={52} />,
                title: 'Compromisso Total',
                description: 'Envolvimento direto dos sócios no seu caso para garantir agilidade e decisões assertivas.',
                highlight: 'Sócios Envolvidos'
              },
              {
                icon: <Award className="text-brand-gold" size={52} />,
                title: 'Transparência Absoluta',
                description: 'Comunicação clara e honesta do início ao fim do processo. Sem surpresas ou custos ocultos.',
                highlight: '100% Transparente'
              },
              {
                icon: <TrendingUp className="text-brand-gold" size={52} />,
                title: 'Soluções Sob Medida',
                description: 'Não usamos fórmulas prontas. Mergulhamos no seu desafio para construir a estratégia vencedora.',
                highlight: 'Estratégia Única'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center card-premium group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-8 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="bg-brand-gold/20 text-brand-gold text-sm px-4 py-2 rounded-full mb-6 inline-block">
                  {item.highlight}
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-6 text-brand-gold group-hover:text-brand-gold-light transition-colors duration-300">
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

      {/* Serviços com Imagens */}
      <section className="section-spacing bg-brand-gray fade-on-scroll">
        <div className="container-custom">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-10">
              Nossa Expertise ao seu Dispor
            </h2>
            <p className="text-xl text-brand-white/80 max-w-4xl mx-auto leading-relaxed">
              Soluções completas para seus desafios empresariais e jurídicos mais complexos
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="card-premium overflow-hidden group">
              <div className="relative h-72 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Consultoria Empresarial"
                  className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent rounded-3xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-brand-gold text-brand-black px-4 py-2 rounded-full text-sm font-bold">
                    Consultoria Empresarial
                  </span>
                </div>
              </div>
              
              <div className="space-y-8">
                <h3 className="text-3xl font-playfair font-bold text-brand-gold">
                  Transformação Empresarial
                </h3>
                <p className="text-brand-white/80 leading-relaxed text-lg">
                  Reestruturação organizacional, planejamento estratégico, gestão de crises 
                  e soluções personalizadas para aumentar a eficiência e lucratividade do seu negócio.
                </p>
                <ul className="space-y-4 text-brand-white/70">
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="text-brand-gold flex-shrink-0" size={24} />
                    <span>Reestruturação organizacional completa</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="text-brand-gold flex-shrink-0" size={24} />
                    <span>Planejamento estratégico de longo prazo</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="text-brand-gold flex-shrink-0" size={24} />
                    <span>Gestão de crises e recuperação</span>
                  </li>
                </ul>
                <a
                  href="/servicos"
                  className="brand-button-outline inline-flex items-center space-x-3"
                >
                  <span>Saiba Mais</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
            
            <div className="card-premium overflow-hidden group">
              <div className="relative h-72 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Consultoria Jurídica"
                  className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent rounded-3xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-brand-gold text-brand-black px-4 py-2 rounded-full text-sm font-bold">
                    Consultoria Jurídica
                  </span>
                </div>
              </div>
              
              <div className="space-y-8">
                <h3 className="text-3xl font-playfair font-bold text-brand-gold">
                  Proteção Jurídica Estratégica
                </h3>
                <p className="text-brand-white/80 leading-relaxed text-lg">
                  Direito empresarial, societário, contencioso estratégico e assessoria 
                  jurídica especializada para proteger e impulsionar seus negócios.
                </p>
                <ul className="space-y-4 text-brand-white/70">
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="text-brand-gold flex-shrink-0" size={24} />
                    <span>Direito empresarial e societário</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="text-brand-gold flex-shrink-0" size={24} />
                    <span>Contencioso estratégico</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="text-brand-gold flex-shrink-0" size={24} />
                    <span>Recuperação de créditos</span>
                  </li>
                </ul>
                <a
                  href="/servicos"
                  className="brand-button-outline inline-flex items-center space-x-3"
                >
                  <span>Saiba Mais</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="section-spacing bg-brand-black fade-on-scroll">
        <div className="container-custom">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-10">
              Como Funciona o Modelo Baseado em Êxito?
            </h2>
            <p className="text-xl text-brand-white/80 max-w-4xl mx-auto leading-relaxed">
              Um processo transparente e estruturado para garantir os melhores resultados
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                {
                  step: '01',
                  title: 'Análise Estratégica',
                  description: 'Mergulhamos fundo no seu caso para definir as metas e o caminho para a vitória. Análise completa sem custo para você.',
                  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                },
                {
                  step: '02',
                  title: 'Execução Focada',
                  description: 'Implementamos o plano com agilidade e mantemos você informado em cada etapa. Transparência total durante todo o processo.',
                  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                },
                {
                  step: '03',
                  title: 'Resultado e Êxito',
                  description: 'Alcançamos o objetivo definido e celebramos juntos. É aqui que nossa parceria é remunerada pelo sucesso obtido.',
                  image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative card-premium overflow-hidden group"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="relative h-56 mb-8">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent rounded-3xl" />
                    <div className="absolute top-6 right-6 text-6xl font-playfair font-bold text-brand-gold/40">
                      {item.step}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-playfair font-semibold text-brand-gold">
                      {item.title}
                    </h3>
                    <p className="text-brand-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSlider />

      <BlogSection />

      {/* CTA Final */}
      <section className="section-spacing bg-gradient-to-br from-brand-gray to-brand-black fade-on-scroll">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-10">
              Pronto para Resolver Desafios Complexos com um{' '}
              <span className="text-gradient">Parceiro de Verdade</span>?
            </h2>
            <p className="text-xl text-brand-white/80 leading-relaxed">
              Não deixe seus problemas empresariais e jurídicos sem solução. 
              Agende sua análise estratégica gratuita e descubra como podemos ajudar.
            </p>
            
            <div className="glass-card rounded-3xl mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-brand-gold mb-3">100%</div>
                  <div className="text-brand-white/70">Focado em Resultados</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-gold mb-3">24h</div>
                  <div className="text-brand-white/70">Resposta Garantida</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-gold mb-3">0</div>
                  <div className="text-brand-white/70">Custo Inicial</div>
                </div>
              </div>
            </div>
            
            <a
              href="/contato"
              className="brand-button text-2xl px-16 py-8 inline-block shadow-premium"
            >
              Agendar Análise Estratégica GRATUITA
            </a>
            <p className="text-brand-white/60 mt-8 text-lg">
              🔒 Atendimento confidencial • 📞 Sem compromisso • ⏰ Vagas limitadas
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
