
import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import BlogSection from '../components/BlogSection';
import TestimonialsSlider from '../components/TestimonialsSlider';
import { Target, Users, Award, TrendingUp, ArrowRight, Clock, CheckCircle } from 'lucide-react';

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

      {/* Urgência e Escassez */}
      <section className="py-16 bg-gradient-to-r from-red-900/20 to-brand-black border-t border-red-500/30">
        <div className="container-custom">
          <div className="glass-card p-8 rounded-3xl text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Clock className="text-red-400 animate-pulse" size={32} />
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-red-400">
                ⚠️ ATENÇÃO: Oferta por Tempo Limitado
              </h3>
            </div>
            <p className="text-xl text-brand-white/90 mb-6">
              Estamos aceitando apenas <span className="text-brand-gold font-bold">5 novos casos por mês</span> 
              para garantir atendimento exclusivo e resultados excepcionais.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-green-900/30 px-4 py-2 rounded-full">
                <CheckCircle className="text-green-400" size={16} />
                <span className="text-green-400">3 vagas restantes em Dezembro</span>
              </div>
              <div className="flex items-center space-x-2 bg-yellow-900/30 px-4 py-2 rounded-full">
                <Clock className="text-yellow-400" size={16} />
                <span className="text-yellow-400">Resposta em 24h garantida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-spacing bg-brand-black fade-on-scroll">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
              A Parceria que Sua Empresa Realmente Precisa
            </h2>
            <p className="text-xl text-brand-white/80 max-w-4xl mx-auto leading-relaxed">
              Descubra por que empresários escolhem nosso modelo único de consultoria
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="text-brand-gold" size={48} />,
                title: 'Modelo de Êxito Garantido',
                description: 'Você só paga pelo resultado alcançado. Seu sucesso é literalmente o nosso sucesso.',
                highlight: 'Risco Zero'
              },
              {
                icon: <Users className="text-brand-gold" size={48} />,
                title: 'Compromisso Total',
                description: 'Envolvimento direto dos sócios no seu caso para garantir agilidade e decisões assertivas.',
                highlight: 'Sócios Envolvidos'
              },
              {
                icon: <Award className="text-brand-gold" size={48} />,
                title: 'Transparência Absoluta',
                description: 'Comunicação clara e honesta do início ao fim do processo. Sem surpresas ou custos ocultos.',
                highlight: '100% Transparente'
              },
              {
                icon: <TrendingUp className="text-brand-gold" size={48} />,
                title: 'Soluções Sob Medida',
                description: 'Não usamos fórmulas prontas. Mergulhamos no seu desafio para construir a estratégia vencedora.',
                highlight: 'Estratégia Única'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center card-premium p-8 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="bg-brand-gold/20 text-brand-gold text-xs px-3 py-1 rounded-full mb-4 inline-block">
                  {item.highlight}
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-4 text-brand-gold group-hover:text-brand-gold-light transition-colors duration-300">
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
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
              Nossa Expertise ao seu Dispor
            </h2>
            <p className="text-xl text-brand-white/80 max-w-4xl mx-auto leading-relaxed">
              Soluções completas para seus desafios empresariais e jurídicos mais complexos
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="card-premium overflow-hidden group">
              <div className="relative h-64 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Consultoria Empresarial"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent rounded-2xl" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-brand-gold text-brand-black px-3 py-1 rounded-full text-sm font-bold">
                    Consultoria Empresarial
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-playfair font-bold mb-6 text-brand-gold">
                  Transformação Empresarial
                </h3>
                <p className="text-brand-white/80 mb-8 leading-relaxed text-lg">
                  Reestruturação organizacional, planejamento estratégico, gestão de crises 
                  e soluções personalizadas para aumentar a eficiência e lucratividade do seu negócio.
                </p>
                <ul className="space-y-3 mb-8 text-brand-white/70">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-brand-gold flex-shrink-0" size={20} />
                    <span>Reestruturação organizacional completa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-brand-gold flex-shrink-0" size={20} />
                    <span>Planejamento estratégico de longo prazo</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-brand-gold flex-shrink-0" size={20} />
                    <span>Gestão de crises e recuperação</span>
                  </li>
                </ul>
                <a
                  href="/servicos"
                  className="brand-button-outline inline-flex items-center space-x-2"
                >
                  <span>Saiba Mais</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
            
            <div className="card-premium overflow-hidden group">
              <div className="relative h-64 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Consultoria Jurídica"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent rounded-2xl" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-brand-gold text-brand-black px-3 py-1 rounded-full text-sm font-bold">
                    Consultoria Jurídica
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-playfair font-bold mb-6 text-brand-gold">
                  Proteção Jurídica Estratégica
                </h3>
                <p className="text-brand-white/80 mb-8 leading-relaxed text-lg">
                  Direito empresarial, societário, contencioso estratégico e assessoria 
                  jurídica especializada para proteger e impulsionar seus negócios.
                </p>
                <ul className="space-y-3 mb-8 text-brand-white/70">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-brand-gold flex-shrink-0" size={20} />
                    <span>Direito empresarial e societário</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-brand-gold flex-shrink-0" size={20} />
                    <span>Contencioso estratégico</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-brand-gold flex-shrink-0" size={20} />
                    <span>Recuperação de créditos</span>
                  </li>
                </ul>
                <a
                  href="/servicos"
                  className="brand-button-outline inline-flex items-center space-x-2"
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
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
              Como Funciona o Modelo Baseado em Êxito?
            </h2>
            <p className="text-xl text-brand-white/80 max-w-4xl mx-auto leading-relaxed">
              Um processo transparente e estruturado para garantir os melhores resultados
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                  <div className="relative h-48 mb-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent rounded-2xl" />
                    <div className="absolute top-4 right-4 text-6xl font-playfair font-bold text-brand-gold/40">
                      {item.step}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-playfair font-semibold mb-4 text-brand-gold">
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
              Pronto para Resolver Desafios Complexos com um{' '}
              <span className="text-gradient">Parceiro de Verdade</span>?
            </h2>
            <p className="text-xl text-brand-white/80 mb-12 leading-relaxed">
              Não deixe seus problemas empresariais e jurídicos sem solução. 
              Agende sua análise estratégica gratuita e descubra como podemos ajudar.
            </p>
            
            <div className="glass-card p-8 rounded-3xl mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-brand-gold mb-2">100%</div>
                  <div className="text-brand-white/70">Focado em Resultados</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-gold mb-2">24h</div>
                  <div className="text-brand-white/70">Resposta Garantida</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-gold mb-2">0</div>
                  <div className="text-brand-white/70">Custo Inicial</div>
                </div>
              </div>
            </div>
            
            <a
              href="/contato"
              className="brand-button text-2xl px-12 py-6 inline-block shadow-premium"
            >
              Agendar Análise Estratégica GRATUITA
            </a>
            <p className="text-brand-white/60 mt-6 text-lg">
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
