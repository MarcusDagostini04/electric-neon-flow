import { Button } from "@/components/ui/button";
import {
  PlayCircle,
  Lightbulb,
  Package,
  Settings,
  DollarSign,
  ShoppingCart,
  CheckCircle2
} from "lucide-react";

const Modules = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const modules = [
    {
      number: "M1",
      title: "Boas vindas",
      icon: PlayCircle,
      topics: [
        "Tudo que você vai aprender nesse curso",
        "Quem é o Alexandre",
      ]
    },
    {
      number: "M2",
      title: "O Neon e o mercado",
      icon: Lightbulb,
      topics: [
        "O que é o Neon",
        "Como o neon é feito",
        "Diferença entre Neon x Led",
        "Neon: uma nova forma de obter renda"
      ]
    },
    {
      number: "M3",
      title: "Materiais",
      icon: Package,
      topics: [
        "Materiais necessários para a instalação do Neon",
        "Transformadores e suas especificações",
        "Como montar sua maleta de atendimento",
      ]
    },
    {
      number: "M4",
      title: "Instalação & Manutenção",
      icon: Settings,
      topics: [
        "Instalação do Neon",
        "Cálculo da potência do transformador",
        "Transformador x Alta voltagem",
        "Manutenção do Neon",
        "Manuseio e transporte do neon",
        "O que fazer quando o neon não acende totalmente",
        "Bônus: Guia completo do usuário"
      ]
    },
    {
      number: "M5",
      title: "Atendimento, orçamento e vendas",
      icon: DollarSign,
      topics: [
        "Orçamento e visita técnica",
        "Modelo de orçamento padrão",
        "A importância de ter um laboratório parceiro (Lista dos fornecedores)",
        "Meios de pagamento",
        "Prazo de garantia"
      ]
    },
    {
      number: "M6",
      title: "Compras de acessórios e produtos",
      icon: ShoppingCart,
      topics: [
        "Como comprar seus acessórios e produtos",
    
      ]
    }
  ];

  return (
    <section id="modulos" className="px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
            O que você vai <span className="neon-text">aprender</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            6 módulos completos com todo conhecimento necessário para dominar o mercado de neon
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={index}
                className="card-neon p-6 space-y-6 animate-fade-in-up hover:shadow-neon bg-gradient-card rounded-lg transition-all duration-300 mb-5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center shadow-neon">
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <div className="text-primary font-bold text-sm">{module.number}</div>
                    <h3 className="text-lg font-montserrat font-bold text-foreground">
                      {module.title}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="mb-6 animate-bounce-in">
            <button onClick={scrollToPricing} className="bg-[#FF3333] text-white font-montserrat font-bold text-lg md:text-md px-8 md:px-12 py-4 md:py-5 rounded-lg transition-all duration-300 animate-pulse-fast">
              Quero entrar agora!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;