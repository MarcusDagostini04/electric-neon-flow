import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Users, Star } from "lucide-react"

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    {
      name: "Carlos M.",
      profession: "Eletricista",
      photo: "C.M.",
      text: "Em 3 meses já estava faturando R$ 5.000 extras por mês só com neon. O curso é muito prático!",
      rating: 5
    },
    {
      name: "Ana Paula S.",
      profession: "Empreendedora",
      photo: "A.P.",
      text: "Comecei do zero e hoje tenho minha própria empresa de luminosos. Mudou minha vida!",
      rating: 5
    },
    {
      name: "Roberto L.", 
      profession: "Técnico",
      photo: "R.L.",
      text: "Os módulos são super didáticos. Consegui aplicar tudo na prática desde a primeira semana.",
      rating: 5
    },
    {
      name: "Marina F.",
      profession: "Estudante",
      photo: "M.F.",
      text: "Mesmo sendo iniciante, o curso me deu toda a base necessária. Hoje já faço meus primeiros trabalhos!",
      rating: 5
    },
    {
      name: "João P.",
      profession: "Eletricista",
      photo: "J.P.",
      text: "Excelente investimento! Em pouco tempo o curso já se pagou com os primeiros serviços.",
      rating: 5
    },
    {
      name: "Luciana R.",
      profession: "Designer",
      photo: "L.R.",
      text: "Agregou muito valor ao meu trabalho. Agora posso oferecer soluções completas aos clientes.",
      rating: 5
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const visibleTestimonials = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      result.push(testimonials[index])
    }
    return result
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-5xl mb-6">
            <span className="neon-text">Alunos que</span> transformaram suas vidas
          </h2>
          
          {/* Social Proof Badge */}
          <div className="flex items-center justify-center gap-2 bg-neon-primary/10 rounded-full px-6 py-3 inline-flex mb-8">
            <Users className="w-5 h-5 text-neon-primary" />
            <span className="text-neon-primary font-semibold">+ de 100 alunos impactados</span>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials().map((testimonial, index) => (
              <div 
                key={`${testimonial.name}-${index}`}
                className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-neon-primary/20 hover:border-neon-primary/40 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-neon rounded-full flex items-center justify-center shadow-neon">
                    <span className="text-primary-foreground font-bold text-sm">
                      {testimonial.photo}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">{testimonial.profession}</p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-neon-primary text-neon-primary" />
                  ))}
                </div>

                <p className="text-foreground/80 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 bg-card/50 rounded-full flex items-center justify-center border border-neon-primary/20 hover:border-neon-primary hover:shadow-neon transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-neon-primary" />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-neon-primary shadow-neon' : 'bg-foreground/30'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 bg-card/50 rounded-full flex items-center justify-center border border-neon-primary/20 hover:border-neon-primary hover:shadow-neon transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-neon-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials