"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  BarChart3,
  Bus,
  CalendarDays,
  CircleDollarSign,
  CreditCard,
  Package,
  Users,
  Wallet,
  Wrench,
  CheckCircle2,
  ArrowRight,
  X,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// ─── Data ────────────────────────────────────────────────────────────────────

type Feature = {
  icon: React.ElementType
  title: string
  tagline: string
  description: string
  benefits: string[]
  color: string
  iconBg: string
  accentColor: string
  popular?: boolean
}

const features: Feature[] = [
  {
    icon: Users,
    title: "Gestión de Socios",
    tagline: "Su padrón, siempre ordenado.",
    description:
      "Olvídese de las planillas y los errores humanos. Centralice toda la información de sus socios en un sistema diseñado para asociaciones civiles: altas, bajas, modificaciones y el historial completo de cada persona, accesible en segundos.",
    benefits: [
      "Alta y baja de socios en menos de 1 minuto",
      "Historial completo de pagos por socio",
      "Búsqueda instantánea por nombre, DNI o categoría",
      "Estados diferenciados: activo, moroso, suspendido",
      "Exportación de padrón actualizado cuando lo necesite",
    ],
    color: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-500/10 dark:bg-blue-500/20",
    accentColor: "bg-blue-500",
    popular: false,
  },
  {
    icon: CalendarDays,
    title: "Gestión de Reservas",
    tagline: "Cero cruces, cero problemas.",
    description:
      "Un calendario inteligente que le dice qué días están tomados antes de que alguien pregunte. Gestione reservas de salones y espacios, cobre señas, y lleve un registro impecable de cada evento programado.",
    benefits: [
      "Calendario visual con disponibilidad en tiempo real",
      "Registro de señas y saldos pendientes por reserva",
      "Historial completo de eventos y reservas pasadas",
      "Alertas de solapamiento automáticas",
      "Vista semanal y mensual para planificación fácil",
    ],
    color: "text-cyan-600 dark:text-cyan-400",
    iconBg: "bg-cyan-500/10 dark:bg-cyan-500/20",
    accentColor: "bg-cyan-500",
    popular: true,
  },
  {
    icon: Wallet,
    title: "Módulo para Cobradores",
    tagline: "Control total de su equipo de cobro.",
    description:
      "Asigne zonas, lotes y socios a cada cobrador y sepa exactamente cuánto recaudó cada uno. Elimine discrepancias, simplifique la auditoría interna y mantenga la transparencia en cada peso que ingresa.",
    benefits: [
      "Asignación de zonas y lotes por cobrador",
      "Historial de recaudación individual y global",
      "Cierre de caja diario por cobrador",
      "Auditoría interna sin fricción",
      "Comparativo de rendimiento entre cobradores",
    ],
    color: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    accentColor: "bg-emerald-500",
    popular: true,
  },
  {
    icon: Bus,
    title: "Organización de Viajes",
    tagline: "Del destino a los pagos, todo en un lugar.",
    description:
      "Planifique excursiones, eventos y viajes para sus socios con una herramienta diseñada para no dejar nada librado al azar. Gestione cupos, inscripciones y pagos parciales sin perder el hilo.",
    benefits: [
      "Creación de viajes con cupo máximo configurable",
      "Inscripción de socios con registro de señas",
      "Control de cupos disponibles en tiempo real",
      "Gestión de pagos parciales y saldos pendientes",
      "Historial de viajes pasados y futuros",
    ],
    color: "text-green-600 dark:text-green-400",
    iconBg: "bg-green-500/10 dark:bg-green-500/20",
    accentColor: "bg-green-500",
  },
  {
    icon: CreditCard,
    title: "Portal de Pagos Online",
    tagline: "Sus socios pagan desde donde estén.",
    description:
      "Envíe links de pago personalizados a cada socio y reciba el dinero directamente en la cuenta de Mercado Pago de su asociación. El sistema registra, acredita y genera el recibo automáticamente.",
    benefits: [
      "Links de pago enviados por WhatsApp o email",
      "Acreditación automática en su cuenta de Mercado Pago",
      "Generación de recibo digital al instante",
      "Sin necesidad de que el socio tenga app o cuenta",
      "Reducción de morosidad comprobada desde el primer mes",
    ],
    color: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-500/10 dark:bg-amber-500/20",
    accentColor: "bg-amber-500",
    popular: true,
  },
  {
    icon: Package,
    title: "Alquiler de Artículos",
    tagline: "Sepa dónde está cada cosa, siempre.",
    description:
      "Gestione el inventario de artículos prestables de su asociación con un sistema que le avisa cuando algo no volvió. Elimine los registros en papel y los malentendidos entre socios y administración.",
    benefits: [
      "Registro de préstamos y devoluciones por socio",
      "Alertas automáticas de vencimiento de préstamo",
      "Inventario actualizado en tiempo real",
      "Historial de uso de cada artículo",
      "Gestión de depósitos o garantías opcionales",
    ],
    color: "text-teal-600 dark:text-teal-400",
    iconBg: "bg-teal-500/10 dark:bg-teal-500/20",
    accentColor: "bg-teal-500",
  },
  {
    icon: BarChart3,
    title: "Analíticas y Balance",
    tagline: "Tome decisiones con datos reales.",
    description:
      "Visualice el estado financiero y operativo de su asociación con tableros claros y actualizados. Desde la tasa de morosidad hasta los ingresos por categoría, toda la información que necesita para liderar con confianza.",
    benefits: [
      "Dashboard con métricas clave en tiempo real",
      "Tasa de morosidad y evolución histórica",
      "Ingresos desglosados por categoría y período",
      "Comparativo mensual y anual de recaudación",
      "Exportación de reportes para reuniones de comisión",
    ],
    color: "text-indigo-600 dark:text-indigo-400",
    iconBg: "bg-indigo-500/10 dark:bg-indigo-500/20",
    accentColor: "bg-indigo-500",
  },
  {
    icon: CircleDollarSign,
    title: "Registro de Pagos",
    tagline: "Cobro registrado, socio al día.",
    description:
      "Registre el pago de cuotas en el momento justo, ya sea en ventanilla o desde su celular. Actualice el valor de la cuota con un clic y mantenga el historial limpio y sin errores.",
    benefits: [
      "Registro de pago en menos de 10 segundos",
      "Actualización del valor de cuota global con un clic",
      "Generación de recibo manual o digital",
      "Marcado automático de socios al día vs. morosos",
      "Historial de pagos editable con trazabilidad",
    ],
    color: "text-rose-600 dark:text-rose-400",
    iconBg: "bg-rose-500/10 dark:bg-rose-500/20",
    accentColor: "bg-rose-500",
  },
  {
    icon: Wrench,
    title: "Funcionalidades a Medida",
    tagline: "Si lo necesita, lo construimos.",
    description:
      "Cada asociación es única. Si tiene una necesidad específica que no cubre ningún módulo estándar, nuestro equipo la analiza y la desarrolla para usted. Sin costos ocultos, con tiempos claros.",
    benefits: [
      "Análisis gratuito de factibilidad de su pedido",
      "Desarrollo dedicado por un equipo especializado",
      "Integración nativa con los módulos existentes",
      "Soporte prioritario post-implementación",
      "Sin dependencia de terceros para su funcionalidad clave",
    ],
    color: "text-purple-600 dark:text-purple-400",
    iconBg: "bg-purple-500/10 dark:bg-purple-500/20",
    accentColor: "bg-purple-500",
  },
]

