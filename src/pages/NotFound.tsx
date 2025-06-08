
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-brand-black">
      <Header />
      
      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className="text-center">
          <h1 className="text-8xl font-playfair font-bold mb-4 text-brand-gold">404</h1>
          <h2 className="text-2xl md:text-4xl font-playfair font-semibold mb-6 text-brand-white">
            Página não encontrada
          </h2>
          <p className="text-xl text-brand-white/80 mb-8 max-w-lg mx-auto">
            A página que você está procurando não existe ou foi movida. 
            Retorne à página inicial para continuar navegando.
          </p>
          <Link
            to="/"
            className="brand-button text-lg px-8 py-4 inline-block"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
