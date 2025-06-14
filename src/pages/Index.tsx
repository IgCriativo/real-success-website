
import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import BlogSection from '../components/BlogSection';
import TestimonialsSlider from '../components/TestimonialsSlider';
import ElementorCompatibleCarousel from '../components/ElementorCompatibleCarousel';
import AnimatedStats from '../components/AnimatedStats';
import InteractiveTimeline from '../components/InteractiveTimeline';
import CompetitiveAdvantages from '../components/CompetitiveAdvantages';
import { Sparkles, CheckCircle, Star, Trophy, Target, Zap } from 'lucide-react';

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
      {/* SEO Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "REAL Consultoria Empresarial & Jurídica",
          "description": "Consultoria empresarial e jurídica especializada em transformar desafios complexos em soluções estratégicas com metodologia única e resultados comprovados.",
          "url": "https://realconsultoria.com.br",
          "logo": "https://realconsultoria.com.br/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/real-consultoria",
            "https://www.instagram.com/realconsultoria"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua São Benedito, 569 - Sala 01",
            "addressLocality": "Caraguatatuba",
            "addressRegion": "SP",
            "postalCode": "11660-100",
            "addressCountry": "BR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-11-97451-7180",
            "contactType": "customer service"
          }
        })}
      </script>

      <Header />
      
      <HeroSection />

      <CompetitiveAdvantages />

      <ElementorCompatibleCarousel />

      <AnimatedStats />

      <InteractiveTimeline />

      <TestimonialsSlider />

      <BlogSection />

      {/* CTA Final Redesenhado com Foco em Diferenciais */}
      <section className="section-spacing bg-gradient-to-br from-brand-gray to-brand-black fade-on-scroll">
        <div className="container-custom text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
              Transforme Seu Negócio com{' '}
              <span className="text-gradient">Estratégias Personalizadas</span>
            </h2>
            <p className="text-xl text-brand-white/90 mb-16 leading-relaxed max-w-4xl mx-auto">
              Nossa metodologia exclusiva combina análise profunda, estratégias personalizadas e execução eficiente 
              para entregar resultados que realmente impactam o crescimento do seu negócio.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="glass-card p-8 rounded-3xl transform hover:scale-105 transition-all duration-500 group">
                <div className="text-5xl font-bold text-brand-gold mb-3 group-hover:animate-pulse">360°</div>
                <div className="text-lg font-semibold text-brand-white mb-2">Visão Completa</div>
                <div className="text-brand-white/70">Análise integral do seu negócio</div>
              </div>
              <div className="glass-card p-8 rounded-3xl transform hover:scale-105 transition-all duration-500 group">
                <div className="text-5xl font-bold text-brand-gold mb-3 group-hover:animate-pulse">1:1</div>
                <div className="text-lg font-semibold text-brand-white mb-2">Atendimento Exclusivo</div>
                <div className="text-brand-white/70">Dedicação personalizada</div>
              </div>
              <div className="glass-card p-8 rounded-3xl transform hover:scale-105 transition-all duration-500 group">
                <div className="text-5xl font-bold text-brand-gold mb-3 group-hover:animate-pulse">24/7</div>
                <div className="text-lg font-semibold text-brand-white mb-2">Suporte Contínuo</div>
                <div className="text-brand-white/70">Acompanhamento integral</div>
              </div>
              <div className="glass-card p-8 rounded-3xl transform hover:scale-105 transition-all duration-500 group">
                <div className="text-5xl font-bold text-brand-gold mb-3 group-hover:animate-pulse">∞</div>
                <div className="text-lg font-semibold text-brand-white mb-2">Potencial Ilimitado</div>
                <div className="text-brand-white/70">Crescimento sem limites</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a
                href="/contato"
                className="brand-button text-2xl px-16 py-8 shadow-premium transform hover:scale-110 transition-all duration-500 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  <CheckCircle className="mr-3 group-hover:animate-spin" size={28} />
                  Iniciar Minha Transformação Agora
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-gold-light to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="https://wa.me/5511974517180"
                className="brand-button-outline text-xl px-12 py-8 transform hover:scale-110 transition-all duration-500 group"
              >
                <span className="flex items-center">
                  💬 Conversar com Especialista
                </span>
              </a>
            </div>
            
            <div className="mt-12 p-8 glass-card rounded-3xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-playfair font-bold text-brand-gold mb-4">
                Garantia de Satisfação Total
              </h3>
              <p className="text-brand-white/80 text-lg leading-relaxed">
                Estamos tão confiantes na nossa metodologia que oferecemos garantia total de satisfação. 
                Se não ficar completamente satisfeito com os resultados, trabalhamos até que você alcance seus objetivos.
              </p>
            </div>
            
            <p className="text-brand-white/60 mt-8 text-lg">
              🔒 Confidencialidade garantida • 📊 Diagnóstico detalhado • ⚡ Implementação rápida
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