// ─── Drawer ───────────────────────────────────────────────────────────────────

function FeatureDrawer({
  feature,
  onClose,
}: {
  feature: Feature
  onClose: () => void
}) {
  const Icon = feature.icon

  return (
    <>
      {/* Overlay */}
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <motion.aside
        key="drawer"
        role="dialog"
        aria-modal="true"
        aria-label={`Detalle: ${feature.title}`}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-background shadow-2xl border-l border-border/60"
      >
        {/* Accent bar top */}
        <div className={`h-1 w-full ${feature.accentColor} rounded-none`} />

        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4">
          <div className="flex items-center gap-4">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${feature.iconBg}`}
            >
              <Icon className={`h-6 w-6 ${feature.color}`} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Módulo
              </p>
              <h2 className="text-xl font-bold leading-tight">{feature.title}</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar panel"
            className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Tagline */}
        <div className="px-6 pb-2">
          <p className={`text-base font-semibold ${feature.color}`}>
            {feature.tagline}
          </p>
        </div>

        {/* Divider */}
        <div className="mx-6 border-t border-border/50" />

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {/* Description */}
          <p className="text-sm leading-relaxed text-muted-foreground">
            {feature.description}
          </p>

          {/* Benefits */}
          <div className="mt-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-foreground">
              ¿Qué gana su asociación?
            </p>
            <ul className="space-y-3">
              {feature.benefits.map((benefit) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    className={`mt-0.5 h-4 w-4 shrink-0 ${feature.color}`}
                  />
                  <span className="text-sm leading-snug text-foreground/90">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="border-t border-border/50 px-6 py-5">
          <Button
            asChild
            className="w-full gap-2 font-semibold"
            size="lg"
          >
            <a href="#contacto">
              Quiero este módulo
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Sin compromiso · Respuesta en menos de 24 h
          </p>
        </div>
      </motion.aside>
    </>
  )
}

// ─── Feature Card ─────────────────────────────────────────────────────────────

function FeatureCard({
  feature,
  onClick,
}: {
  feature: Feature
  onClick: () => void
}) {
  const Icon = feature.icon

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
    >
      <Card
        className="group relative h-full cursor-pointer overflow-hidden border border-border/50 bg-background transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-lg"
        onClick={onClick}
        role="button"
        tabIndex={0}
        aria-label={`Ver detalle de ${feature.title}`}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
      >
        {/* Popular badge */}
        {feature.popular && (
          <div className="absolute right-0 top-0 z-10">
            <div className="flex items-center gap-1.5 rounded-bl-xl border-b border-l border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Más Popular
              </span>
            </div>
          </div>
        )}

        <CardContent className="flex flex-col gap-3 p-5">
          {/* Icon */}
          <div
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110 ${feature.iconBg}`}
          >
            <Icon className={`h-5 w-5 ${feature.color}`} />
          </div>

          {/* Title */}
          <h3 className="text-base font-bold leading-snug">{feature.title}</h3>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground">{feature.tagline}</p>

          {/* CTA hint */}
          <div
            className={`mt-1 flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider transition-colors duration-200 ${feature.color} opacity-0 group-hover:opacity-100`}
          >
            Ver detalle <ArrowRight className="h-3 w-3" />
          </div>
        </CardContent>

        {/* Bottom accent line on hover */}
        <div
          className={`absolute bottom-0 left-0 h-0.5 w-0 ${feature.accentColor} transition-all duration-300 group-hover:w-full`}
        />
      </Card>
    </motion.div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Features() {
  const [activeFeature, setActiveFeature] = useState<Feature | null>(null)

  return (
    <section
      id="caracteristicas"
      className="py-16 sm:py-24 bg-muted/30 border-y border-border/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Módulos del Sistema
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Todo lo que su asociación necesita en un solo lugar
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Diseñado específicamente para las necesidades únicas de las
            asociaciones civiles, con foco en usabilidad y control.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="mt-16 flex flex-wrap justify-center gap-4 items-stretch"
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              onClick={() => setActiveFeature(feature)}
            />
          ))}
        </motion.div>
      </div>

      {/* Drawer (portal-like, rendered at section level) */}
      <AnimatePresence>
        {activeFeature && (
          <FeatureDrawer
            feature={activeFeature}
            onClose={() => setActiveFeature(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
