import { NeonButton } from "./ui/neon-button"
import { CreditCard, Play, Rocket } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: CreditCard,
      title: "Matricule-se e receba acesso imediato",
      description: "Pagamento seguro e acesso liberado na hora"
    },
    {
      number: "02", 
      icon: Play,
      title: "Assista às aulas no seu ritmo",
      description: "Do celular ou PC, onde e quando quiser"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Aplique e comece a vender serviços",
      description: "Transforme conhecimento em renda real"
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-5xl mb-6">
            <span className="neon-text">Como</span> funciona
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Processo simples em 3 passos para você começar a lucrar
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-px bg-gradient-to-r from-neon-primary/50 via-neon-primary to-neon-primary/50 transform -translate-y-1/2 z-0"></div>

            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div 
                  key={index}
                  className="relative z-10 text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Step number */}
                  <div className="w-20 h-20 bg-gradient-neon rounded-full flex items-center justify-center mx-auto mb-6 shadow-neon-strong relative">
                    <span className="font-montserrat font-bold text-2xl text-primary-foreground">
                      {step.number}
                    </span>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-neon rounded-full opacity-50 blur-xl"></div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-card/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-neon-primary/20">
                    <Icon className="w-8 h-8 text-neon-primary" />
                  </div>

                  <h3 className="font-montserrat font-bold text-xl mb-4 text-foreground">
                    {step.title}
                  </h3>

                  <p className="text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <NeonButton 
            variant="neon-outline" 
            size="xl"
            onClick={() => window.open('https://hotmart.com/pt-br/marketplace/produtos/neon-para-eletricistas/G98352360L', '_blank', 'noopener')}
          >
            Comprar com desconto
          </NeonButton>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks