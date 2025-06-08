
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-brand-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-brand-black">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
            Sobre a REAL Consultoria
          </h1>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto leading-relaxed">
            Conheça nossa história, missão e os profissionais que fazem a diferença 
            nos desafios mais complexos do mundo empresarial e jurídico.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="section-spacing bg-brand-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-12 text-center">
              Fundada sobre a Necessidade de Soluções Reais
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-brand-white/80 text-lg leading-relaxed mb-8">
                A REAL Consultoria Empresarial & Jurídica foi fundada em 25 de maio de 2023, 
                nascendo da percepção de que o mercado estava carente de soluções verdadeiramente 
                efetivas para problemas empresariais e jurídicos complexos.
              </p>
              
              <p className="text-brand-white/80 text-lg leading-relaxed mb-8">
                Nossos fundadores, Pedro Paulo e João Pedro, identificaram um padrão preocupante: 
                empresas sendo enganadas por consultorias que prometiam muito e entregavam pouco, 
                cobrando altos valores independentemente dos resultados alcançados.
              </p>
              
              <p className="text-brand-white/80 text-lg leading-relaxed mb-8">
                Foi então que surgiu a proposta revolucionária da REAL: um modelo de negócio 
                baseado 100% no êxito. Se não resolvermos seu problema, não recebemos. 
                Simples assim. Essa abordagem não apenas elimina o risco para nossos clientes, 
                mas também demonstra nossa total confiança na qualidade e efetividade de nossos serviços.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="section-spacing bg-brand-black">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-16 text-center">
            Nossos Princípios
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-playfair font-bold mb-6 text-brand-gold">
                Missão
              </h3>
              <p className="text-brand-white/80 leading-relaxed">
                Resolver problemas empresariais e jurídicos complexos através de soluções 
                inovadoras e estratégicas, com total compromisso com o resultado e 
                transparência em cada etapa do processo.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-playfair font-bold mb-6 text-brand-gold">
                Visão
              </h3>
              <p className="text-brand-white/80 leading-relaxed">
                Ser reconhecida como a consultoria de referência no Brasil para empresas 
                que enfrentam desafios críticos, sendo sinônimo de resultados garantidos 
                e parceria de verdade.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-6">💎</div>
              <h3 className="text-2xl font-playfair font-bold mb-6 text-brand-gold">
                Valores
              </h3>
              <div className="text-brand-white/80 leading-relaxed space-y-2">
                <p><span className="text-brand-gold font-semibold">Honestidade:</span> Comunicação transparente sempre</p>
                <p><span className="text-brand-gold font-semibold">Transparência:</span> Processos claros e abertos</p>
                <p><span className="text-brand-gold font-semibold">Lealdade:</span> Comprometimento total com nossos clientes</p>
                <p><span className="text-brand-gold font-semibold">Compromisso:</span> Resultado acima de tudo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Equipe */}
      <section className="section-spacing bg-brand-gray">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-16 text-center">
            Conheça Nossa Equipe
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-brand-black p-8 rounded-lg text-center card-hover">
              <div className="w-32 h-32 bg-brand-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-playfair font-bold text-brand-gold">PP</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-2 text-brand-gold">
                Pedro Paulo
              </h3>
              <p className="text-brand-gold/80 mb-6">Sócio-Fundador</p>
              <p className="text-brand-white/80 leading-relaxed mb-6">
                [Biografia do Pedro Paulo - especialidades, formação, experiência e 
                principais conquistas na área empresarial e jurídica]
              </p>
              <a 
                href="tel:+5511974517180"
                className="brand-button-outline"
              >
                (11) 97451-7180
              </a>
            </div>
            
            <div className="bg-brand-black p-8 rounded-lg text-center card-hover">
              <div className="w-32 h-32 bg-brand-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-playfair font-bold text-brand-gold">JP</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-2 text-brand-gold">
                João Pedro
              </h3>
              <p className="text-brand-gold/80 mb-6">Sócio-Fundador</p>
              <p className="text-brand-white/80 leading-relaxed mb-6">
                [Biografia do João Pedro - especialidades, formação, experiência e 
                principais conquistas na área empresarial e jurídica]
              </p>
              <a 
                href="tel:+5512996351708"
                className="brand-button-outline"
              >
                (12) 99635-1708
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-brand-black">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8">
            Pronto para Conhecer Nossa Proposta?
          </h2>
          <p className="text-xl text-brand-white/80 mb-12 max-w-3xl mx-auto">
            Agende uma conversa e descubra como nossa abordagem única pode 
            transformar os desafios da sua empresa em oportunidades de sucesso.
          </p>
          <a
            href="/contato"
            className="brand-button text-lg px-8 py-4 inline-block"
          >
            Agendar Conversa
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
