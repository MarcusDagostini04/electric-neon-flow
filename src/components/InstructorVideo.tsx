import { NeonButton } from "./ui/neon-button"
import { Play } from "lucide-react"

const InstructorVideo = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-3xl lg:text-5xl mb-6">
            <span className="neon-text">Veja como</span> o neon virou fonte de renda
          </h2>
          <p className="text-xl text-foreground/70 mb-12">
            Depoimento do instrutor e casos reais de sucesso dos nossos alunos
          </p>

          {/* Video Player Placeholder */}
          <div className="relative mb-8 animate-fade-in-up">
            <div className="aspect-video bg-gradient-dark rounded-xl overflow-hidden border-2 border-neon-primary/30 shadow-neon relative group cursor-pointer">
              {/* Video thumbnail/placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-primary/20 to-neon-secondary/20 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-neon rounded-full flex items-center justify-center shadow-neon-strong group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-12 h-12 text-primary-foreground ml-1" />
                </div>
              </div>
              
              {/* Video overlay info */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
                <p className="text-white text-sm font-medium">▶ Como transformei conhecimento em renda</p>
                <p className="text-white/70 text-xs">5:30 min</p>
              </div>
            </div>

            {/* Glow effect around video */}
            <div className="absolute inset-0 bg-gradient-neon rounded-xl opacity-20 blur-xl -z-10"></div>
          </div>

          <p className="text-foreground/60 mb-8 font-inter">
            "Veja como nossos alunos transformaram o aprendizado em uma fonte de renda real e consistente"
          </p>

          <NeonButton 
            variant="neon" 
            size="xl"
            onClick={() => window.open('https://hotmart.com/pt-br/marketplace/produtos/neon-para-eletricistas/G98352360L', '_blank', 'noopener')}
            className="animate-pulse-neon"
          >
            Garantir minha vaga
          </NeonButton>
        </div>
      </div>
    </section>
  )
}

export default InstructorVideo