import { NeonButton } from "./ui/neon-button"

const FloatingCTA = () => {
  return (
    <div className="floating-cta">
      <NeonButton 
        variant="neon" 
        size="lg"
        onClick={() => window.open('https://hotmart.com/pt-br/marketplace/produtos/neon-para-eletricistas/G98352360L', '_blank', 'noopener')}
        className="animate-pulse-neon shadow-neon-strong"
      >
        Garantir minha vaga
      </NeonButton>
    </div>
  )
}

export default FloatingCTA