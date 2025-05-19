
import { Award, HeartHandshake, Clock, Shield } from "lucide-react";

const ProviderSection = () => {
  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/10 via-blue-800/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre a <span className="text-gradient">MSOL</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Há mais de 20 anos conectando pessoas e entregando o melhor em entretenimento digital
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-soft"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }}></div>
            
            <div className="relative z-10 bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 shadow-xl animate-scale-in opacity-0" style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}>
              <h3 className="text-2xl font-bold mb-6 text-gradient">Nossa História</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Com mais de <span className="text-primary font-semibold">20 anos de experiência</span> no mercado, 
                a MSOL se destaca como uma provedora que prioriza a excelência no atendimento 
                ao cliente e a qualidade dos serviços prestados.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Nossa equipe de profissionais altamente capacitados está sempre pronta para 
                oferecer suporte técnico especializado, garantindo uma experiência superior 
                para todos os nossos clientes.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Award className="text-primary" />,
                title: "Excelência",
                description: "Comprometimento com a qualidade em todos os aspectos do serviço"
              },
              {
                icon: <HeartHandshake className="text-blue-500" />,
                title: "Atendimento",
                description: "Suporte técnico especializado e atendimento humanizado"
              },
              {
                icon: <Clock className="text-primary" />,
                title: "Experiência",
                description: "Mais de 20 anos atuando no mercado de telecomunicações"
              },
              {
                icon: <Shield className="text-blue-500" />,
                title: "Confiança",
                description: "Segurança e confiabilidade em todos os serviços prestados"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-gray-700/70 transition-all hover:shadow-lg animate-fade-in opacity-0" 
                style={{ animationDelay: `${0.6 + index * 0.2}s`, animationFillMode: "forwards" }}
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProviderSection;
