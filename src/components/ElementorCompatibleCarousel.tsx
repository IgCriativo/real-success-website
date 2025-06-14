
import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Users, Award, Target, Zap, Shield, TrendingUp } from 'lucide-react';

const ElementorCompatibleCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 1,
      category: "Consultoria Jurídica",
      title: "Assessoria Jurídica Empresarial",
      description: "Consultoria especializada em direito empresarial, societário e contencioso estratégico para proteger seus negócios.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "A partir de R$ 2.500",
      rating: 5.0,
      clients: 120,
      features: ["Blindagem jurídica total", "Prevenção de litígios", "Recuperação de créditos", "Contratos seguros"],
      icon: <Shield className="text-brand-gold" size={40} />
    },
    {
      id: 2,
      category: "Reestruturação",
      title: "Transformação Organizacional",
      description: "Reorganização completa de processos, estruturas e hierarquias para maximizar eficiência e reduzir custos operacionais.",
      image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "A partir de R$ 5.000",
      rating: 4.9,
      clients: 85,
      features: ["Redução de 30-50% nos custos", "Aumento da produtividade", "Otimização de processos", "ROI garantido"],
      icon: <TrendingUp className="text-brand-gold" size={40} />
    },
    {
      id: 3,
      category: "Planejamento",
      title: "Estratégia de Crescimento",
      description: "Desenvolvimento de estratégias de longo prazo, definição de metas e criação de roadmaps para crescimento sustentável.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "A partir de R$ 3.500",
      rating: 4.8,
      clients: 200,
      features: ["Crescimento sustentável", "Metas claras e alcançáveis", "ROI comprovado", "Acompanhamento mensal"],
      icon: <Target className="text-brand-gold" size={40} />
    },
    {
      id: 4,
      category: "Gestão de Crises",
      title: "Recuperação Empresarial",
      description: "Intervenção especializada para navegar por momentos críticos e transformar crises em oportunidades de renovação.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Sob consulta",
      rating: 5.0,
      clients: 45,
      features: ["Recuperação rápida", "Estabilização financeira", "Transformação positiva", "Suporte 24/7"],
      icon: <Zap className="text-brand-gold" size={40} />
    }
  ];

  const solutions = [
    {
      title: "Resultados Garantidos",
      description: "Modelo único baseado em êxito - você só paga quando alcançamos os resultados acordados.",
      stats: "98% taxa de sucesso",
      icon: <Award className="text-brand-gold" size={48} />
    },
    {
      title: "Crescimento Exponencial", 
      description: "Estratégias comprovadas que geram crescimento sustentável e lucratividade a longo prazo.",
      stats: "300% crescimento médio",
      icon: <TrendingUp className="text-brand-gold" size={48} />
    },
    {
      title: "Proteção Total",
      description: "Blindagem jurídica completa para proteger seu patrimônio e garantir operações seguras.",
      stats: "100% proteção legal",
      icon: <Shield className="text-brand-gold" size={48} />
    }
  ];

  return (
    <div className="w-full space-y-16">
      {/* Services Carousel */}
      <section className="py-16 bg-gradient-to-br from-brand-black to-brand-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-brand-gold text-brand-black">Nossos Serviços</Badge>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-gold mb-6">
              Soluções Completas para seu Negócio
            </h2>
            <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
              Transforme seus desafios em oportunidades com nossas soluções especializadas
            </p>
          </div>

          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {services.map((service) => (
                <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <Card className="group overflow-hidden border-brand-gold/20 bg-gradient-to-br from-brand-gray/80 to-brand-black/90 backdrop-blur-md hover:shadow-2xl transition-all duration-500">
                      <div className="relative">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-brand-gold text-brand-black">{service.category}</Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          {service.icon}
                        </div>
                      </div>
                      
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill="currentColor" />
                              ))}
                            </div>
                            <span className="text-brand-white/70 text-sm">({service.rating})</span>
                          </div>
                          <div className="flex items-center text-brand-white/70 text-sm">
                            <Users size={16} className="mr-1" />
                            {service.clients}+ clientes
                          </div>
                        </div>

                        <h3 className="text-xl font-playfair font-bold text-brand-gold">
                          {service.title}
                        </h3>
                        
                        <p className="text-brand-white/80 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="text-brand-gold flex-shrink-0" size={16} />
                              <span className="text-brand-white/70 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-brand-gold/20">
                          <div className="text-brand-gold font-semibold">
                            {service.price}
                          </div>
                          <Button className="bg-brand-gold text-brand-black hover:bg-brand-gold-light">
                            Saiba Mais
                            <ArrowRight size={16} className="ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-brand-gold/20 border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-brand-black" />
            <CarouselNext className="bg-brand-gold/20 border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-brand-black" />
          </Carousel>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-black mb-6">
              Por que Escolher a REAL Consultoria?
            </h2>
            <p className="text-xl text-brand-black/80 max-w-3xl mx-auto">
              Diferenciais que fazem toda a diferença nos seus resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-white/20 backdrop-blur-sm border-brand-black/20 hover:bg-white/30 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center transform transition-transform duration-300 group-hover:scale-110">
                    {solution.icon}
                  </div>
                  
                  <h3 className="text-2xl font-playfair font-bold text-brand-black mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-brand-black/80 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  
                  <Badge className="bg-brand-black/20 text-brand-black">
                    {solution.stats}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElementorCompatibleCarousel;
