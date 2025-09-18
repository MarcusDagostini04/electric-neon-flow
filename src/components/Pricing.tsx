import { NeonButton } from "./ui/neon-button"
import { Shield, Check, Clock } from "lucide-react"
import { useState } from "react"

const Pricing = () => {
  const [currentPrice] = useState(497)
  const [installments] = useState(12)
  const installmentValue = Math.ceil(currentPrice / installments)

  const included = [
    "8 módulos completos de neon",
    "Acesso vitalício ao conteúdo", 
    "Suporte dedicado do instrutor",
    "Certificado de conclusão",
    "Modelos e templates prontos",
    "Checklist de instalação",
    "Contrato modelo",
    "Lista de fornecedores",
    "Grupo exclusivo de alunos",
    "Atualizações gratuitas"
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-card relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-5xl mb-6">
            <span className="neon-text">Oferta de</span> Lançamento
          </h2>
          <div className="flex items-center justify-center gap-2 bg-neon-primary/10 rounded-full px-6 py-3 inline-flex mb-4">
            <Clock className="w-5 h-5 text-neon-primary animate-pulse" />
            <span className="text-neon-primary font-semibold">Bônus liberados apenas nesta turma</span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Pricing Card */}
          <div className="relative group">
            {/* Neon ring effect */}
            <div className="absolute -inset-4 bg-gradient-neon rounded-2xl opacity-20 blur-xl animate-pulse-neon"></div>
            
            <div className="relative bg-gradient-card rounded-2xl p-8 border-2 border-neon-primary shadow-neon-strong">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="font-montserrat font-bold text-2xl neon-text mb-2">
                  NEON PARA ELETRICISTAS
                </h3>
                <p className="text-foreground/70">Do zero ao avançado</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-4xl lg:text-5xl font-montserrat font-bold neon-text">
                    R$ {currentPrice}
                  </span>
                  <div className="text-right">
                    <p className="text-sm text-foreground/60">ou</p>
                    <p className="text-xl font-bold text-foreground">
                      {installments}x R$ {installmentValue}
                    </p>
                  </div>
                </div>

                {/* Guarantee */}
                <div className="flex items-center justify-center gap-2 bg-neon-primary/10 rounded-lg px-4 py-2 inline-flex">
                  <Shield className="w-5 h-5 text-neon-primary" />
                  <span className="text-neon-primary font-semibold">Garantia de 7 dias</span>
                </div>
              </div>

              {/* What's included */}
              <div className="mb-8">
                <h4 className="font-montserrat font-bold text-lg mb-4 text-center">
                  ✨ Tudo que está incluso:
                </h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <NeonButton 
                variant="neon" 
                size="xl"
                onClick={() => window.open('https://hotmart.com/pt-br/marketplace/produtos/neon-para-eletricistas/G98352360L', '_blank', 'noopener')}
                className="w-full animate-pulse-neon text-lg"
              >
                🚀 Garantir minha vaga
              </NeonButton>

              <p className="text-center text-xs text-foreground/60 mt-4">
                Pagamento 100% seguro • Acesso imediato • Suporte incluso
              </p>
            </div>
          </div>

          {/* Payment info */}
          <div className="mt-8 text-center">
            <p className="text-foreground/70 text-sm">
              Processamento seguro via <strong>Hotmart</strong> • Aceita todos os cartões
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing