
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,transparent_70%)] from-primary-msol/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Seu entretenimento em um <span className="text-gradient">único lugar</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Acesse os melhores conteúdos de streaming através da MSOL, sua provedora de serviços digitais.
            </p>
            <div className="pt-4">
              <a 
                href="#contato" 
                className="bg-primary py-3 px-6 rounded-md text-white font-medium text-lg hover:bg-primary/80 transition-all inline-block"
              >
                Quero conhecer
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full h-[300px] md:h-[400px]">
              <img 
                src="/logos/msol.png" 
                alt="MSOL Net" 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 animate-float"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-primary-msol/10 blur-[100px] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#servicos" className="text-gray-400 hover:text-white">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
