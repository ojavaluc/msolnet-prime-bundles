
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logos/msol.png"
            alt="MSOL Net"
            className="h-10 md:h-12 mr-2"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <a
            href="#sobre"
            className="text-sm md:text-base text-gray-700 hover:text-gray-900 transition-colors"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            className="text-sm md:text-base text-gray-700 hover:text-gray-900 transition-colors"
          >
            Serviços
          </a>
          <a
            href="#vantagens"
            className="text-sm md:text-base text-gray-700 hover:text-gray-900 transition-colors"
          >
            Vantagens
          </a>
          <a
            href="#contato"
            className="bg-primary py-2 px-4 rounded-md text-white text-sm md:text-base hover:bg-primary/80 transition-colors"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
