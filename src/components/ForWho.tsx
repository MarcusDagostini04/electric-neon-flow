import { NeonButton } from "./ui/neon-button"
import { Zap, User, TrendingUp } from "lucide-react"

const ForWho = () => {
  const profiles = [
    {
      icon: Zap,
      title: "Eletricistas que querem ampliar serviços",
      description: "Agregue valor aos seus serviços com uma especialização lucrativa",
      highlight: "Renda extra garantida"
    },
    {
      icon: User,
      title: "Quem quer começar do zero",
      description: "Mesmo sem experiência, você aprende tudo do básico ao avançado",
      highlight: "100% iniciante friendly"
    },
    {
      icon: TrendingUp,
      title: "Empreendedores que buscam renda extra",
      description: "Transforme conhecimento em um negócio rentável e escalável",
      highlight: "Mercado em crescimento"
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-5xl mb-6">
            Este curso é <span className="neon-text">para você</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Independente do seu nível, temos o caminho certo para o seu sucesso
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {profiles.map((profile, index) => {
            const Icon = profile.icon
            return (
              <div 
                key={index}
                className="group bg-gradient-card rounded-xl p-8 border border-neon-primary/20 hover:border-neon-primary/40 transition-all duration-300 hover:shadow-neon text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-gradient-neon rounded-full flex items-center justify-center mx-auto mb-6 shadow-neon group-hover:shadow-neon-strong transition-all duration-300">
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <div className="bg-neon-primary/10 rounded-lg py-2 px-4 mb-4 inline-block">
                  <span className="text-neon-primary font-semibold text-sm">
                    {profile.highlight}
                  </span>
                </div>

                <h3 className="font-montserrat font-bold text-xl mb-4 text-foreground">
                  {profile.title}
                </h3>

                <p className="text-foreground/70 leading-relaxed">
                  {profile.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <NeonButton 
            variant="neon-outline" 
            size="xl"
            onClick={() => window.open('https://hotmart.com/pt-br/marketplace/produtos/neon-para-eletricistas/G98352360L', '_blank', 'noopener')}
          >
            Começar hoje
          </NeonButton>
        </div>
      </div>
    </section>
  )
}

export default ForWho