import { NeonButton } from "./ui/neon-button";
import { Shield, Play, CreditCard } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Small text above title */}
          <div className="animate-fade-in-up mb-4">
            <span className="text-neon-primary font-inter text-sm md:text-base">
              Curso completo para iniciantes e avançados ⚡
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-montserrat font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mb-12 animate-fade-in-up">
            <span className="text-foreground">
              Aprenda a instalar, reparar e vender luminosos de neon e transforme isso em uma{" "}
            </span>
            <span className="neon-text">fonte de renda real!</span>
          </h1>

          {/* Video Player with Neon Border */}
          <div className="relative mb-8 animate-slide-in-right">
            <div className="relative max-w-4xl mx-auto">
              {/* Neon glow effect */}
              <div className="absolute inset-0 bg-gradient-neon rounded-lg opacity-20 blur-xl"></div>
              
              {/* Video container */}
              <div className="relative rounded-lg overflow-hidden border-4 border-neon-primary shadow-neon-strong bg-black/50">
                <div className="aspect-video flex items-center justify-center">
                  {!showVideo ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="group relative">
                          {/* Play button */}
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white bg-black/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-neon">
                            <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white ml-1" />
                          </div>
                          <div className="absolute inset-0 rounded-full bg-neon-primary/20 blur-xl group-hover:bg-neon-primary/40 transition-all duration-300"></div>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-montserrat">Prepare-se para transformar sua carreira!</DialogTitle>
                          <DialogDescription className="text-base pt-4">
                            Este vídeo mostra tudo o que você vai aprender no curso para começar a faturar com luminosos de neon. Prepare-se para transformar sua carreira!
                          </DialogDescription>
                        </DialogHeader>
                        <button
                          onClick={() => setShowVideo(true)}
                          className="w-full bg-neon-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:shadow-neon-strong transition-all duration-300"
                        >
                          Assistir agora
                        </button>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <div className="w-full h-full">
                      {/* Placeholder for video - replace with actual video URL */}
                      <video
                        controls
                        autoPlay
                        className="w-full h-full"
                        poster="/placeholder-video.jpg"
                      >
                        <source src="/video-placeholder.mp4" type="video/mp4" />
                        Seu navegador não suporta vídeos HTML5.
                      </video>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Offer Text */}
          <div className="mb-8 animate-fade-in-up">
            <p className="text-xl md:text-2xl font-inter mb-2">
              🔥 <span className="text-foreground">Oferta por tempo limitado!</span>
            </p>
            <p className="text-lg md:text-xl font-inter">
              <span className="text-muted-foreground line-through mr-3">De R$ 1.872,00</span>
              <span className="text-[#FF3333] font-bold text-2xl md:text-3xl">
                por apenas R$ 297,00 💥
              </span>
            </p>
          </div>

          {/* Red Pulsing CTA Button */}
          <div className="mb-6 animate-bounce-in">
            <button
              onClick={scrollToPricing}
              className="bg-[#FF3333] text-white font-montserrat font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-lg shadow-[0_0_20px_rgba(255,51,51,0.5)] hover:shadow-[0_0_30px_rgba(255,51,51,0.8)] transition-all duration-300 animate-pulse-fast"
            >
              QUERO GARANTIR MINHA VAGA AGORA!
            </button>
          </div>

          {/* Payment Icons */}
          <div className="flex items-center justify-center gap-6 flex-wrap animate-fade-in-up">
            <div className="flex items-center gap-2 text-muted-foreground hover:text-neon-primary transition-colors">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-inter">Hotmart</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-neon-primary transition-colors">
              <CreditCard className="w-5 h-5" />
              <span className="text-sm font-inter">Pix</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-neon-primary transition-colors">
              <CreditCard className="w-5 h-5" />
              <span className="text-sm font-inter">Boleto</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-neon-primary transition-colors">
              <CreditCard className="w-5 h-5" />
              <span className="text-sm font-inter">Cartão</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;