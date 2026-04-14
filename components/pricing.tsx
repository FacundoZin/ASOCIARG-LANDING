"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap, Shield } from "lucide-react"

const plans = [
  {
    name: "Plan Básico",
    icon: Shield,
    tagline: "Para asociaciones que están empezando",
    highlighted: false,
    badge: null,
    pricing: [
      { label: "Hasta 500 socios", price: "$50.000" },
      { label: "Hasta 1.000 socios", price: "$80.000" },
      { label: "Hasta 2.000 socios", price: "$120.000" },
      { label: "Más de 2.000 socios", price: "$150.000" },
    ],
    pricingSuffix: "/ mes",
    features: [
      "Todos los módulos de gestión interna",
      "Hasta 5 usuarios",
      "Soporte técnico incluido",
      "Actualizaciones del sistema",
    ],
    cta: "Comenzar",
    ctaStyle: "secondary",
  },
  {
    name: "Plan Intermedio",
    icon: Star,
    tagline: "El más elegido por nuestros clientes",
    highlighted: true,
    badge: "Más elegido",
    pricingFixed: "$280",
    pricingSuffix: "/ socio / mes",
    features: [
      "Todo lo del Plan Básico",
      "Portal de pagos por WhatsApp",
      "Blog institucional",
      "Hasta 15 usuarios",
    ],
    cta: "Elegir plan",
    ctaStyle: "primary",
  },
  {
    name: "Plan Avanzado",
    icon: Zap,
    tagline: "Máxima potencia para grandes organizaciones",
    highlighted: false,
    badge: null,
    pricingFixed: "$380",
    pricingSuffix: "/ socio / mes",
    features: [
      "Todo lo del Plan Básico e Intermedio",
      "Avisos institucionales por WhatsApp",
      "Usuarios ilimitados",
      "Atención preferencial",
    ],
    cta: "Elegir plan",
    ctaStyle: "secondary",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export function Pricing() {
  return (
    <section id="planes" className="relative py-16 sm:py-24 bg-background overflow-hidden">
      {/* Fondo animado suave */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-[100px] animate-pulse [animation-duration:8s]" />
        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full bg-accent/5 blur-[100px] animate-pulse [animation-duration:12s]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Planes y Precios
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Planes que se adaptan a tu institución
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Elegí el plan que mejor se ajusta al tamaño y necesidades de tu asociación. Sin costos ocultos.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start group/cards"
        >
          {plans.map((plan) => {
            const Icon = plan.icon
            const isHighlighted = plan.highlighted

            return (
              <motion.div
                key={plan.name}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.98 },
                  show: { 
                    opacity: 1, 
                    y: 0, 
                    scale: isHighlighted ? [0.98, 1.04, 1.02] : 1,
                    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
                  }
                }}
                className={`
                  relative flex flex-col rounded-2xl border p-6 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                  origin-center
                  sm:group-hover/cards:opacity-80 sm:group-hover/cards:blur-[2px] sm:group-hover/cards:scale-[0.98]
                  sm:hover:!opacity-100 sm:hover:!blur-none sm:hover:-translate-y-2 sm:hover:!scale-[1.03]
                  ${isHighlighted
                    ? "border-primary bg-primary text-primary-foreground shadow-2xl shadow-primary/20 sm:hover:shadow-primary/40"
                    : "border-border/50 bg-card text-card-foreground sm:hover:shadow-xl sm:hover:border-primary/40"
                  }
                `}
              >
                {/* Badge */}
                {plan.badge && (
                  <motion.div 
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
                  >
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground shadow-md">
                      <Star className="h-3 w-3 fill-current" />
                      {plan.badge}
                    </span>
                  </motion.div>
                )}

                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`
                      shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg
                      ${isHighlighted
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-primary/10 text-primary"
                      }
                    `}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-tight">{plan.name}</h3>
                    <p className={`text-[13px] mt-0.5 ${isHighlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {plan.tagline}
                    </p>
                  </div>
                </div>

                {/* Precio */}
                <div className={`group/price mb-5 pt-4 border-t transition-colors duration-300 ${isHighlighted ? "border-primary-foreground/20" : "border-border/50"}`}>
                  {"pricing" in plan && plan.pricing ? (
                    <div className="space-y-1.5">
                      {plan.pricing.map((tier) => (
                        <div key={tier.label} className="flex items-center justify-between gap-2 sm:group-hover/price:scale-[1.02] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] origin-left">
                          <span className={`text-[13px] transition-colors duration-300 ${isHighlighted ? "text-primary-foreground/80 sm:group-hover/price:text-primary-foreground" : "text-muted-foreground sm:group-hover/price:text-foreground"}`}>
                            {tier.label}
                          </span>
                          <span className="text-base font-bold tabular-nums">{tier.price}</span>
                        </div>
                      ))}
                      <p className={`text-[11px] mt-1 ${isHighlighted ? "text-primary-foreground/60" : "text-muted-foreground/70"}`}>
                        {plan.pricingSuffix}
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1 sm:group-hover/price:scale-[1.02] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] origin-left">
                      <span className="text-4xl font-extrabold tracking-tight">
                        {"pricingFixed" in plan ? plan.pricingFixed : ""}
                      </span>
                      <span className={`text-sm font-medium transition-colors duration-300 ${isHighlighted ? "text-primary-foreground/70 sm:group-hover/price:text-primary-foreground" : "text-muted-foreground sm:group-hover/price:text-foreground"}`}>
                        {plan.pricingSuffix}
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-2.5 mb-6">
                  {plan.features.map((feature, i) => (
                    <motion.li 
                      key={feature}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0, x: -25 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.4 + (i * 0.08) } }
                      }}
                      className="flex items-start gap-2.5 cursor-default transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] sm:hover:translate-x-1"
                    >
                      <span
                        className={`
                          mt-0.5 shrink-0 flex h-4 w-4 items-center justify-center rounded-full transition-transform duration-300 sm:hover:scale-110
                          ${isHighlighted
                            ? "bg-primary-foreground/20 text-primary-foreground"
                            : "bg-primary/10 text-primary"
                          }
                        `}
                      >
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>
                      <span className={`text-sm leading-snug ${isHighlighted ? "text-primary-foreground/90" : "text-foreground/80"}`}>
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#contacto"
                  className={`
                    relative overflow-hidden block w-full rounded-xl px-4 py-3 text-center text-sm font-bold transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                    sm:active:scale-[0.98] sm:hover:scale-[1.02]
                    ${isHighlighted
                      ? "bg-primary-foreground text-primary shadow-md sm:hover:bg-white sm:hover:shadow-xl"
                      : "bg-primary/10 text-primary border border-primary/20 sm:hover:bg-primary sm:hover:text-primary-foreground"
                    }
                  `}
                >
                  <span className="relative z-10">{plan.cta}</span>
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "200%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.8 }}
                    className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 w-full"
                  />
                </motion.a>
              </motion.div>
            )
          })}
        </motion.div>


      </div>
    </section>
  )
}
