import { NeonButton } from "./ui/neon-button"

const TopStrip = () => {
  return (
    <div className="bg-gradient-card border-b border-neon-primary/20 py-3 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-neon-primary rounded-full animate-pulse-neon"></div>
          <span className="text-sm text-foreground/90">
            <span className="text-neon-primary font-semibold">Vagas limitadas</span> • Bônus por tempo limitado
          </span>
        </div>
        <NeonButton 
          variant="neon-outline" 
          size="sm"
          onClick={() => window.open('https://hotmart.com/pt-br/marketplace/produtos/neon-para-eletricistas/G98352360L', '_blank', 'noopener')}
          className="hidden sm:inline-flex"
        >
          Garantir agora
        </NeonButton>
      </div>
    </div>
  )
}

export default TopStrip