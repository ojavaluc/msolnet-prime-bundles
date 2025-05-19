
import ServiceCard from "./ServiceCard";

const services = [
  {
    name: "Premiere",
    logo: "/logos/premiere.png",
    description: "O melhor do futebol brasileiro e internacional.",
    color: "bg-primary-premiere",
    features: [
      "Campeonatos brasileiros das séries A e B",
      "Transmissão de todos os jogos ao vivo",
      "Melhores momentos e análises táticas",
      "Acesso exclusivo a conteúdos especiais"
    ]
  },
  {
    name: "MAX",
    logo: "/logos/max.png",
    description: "Filmes, séries e documentários em um só lugar.",
    color: "bg-primary-max",
    features: [
      "Conteúdo original HBO e Max exclusivos",
      "Filmes de grandes estúdios como Warner",
      "Séries premiadas e aclamadas pela crítica",
      "Documentários e reality shows"
    ]
  },
  {
    name: "Paramount+",
    logo: "/logos/paramount.png",
    description: "Uma montanha de entretenimento.",
    color: "bg-primary-paramount",
    features: [
      "Filmes exclusivos dos estúdios Paramount",
      "Séries originais e conteúdo infantil",
      "Champions League e outras competições esportivas",
      "Shows e documentários exclusivos"
    ]
  },
  {
    name: "MSOL TV",
    logo: "/logos/msoltv.png",
    description: "Sua plataforma favorita de TV por assinatura.",
    color: "bg-primary-msol",
    features: [
      "Mais de 100 canais de TV ao vivo",
      "Guia de programação intuitivo",
      "Gravação de programas na nuvem",
      "Conteúdo sob demanda dos seus canais favoritos"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubra a variedade de plataformas de streaming disponíveis através da MSOL e aproveite o melhor do entretenimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          <div className="text-center p-6">
            <img src="/logos/premiere.png" alt="Premiere" className="h-20 mx-auto mb-4" />
            <p className="font-medium text-primary-premiere">Premiere</p>
          </div>
          <div className="text-center p-6">
            <img src="/logos/max.png" alt="Max" className="h-20 mx-auto mb-4" />
            <p className="font-medium text-primary-max">Max</p>
          </div>
          <div className="text-center p-6">
            <img src="/logos/paramount.png" alt="Paramount+" className="h-20 mx-auto mb-4" />
            <p className="font-medium text-primary-paramount">Paramount+</p>
          </div>
          <div className="text-center p-6">
            <img src="/logos/msoltv.png" alt="MSOL TV" className="h-20 mx-auto mb-4" />
            <p className="font-medium text-primary-msol">MSOL TV</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
