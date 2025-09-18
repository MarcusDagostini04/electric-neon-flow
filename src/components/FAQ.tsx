import { useState } from "react"
import { NeonButton } from "./ui/neon-button"
import { ChevronDown } from "lucide-react"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "O curso é para iniciantes?",
      answer: "Sim! O curso foi desenvolvido especialmente para quem está começando do zero. Ensinamos desde os fundamentos básicos de segurança até técnicas avançadas de instalação e vendas."
    },
    {
      question: "Preciso de ferramentas caras?",
      answer: "Não. No módulo 2, ensinamos exatamente quais ferramentas são essenciais e onde comprá-las pelo melhor preço. Você pode começar com um investimento baixo e ir aumentando conforme cresce."
    },
    {
      question: "Em quanto tempo vejo resultados?",
      answer: "A maioria dos nossos alunos consegue fazer a primeira instalação na 2ª semana e o primeiro faturamento até o final do 1º mês. Tudo depende da sua dedicação e aplicação do conteúdo."
    },
    {
      question: "Emito certificado?",
      answer: "Sim! Ao concluir todos os módulos, você recebe um certificado de conclusão que pode usar para comprovar sua especialização junto aos clientes."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Você tem 7 dias após a compra para testar todo o conteúdo. Se não ficar satisfeito por qualquer motivo, devolvemos 100% do seu investimento."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-5xl mb-6">
            <span className="neon-text">Dúvidas</span> frequentes
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Esclarecemos as principais questões sobre o curso
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-xl border border-neon-primary/20 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-neon-primary/5 transition-colors"
                >
                  <h3 className="font-montserrat font-semibold text-lg text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-neon-primary transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-6 pt-0">
                    <div className="bg-neon-primary/5 rounded-lg p-4 border-l-4 border-neon-primary">
                      <p className="text-foreground/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
      </div>
    </section>
  )
}

export default FAQ