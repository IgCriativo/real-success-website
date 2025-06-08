
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-gray">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div>
              <div className="text-2xl font-playfair font-bold text-brand-gold">
                REAL
              </div>
              <div className="text-sm font-montserrat text-brand-white -mt-1">
                Consultoria Empresarial & Jurídica
              </div>
            </div>
            <p className="text-brand-white/80 text-sm leading-relaxed">
              Soluções empresariais e jurídicas de alto nível com modelo único baseado em êxito. 
              Compromisso, transparência e resultados garantidos para seus desafios mais complexos.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold text-brand-gold">
              Links Rápidos
            </h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-brand-white/80 hover:text-brand-gold transition-colors duration-300"
              >
                Home
              </Link>
              <Link 
                to="/sobre" 
                className="block text-brand-white/80 hover:text-brand-gold transition-colors duration-300"
              >
                Sobre Nós
              </Link>
              <Link 
                to="/servicos" 
                className="block text-brand-white/80 hover:text-brand-gold transition-colors duration-300"
              >
                Serviços
              </Link>
              <Link 
                to="/cases" 
                className="block text-brand-white/80 hover:text-brand-gold transition-colors duration-300"
              >
                Cases de Sucesso
              </Link>
              <Link 
                to="/contato" 
                className="block text-brand-white/80 hover:text-brand-gold transition-colors duration-300"
              >
                Contato
              </Link>
            </div>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold text-brand-gold">
              Contato
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-brand-white/80">
                Rua São Benedito, 569 - Sala 01<br />
                Centro - Caraguatatuba/SP<br />
                CEP 11660-100
              </p>
              <div className="space-y-1">
                <p className="text-brand-white/80">
                  <span className="text-brand-gold">Pedro Paulo:</span>{' '}
                  <a 
                    href="tel:+5511974517180" 
                    className="hover:text-brand-gold transition-colors duration-300"
                  >
                    (11) 97451-7180
                  </a>
                </p>
                <p className="text-brand-white/80">
                  <span className="text-brand-gold">João Pedro:</span>{' '}
                  <a 
                    href="tel:+5512996351708" 
                    className="hover:text-brand-gold transition-colors duration-300"
                  >
                    (12) 99635-1708
                  </a>
                </p>
                <p className="text-brand-white/80">
                  <span className="text-brand-gold">E-mail:</span>{' '}
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
        </div>

        {/* Linha Inferior */}
        <div className="border-t border-brand-white/20 mt-8 pt-8 text-center">
          <p className="text-brand-white/60 text-sm">
            © {currentYear} REAL Consultoria Empresarial & Jurídica. Todos os direitos reservados.
          </p>
          <p className="text-brand-white/60 text-xs mt-1">
            CNPJ: XX.XXX.XXX/XXXX-XX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
