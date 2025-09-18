import { Wrench, Settings, DollarSign, Lightbulb } from "lucide-react"

const Backstage = () => {
  const pillars = [
    {
      icon: Wrench,
      title: "Técnica",
      description: "Instalação e segurança",
      details: "Aprenda todas as técnicas de instalação segura e normas técnicas"
    },
    {
      icon: Settings,
      title: "Manutenção", 
      description: "Diagnóstico e reparo",
      details: "Identifique problemas e faça reparos com eficiência"
    },
    {
      icon: DollarSign,
      title: "Comercial",
      description: "Vendas, orçamento, fornecedores",
      details: "Estratégias de vendas e relacionamento com fornecedores"
    },
    {
      icon: Lightbulb,
      title: "Projeto",
      description: "Design, materiais, LED x neon",
      details: "Criação de projetos e escolha dos melhores materiais"
    }
  ]

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-5xl mb-6">
            <span className="neon-text">Por dentro do</span> Backstage
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Nossa metodologia completa para transformar você em um especialista em neon
          </p>
        </div>

        {/* Circular Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center circle */}
          <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-neon rounded-full shadow-neon-strong flex items-center justify-center">
            <span className="font-montserrat font-bold text-primary-foreground text-lg">NEON</span>
          </div>

          {/* Pillars arranged in circle */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div 
                  key={index}
                  className="group relative bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-neon-primary/20 hover:border-neon-primary/40 transition-all duration-300 hover:shadow-neon animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Connecting line to center */}
                  <div className={`absolute w-px h-8 bg-gradient-to-b from-neon-primary/50 to-transparent ${
                    index < 2 ? 'bottom-full left-1/2 transform -translate-x-1/2' : 'top-full left-1/2 transform -translate-x-1/2'
                  }`}></div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center mb-4 shadow-neon group-hover:shadow-neon-strong transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-montserrat font-bold text-lg mb-2 neon-text">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-3">
                      {pillar.description}
                    </p>
                    <p className="text-xs text-foreground/50">
                      {pillar.details}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Backstage