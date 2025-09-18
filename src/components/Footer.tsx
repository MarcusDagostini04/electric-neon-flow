import { Mail, MessageCircle } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-dark border-t border-neon-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-neon rounded-full shadow-neon flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">N</span>
              </div>
              <span className="font-montserrat font-bold text-xl neon-text">NEON PRO</span>
            </div>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Transformando eletricistas em especialistas de neon desde 2020. 
              Mais de 1.200 alunos já mudaram suas vidas profissionais.
            </p>
            <div className="bg-neon-primary/10 rounded-lg p-3 border border-neon-primary/20">
              <p className="text-neon-primary text-sm font-medium">
                ✨ + de 1.200 alunos transformados
              </p>
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4 neon-text">
              Suporte
            </h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 hover:text-neon-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="mailto:suporte@neonpro.com.br"
                className="flex items-center gap-3 text-foreground/70 hover:text-neon-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>E-mail</span>
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4 neon-text">
              Legal
            </h4>
            <div className="space-y-3">
              <a 
                href="#"
                className="block text-foreground/70 hover:text-neon-primary transition-colors"
              >
                Política de Privacidade
              </a>
              <a 
                href="#"
                className="block text-foreground/70 hover:text-neon-primary transition-colors"
              >
                Termos de Uso
              </a>
              <a 
                href="#"
                className="block text-foreground/70 hover:text-neon-primary transition-colors"
              >
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-neon-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/60 text-sm">
              © 2024 Neon Pro. Todos os direitos reservados.
            </p>
            <div className="text-foreground/60 text-sm text-center md:text-right">
              <p>Processamento seguro via Hotmart</p>
              <p>Suporte técnico especializado incluído</p>
            </div>
          </div>
        </div>

        {/* External Code Placeholder */}
        <div className="mt-8 text-center">
          <div className="bg-card/20 rounded-lg p-4 border border-neon-primary/10">
            <p className="text-foreground/50 text-xs">
              Espaço para Pixel Meta/Google e códigos da Hotmart
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer