
import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import BlogSection from '../components/BlogSection';
import TestimonialsSlider from '../components/TestimonialsSlider';
import ServicesCarousel from '../components/ServicesCarousel';
import SolutionsShowcase from '../components/SolutionsShowcase';
import AnimatedStats from '../components/AnimatedStats';
import InteractiveTimeline from '../components/InteractiveTimeline';
import { Clock, CheckCircle } from 'lucide-react';

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

      <ServicesCarousel />

      <SolutionsShowcase />

      <AnimatedStats />

      <InteractiveTimeline />

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
