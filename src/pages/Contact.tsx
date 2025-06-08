
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Retornaremos seu contato em até 24 horas.",
      });

      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato por telefone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-brand-black">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
            Vamos Conversar Sobre Seu Desafio
          </h1>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco e descubra como nossa abordagem única pode 
            resolver os problemas mais complexos da sua empresa.
          </p>
        </div>
      </section>

      {/* Contato Principal */}
      <section className="section-spacing bg-brand-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-playfair font-bold mb-8 text-brand-gold">
                  Informações de Contato
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-playfair font-semibold mb-3 text-brand-gold">
                      Endereço
                    </h3>
                    <p className="text-brand-white/80 leading-relaxed">
                      Rua São Benedito, 569 - Sala 01<br />
                      Centro - Caraguatatuba/SP<br />
                      CEP 11660-100
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-playfair font-semibold mb-3 text-brand-gold">
                      Telefones
                    </h3>
                    <div className="space-y-2">
                      <p className="text-brand-white/80">
                        <span className="text-brand-gold font-semibold">Pedro Paulo:</span>{' '}
                        <a 
                          href="tel:+5511974517180" 
                          className="hover:text-brand-gold transition-colors duration-300"
                        >
                          (11) 97451-7180
                        </a>
                      </p>
                      <p className="text-brand-white/80">
                        <span className="text-brand-gold font-semibold">João Pedro:</span>{' '}
                        <a 
                          href="tel:+5512996351708" 
                          className="hover:text-brand-gold transition-colors duration-300"
                        >
                          (12) 99635-1708
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-playfair font-semibold mb-3 text-brand-gold">
                      E-mail
                    </h3>
                    <p className="text-brand-white/80">
                      <a 
                        href="mailto:realconsultoria.e.j@gmail.com" 
                        className="hover:text-brand-gold transition-colors duration-300"
                      >
                        realconsultoria.e.j@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Mapa */}
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-4 text-brand-gold">
                  Localização
                </h3>
                <div className="w-full h-64 bg-brand-black rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.123456789!2d-45.4123456!3d-23.6234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20S%C3%A3o%20Benedito%2C%20569%20-%20Centro%2C%20Caraguatatuba%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização REAL Consultoria"
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Formulário */}
            <div className="bg-brand-black p-8 rounded-lg">
              <h2 className="text-3xl font-playfair font-bold mb-8 text-brand-gold">
                Envie sua Mensagem
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-brand-gold font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-brand-gray border border-brand-gold/30 rounded-md 
                             text-brand-white placeholder-brand-white/50 focus:border-brand-gold 
                             focus:outline-none transition-colors duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-brand-gold font-semibold mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-brand-gray border border-brand-gold/30 rounded-md 
                             text-brand-white placeholder-brand-white/50 focus:border-brand-gold 
                             focus:outline-none transition-colors duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-brand-gold font-semibold mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-brand-gray border border-brand-gold/30 rounded-md 
                             text-brand-white placeholder-brand-white/50 focus:border-brand-gold 
                             focus:outline-none transition-colors duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-brand-gold font-semibold mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-brand-gray border border-brand-gold/30 rounded-md 
                             text-brand-white placeholder-brand-white/50 focus:border-brand-gold 
                             focus:outline-none transition-colors duration-300 resize-vertical"
                    placeholder="Conte-nos sobre seu desafio e como podemos ajudar..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full brand-button py-4 text-lg ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Alternativo */}
      <section className="section-spacing bg-brand-black">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8">
            Prefere Falar Direto com Nossa Equipe?
          </h2>
          <p className="text-xl text-brand-white/80 mb-12 max-w-3xl mx-auto">
            Entre em contato via WhatsApp para uma conversa mais direta e ágil sobre seus desafios.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/5511974517180?text=Olá%20Pedro%20Paulo!%20Vi%20o%20site%20da%20REAL%20Consultoria%20e%20gostaria%20de%20agendar%20uma%20análise."
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button text-lg px-8 py-4 inline-block"
            >
              WhatsApp Pedro Paulo
            </a>
            <a
              href="https://wa.me/5512996351708?text=Olá%20João%20Pedro!%20Vi%20o%20site%20da%20REAL%20Consultoria%20e%20gostaria%20de%20agendar%20uma%20análise."
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button text-lg px-8 py-4 inline-block"
            >
              WhatsApp João Pedro
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
