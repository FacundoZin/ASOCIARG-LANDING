"use client"

import { motion, AnimatePresence, Variants } from "framer-motion"
import { Check, Star, Zap, Shield, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

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
      "Hasta 6 usuarios",
      "Soporte técnico incluido",
      "Actualizaciones del sistema periodicas y gratuitas",
      "Portal de pagos 360",
      "Link de afiliacion online",
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
    pricingFixed: "$220",
    pricingSuffix: "/ socio / mes",
    features: [
      "Todo lo del Plan Básico",
      "Notificaciones de pago de cuotas por WhatsApp",
      "Acceso a Blog institucional",
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
      "Avisos institucionales automaticos por WhatsApp para todos los socios",
      "Usuarios ilimitados",
      "Desarrollo de funcionalidad perzonalizada sin costo adicional",
      "Soporte prioritario",
    ],
    cta: "Elegir plan",
    ctaStyle: "secondary",
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
}

export function Pricing() {
  return (
    <section id="planes" className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start"
        >
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </motion.div>

        {/* Nota al pie */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-sm text-muted-foreground"
        >
          Los precios son en pesos argentinos e incluyen IVA. ¿Tenés una necesidad especial?{" "}
          <a href="#contacto" className="text-primary font-semibold hover:underline">
            Hablemos.
          </a>
        </motion.p>
      </div>
    </section>
  )
}

function PricingCard({ plan }: { plan: any }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isHighlighted = plan.highlighted

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        y: -6,
        scale: isHighlighted ? 1.04 : 1.02,
        boxShadow: isHighlighted 
          ? "0 20px 40px -8px rgba(0, 102, 255, 0.25)" 
          : "0 20px 40px -8px rgba(0, 0, 0, 0.1)"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 25 
      }}
      className={`
        relative flex flex-col rounded-2xl border p-6 transition-colors duration-300 group cursor-default
        ${
          isHighlighted
            ? "border-primary bg-primary text-primary-foreground scale-[1.03] lg:scale-105 z-10"
            : "border-border/50 bg-card text-card-foreground hover:border-primary/30"
        }
      `}
    >
      {/* Glow Effect on Hover (only for non-highlighted for subtle feel) */}
      {!isHighlighted && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground shadow-md">
            <Star className="h-3 w-3 fill-current" />
            {plan.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`
            shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110
            ${isHighlighted ? "bg-white text-primary" : "bg-white border border-border/50"}
          `}
        >
          <Image 
            src="/iconoasociargsinfondo.png" 
            alt="Asociarg Logo" 
            width={32} 
            height={32} 
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold leading-tight">{plan.name}</h3>
          <p className={`text-[13px] mt-0.5 ${isHighlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
            {plan.tagline}
          </p>
        </div>
      </div>

      {/* Precio */}
      <div className={`mb-5 pt-4 border-t ${isHighlighted ? "border-primary-foreground/20" : "border-border/50"}`}>
        {"pricing" in plan && plan.pricing ? (
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className={`text-sm font-medium self-end mb-1 ${isHighlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                Desde
              </span>
              <span className="text-4xl font-extrabold tracking-tight">
                {plan.pricing[0].price}
              </span>
              <span className={`text-sm font-medium ${isHighlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.pricingSuffix}
              </span>
            </div>

            {/* Precios adicionales con animación fluida */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden space-y-1.5 mt-4"
                >
                  {plan.pricing.map((tier: any) => (
                    <div key={tier.label} className="flex items-center justify-between gap-2 border-t border-border/10 pt-1.5">
                      <span className={`text-[13px] ${isHighlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                        {tier.label}
                      </span>
                      <span className="text-base font-bold tabular-nums">{tier.price}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Botón Ver Más */}
            {plan.pricing.length > 1 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`mt-4 flex items-center gap-1 text-[12px] font-semibold transition-colors duration-200 outline-none ${
                  isHighlighted ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-primary hover:text-primary/80"
                }`}
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="h-3 w-3" /> Ocultar escala de socios
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-3 w-3" /> Ver escala según socios
                  </>
                )}
              </button>
            )}
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold tracking-tight">
                {"pricingFixed" in plan ? plan.pricingFixed : ""}
              </span>
              <span className={`text-sm font-medium ${isHighlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.pricingSuffix}
              </span>
            </div>
            <p className={`text-[11px] mt-1 font-medium ${isHighlighted ? "text-primary-foreground/60" : "text-muted-foreground/60"}`}>
              * Precio a partir de 500 socios
            </p>
          </div>
        )}
      </div>

      {/* Features */}
      <ul className="flex-1 space-y-2.5 mb-6">
        {plan.features.map((feature: any) => (
          <li key={feature} className="flex items-start gap-2.5">
            <span
              className={`
                mt-0.5 shrink-0 flex h-4 w-4 items-center justify-center rounded-full
                ${isHighlighted ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/10 text-primary"}
              `}
            >
              <Check className="h-2.5 w-2.5" strokeWidth={3} />
            </span>
            <span className={`text-sm leading-snug ${isHighlighted ? "text-primary-foreground/90" : "text-foreground/80"}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contacto"
        className={`
          block w-full rounded-xl px-4 py-3 text-center text-sm font-bold transition-all duration-200
          ${
            isHighlighted
              ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-md"
              : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20"
          }
        `}
      >
        {plan.cta}
      </a>
    </motion.div>
  )
}
