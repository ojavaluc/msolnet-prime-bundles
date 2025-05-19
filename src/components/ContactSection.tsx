
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [whatsappLink, setWhatsappLink] = useState("https://wa.me/5500000000000");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const { toast } = useToast();

  const handleUpdateWhatsApp = () => {
    if (!whatsappNumber.trim()) {
      toast({
        title: "Número não informado",
        description: "Por favor, insira um número válido de WhatsApp.",
        variant: "destructive",
      });
      return;
    }
    
    // Remove non-numeric characters
    const cleanNumber = whatsappNumber.replace(/\D/g, '');
    
    if (cleanNumber.length < 10) {
      toast({
        title: "Número inválido",
        description: "Por favor, insira um número válido com DDD.",
        variant: "destructive",
      });
      return;
    }
    
    setWhatsappLink(`https://wa.me/55${cleanNumber}`);
    setIsEditing(false);
    toast({
      title: "Número salvo com sucesso!",
      description: "O link do WhatsApp foi atualizado.",
    });
  };

  return (
    <section id="contato" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,transparent_70%)] from-primary/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-card/80 backdrop-blur-md p-8 rounded-lg border border-gray-800">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Adquira Agora</h2>
            <p className="text-gray-400">
              Comece a desfrutar do melhor entretenimento hoje mesmo. Entre em contato via WhatsApp para mais informações ou para assinar.
            </p>
          </div>
          
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-400 mb-1">
                  Seu número de WhatsApp (com DDD)
                </label>
                <div className="flex">
                  <div className="bg-secondary/50 px-3 flex items-center rounded-l-md border border-gray-800 border-r-0">
                    +55
                  </div>
                  <input
                    type="text"
                    id="whatsapp"
                    placeholder="DDD + número"
                    className="flex-1 rounded-r-md bg-secondary/20 border border-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-primary"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                  />
                </div>
              </div>
              <Button 
                onClick={handleUpdateWhatsApp} 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Salvar Número do WhatsApp
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-lg text-gray-300 mb-2">Clique no botão abaixo para falar conosco:</p>
              </div>
              
              <div className="flex flex-col space-y-4">
                <a 
                  href={whatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md transition-colors"
                >
                  <MessageCircle size={20} />
                  <span className="font-medium">Conversar no WhatsApp</span>
                </a>
                
                <button 
                  onClick={() => setIsEditing(true)} 
                  className="text-gray-400 hover:text-white text-sm underline"
                >
                  Alterar número de WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
