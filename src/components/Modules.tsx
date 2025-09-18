import { NeonButton } from "./ui/neon-button"
import { Shield, Wrench, Zap, MapPin, Settings, Calculator, Truck, Camera, Gift } from "lucide-react"

const Modules = () => {
  const modules = [
    {
      number: "M1",
      title: "Fundamentos do neon",
      description: "Segurança, EPI, normas",
      icon: Shield,
      result: "Trabalhe com total segurança"
    },
    {
      number: "M2", 
      title: "Ferramentas e materiais",
      description: "Tudo que você precisa saber",
      icon: Wrench,
      result: "Compre certo e economize"
    },
    {
      number: "M3",
      title: "Montagem, solda e testes",
      description: "Técnicas práticas passo a passo",
      icon: Zap,
      result: "Domine as técnicas profissionais"
    },
    {
      number: "M4",
      title: "Instalação em campo",
      description: "Do projeto à entrega final",
      icon: MapPin,
      result: "Execute instalações perfeitas"
    },
    {
      number: "M5",
      title: "Manutenção e diagnóstico",
      description: "Resolva problemas rapidamente",
      icon: Settings,
      result: "Ofereça serviços de manutenção"
    },
    {
      number: "M6",
      title: "Precificação e vendas",
      description: "Como formar preços e vender",
      icon: Calculator,
      result: "Maximize seus lucros"
    },
    {
      number: "M7",
      title: "Fornecedores e logística",
      description: "Onde comprar e como organizar",
      icon: Truck,
      result: "Tenha fornecedores confiáveis"
    },
    {
      number: "M8",
      title: "Portfólio e marketing",
      description: "Atraia mais clientes localmente",
      icon: Camera,
      result: "Construa uma marca forte"
    }
  ]

  return (
    <section id="modules" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-5xl mb-6">
            O que <span className="neon-text">você vai aprender</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            8 módulos completos + bônus exclusivos para transformar você em um especialista
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {modules.map((module, index) => {
            const Icon = module.icon
            return (
              <div 
                key={index}
                className="group bg-gradient-card rounded-xl p-6 border border-neon-primary/20 hover:border-neon-primary/40 transition-all duration-300 hover:shadow-neon animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center shadow-neon flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="bg-neon-primary/10 rounded-full px-3 py-1">
                    <span className="text-neon-primary font-bold text-sm">{module.number}</span>
                  </div>
                </div>

                <h3 className="font-montserrat font-bold text-lg mb-2 text-foreground">
                  {module.title}
                </h3>

                <p className="text-foreground/60 text-sm mb-4">
                  {module.description}
                </p>

                <div className="bg-neon-primary/5 rounded-lg p-3 border border-neon-primary/20">
                  <p className="text-neon-primary text-sm font-medium flex items-center">
                    <span className="w-2 h-2 bg-neon-primary rounded-full mr-2"></span>
                    {module.result}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bonus Section */}
        <div className="bg-gradient-neon rounded-xl p-8 text-center mb-12 shadow-neon-strong">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gift className="w-8 h-8 text-primary-foreground" />
            <h3 className="font-montserrat font-bold text-2xl text-primary-foreground">
              Bônus Exclusivos
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-primary-foreground">
            <div className="bg-primary-foreground/10 rounded-lg p-4">
              <p className="font-semibold mb-1">Modelos de orçamento</p>
              <p className="text-sm opacity-90">Templates profissionais prontos</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-4">
              <p className="font-semibold mb-1">Checklist completo</p>
              <p className="text-sm opacity-90">Nunca esqueça nenhum detalhe</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-4">
              <p className="font-semibold mb-1">Contrato simples</p>
              <p className="text-sm opacity-90">Proteja-se legalmente</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <NeonButton 
            variant="neon" 
            size="xl"
            onClick={() => window.open('https://hotmart.com/pt-br/marketplace/produtos/neon-para-eletricistas/G98352360L', '_blank', 'noopener')}
            className="animate-pulse-neon"
          >
            Quero entrar agora
          </NeonButton>
        </div>
      </div>
    </section>
  )
}

export default Modules