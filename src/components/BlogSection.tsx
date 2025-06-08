
import { Calendar, ArrowRight, User, Eye } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Como Identificar se Sua Empresa Precisa de Reestruturação Urgente',
      excerpt: 'Sinais claros que indicam a necessidade de intervenção estratégica imediata para evitar maiores prejuízos.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '15 Nov 2024',
      author: 'Pedro Paulo',
      views: 1547,
      category: 'Estratégia'
    },
    {
      id: 2,
      title: 'Modelo de Pagamento por Êxito: Por que Funciona Melhor',
      excerpt: 'Descubra por que o modelo baseado em resultados alinha os interesses do cliente e consultor de forma única.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '10 Nov 2024',
      author: 'João Pedro',
      views: 2103,
      category: 'Negócios'
    },
    {
      id: 3,
      title: 'Os 5 Erros Jurídicos Mais Caros que Empresas Cometem',
      excerpt: 'Evite prejuízos milionários conhecendo os erros mais comuns em contratos e estruturação societária.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '05 Nov 2024',
      author: 'Pedro Paulo',
      views: 3256,
      category: 'Jurídico'
    }
  ];

  return (
    <section className="section-spacing bg-brand-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in">
            Insights Estratégicos
          </h2>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto animate-slide-in-left">
            Conhecimento prático e estratégias comprovadas para resolver desafios empresariais complexos
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="card-premium group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-gold text-brand-black px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-brand-white/60 text-sm mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye size={16} />
                    <span>{post.views.toLocaleString()}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-playfair font-semibold mb-3 text-brand-gold group-hover:text-brand-gold-light transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-brand-white/80 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <a
                    href={`/blog/${post.id}`}
                    className="flex items-center space-x-2 text-brand-gold hover:text-brand-gold-light transition-colors duration-300 font-semibold"
                  >
                    <span>Ler Artigo</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  
                  <div className="text-brand-white/40 text-sm">
                    5 min de leitura
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/blog"
            className="brand-button-outline inline-flex items-center space-x-2"
          >
            <span>Ver Todos os Artigos</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
