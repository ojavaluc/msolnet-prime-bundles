
import { Check, Tv, Clock, Heart, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const advantages = [
  {
    title: "Tudo em Um Só Lugar",
    description: "Gerencie todas as suas assinaturas através de uma única plataforma e pagamento simplificado.",
    icon: <Tv size={24} className="text-primary" />
  },
  {
    title: "Suporte Especializado",
    description: "Conte com uma equipe de especialistas para ajudar com qualquer dúvida ou problema técnico.",
    icon: <Shield size={24} className="text-primary" />
  },
  {
    title: "Economia Real",
    description: "Combos promocionais e descontos exclusivos ao contratar mais de um serviço pela MSOL.",
    icon: <Heart size={24} className="text-primary" />
  },
  {
    title: "Acesso Simplificado",
    description: "Acesse todos os serviços através de uma única conta, sem complicações.",
    icon: <Clock size={24} className="text-primary" />
  },
  {
    title: "Qualidade Garantida",
    description: "Transmissão em alta definição e conexão estável para todos os serviços.",
    icon: <Check size={24} className="text-primary" />
  },
  {
    title: "Velocidade Premium",
    description: "Conexão otimizada para streaming sem interrupções ou buffer.",
    icon: <Zap size={24} className="text-primary" />
  }
];

const AdvantagesSection = () => {
  return (
    <section id="vantagens" className="py-20 relative bg-gradient-to-b from-background to-background/90">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,transparent_70%)] from-blue-900/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Escolher a MSOL?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferecemos mais que acesso a plataformas de streaming. Conheça as vantagens de ter a MSOL como sua provedora.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-card/60 backdrop-blur-sm border border-gray-800 hover:border-gray-700 hover:shadow-md hover:shadow-primary/5 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-full bg-primary/10">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{advantage.title}</h3>
                    <p className="text-gray-400 text-sm">{advantage.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
