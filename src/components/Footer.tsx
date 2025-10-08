import { Mail, MessageCircle } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-dark border-t border-neon-primary/20 py-12">
      <div className="container mx-auto px-4">
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-neon-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/60 text-sm">
              © 2025 Neon Alexandre. Todos os direitos reservados.
            </p>
            <div className="text-foreground/60 text-sm text-center md:text-right">
              <p>Processamento seguro via Hotmart</p>
              <p>Suporte técnico especializado incluído</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer