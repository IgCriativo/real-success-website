
import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import BlogSection from '../components/BlogSection';
import TestimonialsSlider from '../components/TestimonialsSlider';
import ElementorCompatibleCarousel from '../components/ElementorCompatibleCarousel';
import AnimatedStats from '../components/AnimatedStats';
import InteractiveTimeline from '../components/InteractiveTimeline';
import { Clock, CheckCircle, Star } from 'lucide-react';

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

      {/* Urgência e Escassez - Redesign Elementor Style */}
      <section className="py-12 bg-gradient-to-r from-red-900/20 to-brand-black border-t border-red-500/30 fade-on-scroll">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <Clock className="text-red-400 animate-pulse" size={32} />
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-red-400">
                    ⚠️ ATENÇÃO: Oferta por Tempo Limitado
                  </h3>
                </div>
                
                <p className="text-xl text-brand-white/90 mb-8 leading-relaxed">
                  Estamos aceitando apenas <span className="text-brand-gold font-bold">5 novos casos por mês</span> 
                  para garantir atendimento exclusivo e resultados excepcionais.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-green-900/30 p-4 rounded-xl border border-green-500/30">
                    <CheckCircle className="text-green-400 mx-auto mb-2" size={24} />
                    <div className="text-green-400 font-semibold">3 vagas restantes</div>
                    <div className="text-green-300/70 text-sm">Dezembro 2024</div>
                  </div>
                  
                  <div className="bg-yellow-900/30 p-4 rounded-xl border border-yellow-500/30">
                    <Clock className="text-yellow-400 mx-auto mb-2" size={24} />
                    <div className="text-yellow-400 font-semibold">Resposta em 24h</div>
                    <div className="text-yellow-300/70 text-sm">Garantida</div>
                  </div>
                  
                  <div className="bg-blue-900/30 p-4 rounded-xl border border-blue-500/30">
                    <Star className="text-blue-400 mx-auto mb-2" size={24} />
                    <div className="text-blue-400 font-semibold">Análise Gratuita</div>
                    <div className="text-blue-300/70 text-sm">Sem compromisso</div>
                  </div>
                </div>
                
                <a
                  href="/contato"
                  className="brand-button text-lg px-10 py-4 inline-block shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  🚀 Reservar Minha Vaga Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Novo Carrossel Compatível com Elementor */}
      <ElementorCompatibleCarousel />

      <AnimatedStats />

      <InteractiveTimeline />

      <TestimonialsSlider />

      <BlogSection />

      {/* CTA Final Redesenhado */}
      <section className="section-spacing bg-gradient-to-br from-brand-gray to-brand-black fade-on-scroll">
        <div className="container-custom text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
              Pronto para Resolver Desafios Complexos com um{' '}
              <span className="text-gradient">Parceiro de Verdade</span>?
            </h2>
            <p className="text-xl text-brand-white/80 mb-12 leading-relaxed">
              Não deixe seus problemas empresariais e jurídicos sem solução. 
              Agende sua análise estratégica gratuita e descubra como podemos ajudar.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-4xl font-bold text-brand-gold mb-2">100%</div>
                <div className="text-brand-white/70">Focado em Resultados</div>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-4xl font-bold text-brand-gold mb-2">24h</div>
                <div className="text-brand-white/70">Resposta Garantida</div>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-4xl font-bold text-brand-gold mb-2">R$ 0</div>
                <div className="text-brand-white/70">Custo Inicial</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contato"
                className="brand-button text-2xl px-12 py-6 shadow-premium transform hover:scale-105 transition-all duration-300"
              >
                🎯 Agendar Análise Estratégica GRATUITA
              </a>
              <a
                href="https://wa.me/5511999999999"
                className="brand-button-outline text-xl px-10 py-6 transform hover:scale-105 transition-all duration-300"
              >
                💬 WhatsApp Direto
              </a>
            </div>
            
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
