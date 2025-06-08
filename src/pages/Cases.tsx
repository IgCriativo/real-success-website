
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cases = () => {
  const cases = [
    {
      id: 1,
      title: 'Reestruturação Financeira - Indústria Têxtil',
      sector: 'Indústria Têxtil',
      result: 'Redução de 40% nos custos operacionais'
    },
    {
      id: 2,
      title: 'Recuperação de Créditos - Setor de Construção',
      sector: 'Construção Civil',
      result: 'Recuperação de R$ 2,3 milhões em 6 meses'
    },
    {
      id: 3,
      title: 'Resolução de Conflito Societário - Tech Startup',
      sector: 'Tecnologia',
      result: 'Acordo amigável em 90 dias'
    },
    {
      id: 4,
      title: 'Otimização Tributária - Rede de Varejo',
      sector: 'Varejo',
      result: 'Economia de R$ 800 mil anuais'
    },
    {
      id: 5,
      title: 'Governança Corporativa - Empresa Familiar',
      sector: 'Serviços',
      result: 'Estruturação completa e sucessão planejada'
    },
    {
      id: 6,
      title: 'Due Diligence para Aquisição - Setor Alimentício',
      sector: 'Alimentício',
      result: 'Aquisição bem-sucedida com 20% de economia'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-brand-black">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
            Cases de Sucesso
          </h1>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos resultados que alcançamos para nossos clientes através 
            do nosso modelo baseado em êxito. Cada caso representa uma vitória compartilhada.
          </p>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="section-spacing bg-brand-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((case_item) => (
              <div
                key={case_item.id}
                className="bg-brand-black p-6 rounded-lg card-hover cursor-pointer"
                onClick={() => {
                  console.log(`Navegando para case ${case_item.id}`);
                }}
              >
                <div className="mb-4">
                  <span className="bg-brand-gold/20 text-brand-gold text-sm px-3 py-1 rounded-full">
                    {case_item.sector}
                  </span>
                </div>
                
                <h3 className="text-xl font-playfair font-semibold mb-4 text-brand-gold">
                  {case_item.title}
                </h3>
                
                <p className="text-brand-white/80 mb-6 leading-relaxed">
                  {case_item.result}
                </p>
                
                <button className="brand-button-outline w-full">
                  Ver Detalhes
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Individual Template - Exemplo */}
      <section className="section-spacing bg-brand-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8">
                Exemplo de Case Detalhado
              </h2>
              <p className="text-xl text-brand-white/80">
                Estrutura padrão de apresentação dos nossos cases de sucesso
              </p>
            </div>
            
            <div className="bg-brand-gray p-8 rounded-lg">
              <div className="mb-8">
                <span className="bg-brand-gold/20 text-brand-gold text-sm px-3 py-1 rounded-full">
                  Indústria Têxtil
                </span>
              </div>
              
              <h3 className="text-2xl font-playfair font-bold mb-6 text-brand-gold">
                Reestruturação Financeira - Indústria Têxtil
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-playfair font-semibold mb-4 text-brand-gold">
                    O Desafio
                  </h4>
                  <p className="text-brand-white/80 leading-relaxed">
                    [Descrição detalhada do problema enfrentado pelo cliente, contexto do mercado, 
                    principais dificuldades e urgência da situação]
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-playfair font-semibold mb-4 text-brand-gold">
                    A Estratégia REAL
                  </h4>
                  <p className="text-brand-white/80 leading-relaxed">
                    [Detalhamento da abordagem utilizada, metodologias aplicadas, 
                    principais ações tomadas e diferencial da nossa estratégia]
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-playfair font-semibold mb-4 text-brand-gold">
                    Resultados (com métricas)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-gold mb-2">40%</div>
                      <div className="text-brand-white/80">Redução de Custos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-gold mb-2">6</div>
                      <div className="text-brand-white/80">Meses para Conclusão</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-gold mb-2">R$ 1.2M</div>
                      <div className="text-brand-white/80">Economia Anual</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-brand-gray">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8">
            Seu Próximo Case de Sucesso Começa{' '}
            <span className="text-gradient">Aqui</span>
          </h2>
          <p className="text-xl text-brand-white/80 mb-12 max-w-3xl mx-auto">
            Cada case representa uma parceria de sucesso. Agende sua análise estratégica 
            e descubra como podemos criar juntos a próxima história de êxito.
          </p>
          <a
            href="/contato"
            className="brand-button text-lg px-8 py-4 inline-block"
          >
            Quero Meu Case de Sucesso
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cases;
