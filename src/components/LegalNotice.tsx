import { AlertTriangle, Shield, Zap } from "lucide-react"

const LegalNotice = () => {
  return (
    <section className="py-16 border-t border-neon-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="w-6 h-6 text-neon-primary" />
            <h2 className="font-montserrat font-bold text-2xl">
              <span className="neon-text">Avisos</span> Importantes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-card rounded-xl p-6 border border-neon-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-neon-primary" />
                <h3 className="font-montserrat font-bold text-lg">Alta Tensão</h3>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Trabalhos com neon envolvem alta tensão. É obrigatório o uso de EPIs adequados 
                e seguir todas as normas de segurança elétrica.
              </p>
            </div>

            <div className="bg-gradient-card rounded-xl p-6 border border-neon-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-neon-primary" />
                <h3 className="font-montserrat font-bold text-lg">Responsabilidade</h3>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Cada aluno é responsável pela aplicação correta das técnicas ensinadas. 
                Recomendamos supervisão profissional nas primeiras instalações.
              </p>
            </div>

            <div className="bg-gradient-card rounded-xl p-6 border border-neon-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-neon rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">VS</span>
                </div>
                <h3 className="font-montserrat font-bold text-lg">Neon vs Led</h3>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed">
              No Módulo 2, revelamos a verdadeira diferença entre o Neon vs Led, 
              Muitos acham que é a mesma coisa, mas cada tecnologia tem aplicações, luminosidade, durabilidade e custos completamente diferentes.
              Algo que a maioria dos profissionais e até fornecedores desconhece.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default LegalNotice