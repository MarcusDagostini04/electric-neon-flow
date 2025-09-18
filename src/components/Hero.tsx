import { NeonButton } from "./ui/neon-button";
import { Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-neon.jpg";
const Hero = () => {
  const scrollToModules = () => {
    const element = document.getElementById('modules');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="font-montserrat font-bold text-4xl lg:text-6xl xl:text-7xl leading-tight mb-6">
              <span className="neon-text">LUCRE COM</span><br />
              <span className="text-foreground">LUMINOSOS</span><br />
              <span className="neon-text">DE NEON</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-foreground/80 mb-8 font-inter">
              Domine instalação, manutenção e vendas mesmo começando do zero.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <NeonButton variant="neon" size="xl" onClick={() => window.open('https://hotmart.com/pt-br/marketplace/produtos/neon-para-eletricistas/G98352360L', '_blank', 'noopener')} className="animate-pulse-neon">
                Quero entrar agora
              </NeonButton>
              <NeonButton variant="neon-outline" size="xl" onClick={scrollToModules}>
                Ver conteúdo do curso
              </NeonButton>
            </div>

            {/* Trust Seals */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg border border-neon-primary/20">
                <Clock className="w-5 h-5 text-neon-primary" />
                <span className="text-sm text-foreground/80">Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg border border-neon-primary/20">
                <Shield className="w-5 h-5 text-neon-primary" />
                <span className="text-sm text-foreground/80">Suporte dedicado</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg border border-neon-primary/20">
                <Award className="w-5 h-5 text-neon-primary" />
                <span className="text-sm text-foreground/80">Certificado</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Neon frame effect */}
              <div className="absolute inset-0 bg-gradient-neon rounded-full opacity-20 blur-xl"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-neon-primary shadow-neon-strong">
                <img src={heroImage} alt="Profissional trabalhando com luminosos de neon" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;