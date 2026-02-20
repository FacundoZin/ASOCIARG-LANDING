"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  BarChart3,
  Bus,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  CreditCard,
  Package,
  Users,
  Wallet,
  Wrench,
} from "lucide-react"
import { useState } from "react"

const features = [
  {
    icon: Users,
    title: "Módulo de Gestión de Socios",
    description:
      "Administración completa del padrón de socios, con historial detallado de pagos. Podrá cargar, editar y eliminar socios desde un solo lugar.",
    color: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white",
    popular: false,
  },
  {
    icon: CalendarDays,
    title: "Módulo de Gestión de Reservas",
    description:
      "Registre reservas, pagos y señas de sus salones, visualice las fechas reservadas en un calendario inteligente, seguimiento completo y organizado de sus reservas.",
    color: "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white",
    popular: true,
  },
  {
    icon: Wallet,
    title: "Módulo para Cobradores",
    description:
      "Organice a sus cobradores asignándole lotes y zonas geográficas, mantenga un historial de todos los pagos recibidos de cada uno de ellos para auditorías internas.",
    color: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white",
    popular: true,
  },
  {
    icon: Bus,
    title: "Módulo de Organización de Viajes",
    description:
      "Organización integral de excursiones, turismo y eventos especiales para los asociados.",
    color: "bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400 group-hover:bg-green-500 group-hover:text-white",
  },
  {
    icon: CreditCard,
    title: "Portal de Pagos Online",
    description:
      "Envío automático de links de pago a sus socios para que puedan abonar sus cuotas de forma online, con generación de recibos y acreditación en la cuenta de Mercado Pago de su asociación.",
    color: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-white",
    popular: true,
  },
  {
    icon: Package,
    title: "Módulo de Alquiler de Artículos",
    description:
      "Préstamo y devolución de inventario con seguimiento en tiempo real y alertas de vencimiento.",
    color: "bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400 group-hover:bg-teal-500 group-hover:text-white",
  },
  {
    icon: BarChart3,
    title: "Módulo de Analíticas y Balance General",
    description:
      "Visualización de analíticas y balance general de la asociación: cantidad de socios activos, tasa de morosidad, ingresos totales y por categorías.",
    color: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white",
  },
  {
    icon: CircleDollarSign,
    title: "Módulo de Pagos",
    description:
      "Registre pagos de sus socios directamente en su establecimiento, actualice el valor de la cuota, rápido y simple.",
    color: "bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 group-hover:bg-rose-500 group-hover:text-white",
  },
  {
    icon: Wrench,
    title: "Funcionalidades Personalizadas",
    description:
      "Solicite cualquier funcionalidad personalizada para su asociación. Nosotros analizaremos la viabilidad y la desarrollaremos a medida para usted.",
    color: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400 group-hover:bg-purple-500 group-hover:text-white",
  }
]

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      layout
      transition={{
        layout: { duration: 0.4, type: "spring", stiffness: 200, damping: 25 }
      }}
      className="w-full sm:w-[calc(50.3%-1rem)] lg:w-[calc(33.333%-1rem)]"
    >
      <Card
        className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg bg-background border border-border/50 h-full"
      >
        {"popular" in feature && feature.popular && (
          <div className="absolute right-0 top-0 z-10">
            <div className="flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1 rounded-bl-xl border-b border-l border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Más Popular
              </span>
            </div>
          </div>
        )}
        <CardContent className="flex items-start gap-4 p-5">
          <motion.div
            layout="position"
            className={`shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-500 group-hover:scale-110 ${feature.color}`}
          >
            <feature.icon className="h-5 w-5" />
          </motion.div>

          <div className="flex flex-col gap-1.5 flex-1 min-w-0">
            <motion.h3
              layout="position"
              className="text-base font-bold leading-tight min-h-[2.5rem] flex items-center"
            >
              {feature.title}
            </motion.h3>

            <div className="relative">
              <motion.div
                layout
                initial={false}
                animate={{ height: isExpanded ? "auto" : "2.5rem" }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            </div>

            <motion.button
              layout="position"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-primary hover:text-primary/90 transition-colors w-fit"
            >
              {isExpanded ? (
                <>
                  Ver menos <ChevronUp className="h-3 w-3" />
                </>
              ) : (
                <>
                  Ver más <ChevronDown className="h-3 w-3" />
                </>
              )}
            </motion.button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Features() {
  return (
    <section id="caracteristicas" className="py-16 sm:py-24 bg-muted/30 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="mt-16 flex flex-wrap justify-center gap-4 items-start"
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
