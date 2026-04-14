"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "¿Qué es Asociarg y para quién está pensado?",
    answer: "Asociarg es un sistema de gestión integral diseñado para asociaciones civiles, clubes deportivos y organizaciones que buscan ordenar y digitalizar su administración."
  },
  {
    question: "¿Qué puedo gestionar con Asociarg?",
    answer: "Podés administrar socios, cuotas, cobranzas, usuarios, reportes y diferentes áreas internas desde una única plataforma."
  },
  {
    question: "¿Necesito conocimientos técnicos para usar el sistema?",
    answer: "No. Está diseñado para ser simple, intuitivo y fácil de usar desde el primer momento."
  },
  {
    question: "¿Puedo acceder desde cualquier dispositivo?",
    answer: "Sí. Es un sistema 100% online, accesible desde computadora, tablet o celular."
  },
  {
    question: "¿Cuánto tiempo tarda la implementación?",
    answer: "La implementación es rápida. En poco tiempo podés tener el sistema funcionando en tu institución."
  },
  {
    question: "¿Mis datos están seguros?",
    answer: "Sí. Se aplican buenas prácticas de seguridad para proteger toda la información de tu organización."
  },
  {
    question: "¿Asociarg se adapta a mi institución?",
    answer: "Sí. Está pensado para adaptarse a diferentes tipos de asociaciones, sin importar su tamaño o complejidad."
  },
  {
    question: "¿Qué soporte incluye el servicio?",
    answer: "Contás con acompañamiento para resolver dudas y ayudarte a aprovechar el sistema al máximo."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-16 sm:py-24 bg-background">
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Resolvemos tus dudas sobre nuestra plataforma
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`border rounded-2xl transition-all duration-300 ease-out overflow-hidden ${
                  isOpen 
                    ? "border-primary/50 bg-card shadow-sm" 
                    : "border-border/50 bg-background hover:border-primary/30"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-5 py-5 sm:px-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 rounded-2xl cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base font-semibold transition-colors duration-300 pr-4 sm:pr-6 ${
                    isOpen ? "text-primary" : "text-foreground"
                  }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`relative shrink-0 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {/* Horizontal line */}
                    <span className="absolute w-3.5 h-[2px] bg-current rounded-full" />
                    {/* Vertical line that rotates */}
                    <motion.span 
                      className="absolute w-3.5 h-[2px] bg-current rounded-full"
                      initial={false}
                      animate={{ rotate: isOpen ? 0 : 90 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0 sm:px-6 text-muted-foreground text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
