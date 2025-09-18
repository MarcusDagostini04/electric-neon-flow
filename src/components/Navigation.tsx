import { useState } from "react";
import { NeonButton } from "./ui/neon-button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };
  return <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-neon-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-neon rounded-full shadow-neon flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">N</span>
            </div>
            
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('modules')} className="text-foreground/70 hover:text-neon-primary transition-colors">
              Conteúdo
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-foreground/70 hover:text-neon-primary transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-foreground/70 hover:text-neon-primary transition-colors">
              Preço
            </button>
            <NeonButton variant="neon" onClick={() => window.open('https://hotmart.com/pt-br/marketplace/produtos/neon-para-eletricistas/G98352360L', '_blank', 'noopener')}>
              Quero entrar agora
            </NeonButton>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-neon-primary">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && <div className="md:hidden mt-4 pb-4 border-t border-neon-primary/20 pt-4">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('modules')} className="text-left text-foreground/70 hover:text-neon-primary transition-colors py-2">
                Conteúdo
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-foreground/70 hover:text-neon-primary transition-colors py-2">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-foreground/70 hover:text-neon-primary transition-colors py-2">
                Preço
              </button>
              <NeonButton variant="neon" size="lg" onClick={() => window.open('https://hotmart.com/pt-br/marketplace/produtos/neon-para-eletricistas/G98352360L', '_blank', 'noopener')} className="w-full">
                Quero entrar agora
              </NeonButton>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;