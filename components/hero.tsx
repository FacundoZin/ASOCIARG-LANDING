"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, RefreshCw } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

const DashboardMock = dynamic(
  () => import("./dashboard-mock").then((mod) => mod.DashboardMock),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse rounded-b-[2.5rem] bg-slate-100" />
    ),
  }
)

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Version 2.0 Enterprise Edition</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Sistema de Gestión para {" "}
              <span className="text-primary">Asociaciones Civiles</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
            >
              <p>
                Socios, cobranzas, pagos online, alquileres, notificaciones automáticas y balances claros, todo esto y mucho más, pensado para asociaciones civiles que quieren ordenar su gestión sin complicarse.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4 pt-4 sm:flex-row"
            >
              <Button asChild size="lg" className="group relative gap-2 overflow-hidden transition-all duration-300">
                <Link href="#contacto">
                  <span className="relative z-10 flex items-center gap-2">
                    Solicitar cotización
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </span>
                  <div className="absolute inset-0 z-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="group relative overflow-hidden border-accent/20 bg-background transition-colors duration-300 hover:border-accent"
              >
                <Link href="#caracteristicas">
                  <span className="relative z-10 flex items-center justify-center transition-colors duration-300 group-hover:text-white">
                    Ver funcionalidades
                  </span>
                  <div className="absolute inset-0 z-0 bg-accent transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-[280px] h-[580px] sm:max-w-4xl sm:h-[450px] lg:max-w-5xl lg:h-[520px] overflow-hidden rounded-[3rem] sm:rounded-2xl border-[8px] border-slate-900 sm:border bg-slate-50 shadow-2xl transition-all duration-300 ring-1 ring-slate-800/50">
              <div 
                className="h-full w-full relative"
                role="img"
                aria-label="Demostración del sistema o software de gestión para asociaciones civiles y clubes ASOCIARG"
              >
                <DashboardMock />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
