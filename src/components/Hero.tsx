import { Shield, CreditCard, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import instrutor from "@/assets/seu-instrutor02.png"
import cardsImg from "@/assets/cards.webp";
const Hero = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showInitialOverlay, setShowInitialOverlay] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative py-10 lg:py-32 overflow-hidden">
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
                {!showVideo ? null : (
                  <div className="relative w-full h-full">
                    <video
                      ref={videoRef}
                      controls
                      autoPlay
                      muted={!soundEnabled}
                      playsInline
                      loop
                      preload="metadata"
                      className="w-full h-full"
                      poster={instrutor}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const v = videoRef.current;
                        if (!v) return;
                        // Após interação, retirar overlay inicial
                        setShowInitialOverlay(false);
                        if (v.paused) {
                          v.play().catch(() => {});
                        } else {
                          v.pause();
                        }
                      }}
                      onPause={() => setIsPaused(true)}
                      onPlay={() => setIsPaused(false)}
                      onEnded={() => {
                        // Mantém loop natural sem forçar play, respeitando pausa manual
                      }}
                    >
                      <source src="/video.mp4" type="video/mp4" />
                      Seu navegador não suporta vídeos HTML5.
                    </video>
                    {(isPaused || (!soundEnabled && showInitialOverlay)) && (
                      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <button
                          className="group relative px-8 py-4 rounded-full bg-black/70 backdrop-blur-md text-white border-2 border-white/60 shadow-neon hover:bg-black/80 transition-all duration-300 flex items-center gap-3 text-lg md:text-xl animate-pulse-fast pointer-events-auto"
                          onClick={() => {
                            const v = videoRef.current;
                            if (v) {
                              v.muted = false;
                              v.volume = 1;
                              v.play().catch(() => {});
                            }
                            setSoundEnabled(true);
                            setShowInitialOverlay(false);
                          }}
                        >
                          <VolumeX className="w-6 h-6 text-white/90" />
                          Ativar som
                          <div className="absolute inset-0 rounded-full bg-neon-primary/20 blur-xl group-hover:bg-neon-primary/40 transition-all -z-10"></div>
                        </button>
                      </div>
                    )}
                  </div>
                )}
                {(isPaused || (!soundEnabled && showInitialOverlay)) && (
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 pointer-events-none">
                    <p className="text-white text-sm font-medium">▶ Tudo que vai aprender nesse curso!</p>
                    <p className="text-white/70 text-xs">0:36s</p>
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
          <p className="text-sm md:text-xl font-inter">
            <span className="text-muted-foreground line-through mr-3">De R$ 1.872,00</span>
            <span className="text-[#FF3333] font-bold text-xl md:text-3xl">por apenas R$ 187,00 💥</span>
          </p>
        </div>

        {/* Red Pulsing CTA Button */}
        <div className="mb-6 animate-bounce-in">
          <button onClick={scrollToPricing} className="bg-[#FF3333] text-white font-montserrat font-bold text-sm md:text-md px-8 md:px-12 py-4 md:py-5 rounded-lg transition-all duration-300 animate-pulse-fast">
            EU QUERO APROVEITAR!
          </button>
        </div>

        {/* Payment Icons */}
        <div className="flex items-center justify-center gap-6 flex-wrap animate-fade-in-up">
          <img src={cardsImg} alt="Formas de pagamento" className="h-6 w-auto opacity-90" />
        </div>
      </div>

    </div>
  </section >;
};
export default Hero;