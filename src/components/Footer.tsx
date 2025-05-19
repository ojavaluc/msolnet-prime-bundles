
const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src="/logos/msol.png" alt="MSOL Net" className="h-8" />
          </div>
          
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MSOL Net. Todos os direitos reservados.
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-4">
              <a href="#servicos" className="text-gray-400 hover:text-white text-sm">
                Serviços
              </a>
              <a href="#vantagens" className="text-gray-400 hover:text-white text-sm">
                Vantagens
              </a>
              <a href="#contato" className="text-gray-400 hover:text-white text-sm">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
