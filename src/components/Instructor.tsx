import { TrendingUp } from "lucide-react"
import marcusImg from "@/assets/instrutor-03.png"

const Instructor = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Instructor Image */}
            <div className="relative animate-fade-in-up">
              <div className="relative">
                {/* Photo with neon border */}
                <div className="aspect-square bg-gradient-dark rounded-2xl border-4 border-neon-primary shadow-neon-strong overflow-hidden relative">
                  <img src={marcusImg} alt="Marcus Alexandre" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-neon rounded-2xl opacity-20 blur-xl -z-10"></div>
              </div>
            </div>

            {/* Instructor Info */}
            <div className="animate-slide-in-right">
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6">
                <span className="neon-text">Seu instrutor:</span><br />
                Especialista em Neon
              </h2>

              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-neon-primary">Mais de 35 anos</strong> trabalhando com luminosos 
                  de neon em projetos artísticos, eventos, marcas famosas, obras comerciais e instalações personalizadas de alto impacto.
                </p>
                
                <p>
                  Responsáveis por <strong className="text-neon-primary">milhares de cases de sucesso</strong>,
                  trabalhos reconhecidos pela qualidade, durabilidade e acabamento impecável.
                </p>
                
                <p>
                  Somos os <strong className="text-neon-primary">instrutores oficiais </strong>
                   do curso, prontos para compartilhar toda nossa experiência, aprendizado e técnicas que realmente geram lucro com luminosos de neon.
                </p>

                <p>
                  Neste curso, reunimos <strong className="text-neon-primary">todos os segredos do ofício</strong>. 
                  Acesso a checklists técnicos completos, formas de lucrar com neon, e uma lista 
                  nacional de fornecedores e laboratórios de neon. Um material exclusivo que nunca foi revelado publicamente.
                </p>
              </div>

              {/* Progress Graph */}
              <div className="mt-8 bg-gradient-card rounded-xl p-6 border border-neon-primary/20">
                <h4 className="font-montserrat font-bold text-lg mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-neon-primary" />
                  Progressão dos alunos
                </h4>
                
                {/* Simple progress visualization */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Primeira instalação</span>
                    <span className="text-neon-primary">Semana 2</span>
                  </div>
                  <div className="w-full bg-foreground/10 rounded-full h-2">
                    <div className="bg-gradient-neon h-2 rounded-full w-[25%] shadow-neon"></div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span>Primeiro faturamento</span>
                    <span className="text-neon-primary">Semana 4</span>
                  </div>
                  <div className="w-full bg-foreground/10 rounded-full h-2">
                    <div className="bg-gradient-neon h-2 rounded-full w-[50%] shadow-neon"></div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span>Renda consistente</span>
                    <span className="text-neon-primary">Mês 2-3</span>
                  </div>
                  <div className="w-full bg-foreground/10 rounded-full h-2">
                    <div className="bg-gradient-neon h-2 rounded-full w-[100%] shadow-neon"></div>
                  </div>
                </div>

                <p className="text-center text-sm text-neon-primary mt-4 font-semibold">
                  "Da primeira instalação ao primeiro faturamento"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instructor