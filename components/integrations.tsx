"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import dynamic from "next/dynamic"

const PaymentMock = dynamic(
  () => import("./payment-mock").then((mod) => mod.PaymentMock),
  {
    ssr: false,
    loading: () => (
      <div className="h-[480px] w-full animate-pulse rounded-2xl bg-slate-100" />
    ),
  }
)

const integrations = [
  {
    icon: "/MP_RGB_HANDSHAKE_color_vertical.svg",
    title: "Portal de pagos online",
    description:
      "Integración nativa con Mercado Pago para procesar pagos con tarjeta de débito o transferencia. todos los pagos quedan registrados automaticamente en el sistema.",
    color: "bg-white dark:bg-white/10 shadow-sm border border-slate-200 dark:border-slate-800",
  },
  {
    icon: "/whatsapp-3.svg",
    title: "Notificaciones vía WhatsApp",
    description:
      "Envío automático de notificaciones para pagos de cuotas y avisos importantes directo al whatsapp de sus socios.",
    color: "bg-white dark:bg-white/10 shadow-sm border border-slate-200 dark:border-slate-800",
  },
]

export function Integrations() {
  return (
    <section
      id="integraciones"
      className="bg-slate-50 dark:bg-background/50 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Conectividad Total
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Integraciones que potencian su gestión
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Olvídese del trabajo manual. Nuestro sistema se conecta con plataformas externas
                para automatizar cobros y comunicaciones con sus socios.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  key={integration.title}
                  className="flex gap-4 items-start"
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl p-2 ${integration.color}`}
                  >
                    <Image
                      src={integration.icon}
                      alt={`Icono de ${integration.title} - integración con ASOCIARG`}
                      width={56}
                      height={56}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{integration.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {integration.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
            role="img"
            aria-label="Demostración del portal de pagos online del sistema ASOCIARG integrado con Mercado Pago para recebir pagos online en asociaciones civiles y clubes"
          >
            <PaymentMock />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
