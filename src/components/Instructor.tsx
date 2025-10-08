import { TrendingUp } from "lucide-react"
import marcusImg from "@/assets/marcus-alexandre.png"

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
                  <strong className="text-neon-primary">Mais de 10 anos</strong> trabalhando com luminosos 
                  de neon em projetos comerciais e residenciais de grande porte.
                </p>
                
                <p>
                  Responsável por <strong className="text-neon-primary">centenas de instalações</strong> 
                  em estabelecimentos comerciais, casas noturnas, restaurantes e fachadas corporativas.
                </p>
                
                <p>
                  Especialista em segurança elétrica, normas técnicas e fornecedores nacionais 
                  do setor de luminosos.
                </p>

                <p>
                  <strong className="text-neon-primary">Fundador</strong> de empresa especializada 
                  em soluções de iluminação neon que faturou mais de R$ 2 milhões nos últimos 3 anos.
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