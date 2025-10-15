import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Shield,
  CreditCard,
  Zap,
  Users,
  FileText,
  HeadphonesIcon,
  BookOpen,
  Calendar,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Play, Clock } from "lucide-react";
import React from "react";
import { NeonButton } from "./ui/neon-button";

const Pricing: React.FC = () => {
  const valueItems = [
    {
      icon: BookOpen,
      title: "Curso completo em vídeo (teórico e prático)",
      value: "R$ 387,00",
    },
    {
      icon: Zap,
      title: "Treinamento sobre mercado e oportunidades",
      value: "R$ 137,00",
    },
    {
      icon: FileText,
      title: "Guia de materiais, ferramentas e maleta",
      value: "R$ 117,00",
    },
    {
      icon: CheckCircle2,
      title: "Instalação & Manutenção (trafos, diagnóstico, transporte)",
      value: "R$ 237,00",
    },
    {
      icon: CreditCard,
      title: "Método de precificação, proposta e vendas",
      value: "R$ 204,00",
    },
    {
      icon: FileText,
      title: "Checklists profissionais e documentos prontos",
      value: "R$ 157,00",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte individual via WhatsApp",
      value: "R$ 157/mês",
    },
    {
      icon: Users,
      title: "Grupo exclusivo de alunos / networking",
      value: "R$ 117/mês",
    },
    {
      icon: Zap,
      title: "Lista nacional de fornecedores e laboratórios",
      value: "R$ 217,00",
    },
    {
      icon: Calendar,
      title: "Atualizações e acesso imediato",
      value: "R$ 142,00",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-dark">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border border-primary/20 animate-pulse"
          >
            🔥 Oferta de Lançamento
          </Badge>

          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
            Transforme sua carreira por{" "}
            <span className="neon-text">menos que você imagina</span>
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Neon ring background */}
            <div className="absolute inset-0 bg-gradient-card rounded-2xl opacity-20" />
            <div className="absolute inset-2 bg-gradient-card rounded-2xl opacity-10" />

            <div className="relative card-neon-glow p-8 md:p-12 space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-montserrat font-bold neon-text mb-4">
                  PARA OS 100 PRIMEIROS!
                </h3>
                <p className="text-lg text-muted-foreground">
                  Tudo que você precisa para dominar o mercado de neon
                </p>
              </div>

              {/* Value breakdown */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {valueItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gradient-card rounded-lg border border-primary/10"
                    >
                      <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground flex-grow">
                        {item.title}
                      </span>
                      <span className="text-primary font-semibold text-sm">
                        {item.value}
                      </span>
                    </div>
                  );
                })}
                
              </div>

              <div id="pricing"></div>

              {/* Total value */}
              <div className="text-center border-t border-primary/20 pt-6">
                <p className="text-lg text-muted-foreground mb-2">TOTAL:</p>
                <p className="text-3xl font-bold text-accent line-through mb-4">
                  R$ 1.872,00
                </p>
              </div>

              {/* Main price */}
              <div className="text-center space-y-6 bg-background/10 rounded-xl p-8 border border-primary/30">
                <div className="space-y-2">
                  <p className="text-lg text-muted-foreground">
                    De <span className="line-through">R$ 1.872,00</span> por
                    apenas
                  </p>
                  <div className="text-3xl md:text-6xl font-black font-montserrat neon">
                    R$ 187,00
                  </div>
                  <p className="text-xl text-foreground">
                    à vista ou{" "}
                    <strong className="text-primary">12x de R$ 19,34</strong> no
                    cartão
                  </p>
                </div>

                {/* Guarantee */}
                <div className="flex items-center justify-center gap-2 text-accent">
                  <Shield className="w-6 h-6" />
                  <span className="font-semibold text-sm">
                    Garantia de 7 dias
                  </span>
                </div>

                {/* CTA Button */}
                <NeonButton
                  variant="neon"
                  size="xl"
                  onClick={() => window.open('https://pay.hotmart.com/G98352360L', '_blank', 'noopener')}
                  className="w-full text-lg max-[500px]:text-sm animate-pulse-attention"
                >
                  🚀Garantir{"\u00A0"}<span className="max-[500px]:hidden">minha{"\u00A0"}</span>vaga
                </NeonButton>

                {/* Selos */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 bg-card text-foreground border border-primary/20">
                    <Clock className="w-4 h-4 text-primary" />
                    Acesso imediato
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 bg-card text-foreground border border-primary/20">
                    <Users className="w-4 h-4 text-primary" />
                    Suporte dedicado
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 bg-card text-foreground border border-primary/20">
                    <Shield className="w-4 h-4 text-primary" />
                    Garantia 7 dias
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center mt-12">
        <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
          💡 <strong>Atenção:</strong> Esta é uma oferta por tempo limitado. O
          preço pode voltar ao valor normal a qualquer momento.
        </p>
      </div>
    </section >
  );
};

export default Pricing;
