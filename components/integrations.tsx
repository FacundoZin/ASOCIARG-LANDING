"use client"

import { Check, Lock, Calendar, Clock, CreditCard, ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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
          <div className="flex flex-col gap-8">
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
              {integrations.map((integration) => (
                <div key={integration.title} className="flex gap-4 items-start">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl p-2 ${integration.color}`}
                  >
                    <img 
                      src={integration.icon} 
                      alt={integration.title} 
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{integration.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {integration.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-blue-500/10 to-green-500/10 blur-2xl" />
            
            {/* Payment Portal Simulation */}
            <Card className="relative mx-auto max-w-xl overflow-hidden shadow-2xl border-slate-200 dark:border-slate-800 bg-[#F5F7FA]">
              <CardContent className="p-0">
                {/* Real Portal Header */}
                <div className="bg-white p-4 border-b flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                      <span className="font-bold text-xl">$</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 leading-none">Pago de Cuota</h4>
                      <p className="text-[10px] text-slate-500">Club de Abuelos</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full border border-blue-100 bg-blue-50 flex items-center gap-1.5">
                    <ShieldCheck className="h-3 w-3 text-blue-600" />
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-tight">Pago Seguro</span>
                  </div>
                </div>

                <div className="max-h-[350px] overflow-y-auto scrollbar-hide">
                  <div className="p-4 flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Hero Message */}
                      <div className="bg-[#3D4AE0] rounded-2xl p-5 text-white overflow-hidden relative shadow-lg flex flex-col justify-center min-h-[120px]">
                        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md rounded-full px-2 py-0.5 flex items-center gap-1.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                          <span className="text-[8px] font-medium uppercase tracking-tight">Sesión activa</span>
                        </div>
                        <h3 className="text-xl font-bold mb-1 pt-1">¡Hola, María Gómez!</h3>
                        <p className="text-[11px] text-white/80 leading-relaxed">
                          Aquí podrá abonar su cuota del <span className="font-bold text-white">2° semestre 2025</span> para el Club de Abuelos.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        {/* Quick Info Grid */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-2">
                            <div className="h-7 w-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                              <Calendar className="h-3.5 w-3.5 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-[8px] text-slate-400 uppercase font-bold">Período</p>
                              <p className="text-[10px] font-bold text-slate-700">2° Sem</p>
                            </div>
                          </div>
                          <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-2">
                            <div className="h-7 w-7 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                              <Clock className="h-3.5 w-3.5 text-indigo-600" />
                            </div>
                            <div>
                              <p className="text-[8px] text-slate-400 uppercase font-bold">Año</p>
                              <p className="text-[10px] font-bold text-slate-700">2025</p>
                            </div>
                          </div>
                        </div>

                        {/* Amount Card */}
                        <div className="bg-[#00B671] p-3.5 rounded-2xl text-white shadow-lg shadow-green-200 dark:shadow-none relative overflow-hidden flex items-center justify-between mt-auto">
                          <div className="relative z-10">
                            <p className="text-[10px] font-medium text-white/80 uppercase">Monto total</p>
                            <p className="text-2xl font-bold">$ 2.500,00</p>
                          </div>
                          <div className="relative z-10 bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                            <Check className="h-5 w-5" />
                          </div>
                          <div className="absolute -right-2 -bottom-2 opacity-10">
                            <Check className="h-16 w-16" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="bg-white rounded-2xl p-1 border border-slate-200/60 shadow-sm">
                      <div className="px-4 py-2.5 border-b">
                        <h5 className="font-bold text-[11px] text-slate-400 uppercase tracking-wider">Medios de pago</h5>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-colors cursor-pointer group">
                          <div className="flex items-center gap-4">
                            <div className="h-4 w-4 rounded-full border-2 border-slate-200 group-hover:border-blue-500 bg-white" />
                            <div className="h-9 w-9 bg-[#FFDB00] rounded-full flex items-center justify-center overflow-hidden border border-slate-100">
                               <img src="/MP_RGB_HANDSHAKE_color_vertical.svg" className="scale-110 h-6" alt="MP" />
                            </div>
                            <div>
                               <p className="text-sm font-bold text-slate-700 leading-none">Mercado Pago</p>
                               <p className="text-[9px] text-slate-500 mt-1">Tus medios de pago preferidos</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-colors cursor-pointer opacity-60">
                          <div className="flex items-center gap-4">
                            <div className="h-4 w-4 rounded-full border-2 border-slate-200 bg-white" />
                            <div className="h-9 w-9 bg-white border border-slate-200 rounded-full flex items-center justify-center">
                               <CreditCard className="h-4 w-4 text-slate-400" />
                            </div>
                            <p className="text-sm font-bold text-slate-700">Tarjeta de débito</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sticky CTA */}
                <div className="p-4 bg-white border-t mt-auto">
                   <div className="flex flex-col sm:flex-row gap-3 items-center">
                     <button className="flex-1 w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-200 transition-all active:scale-[0.98]">
                        <Lock className="h-4 w-4" />
                        Pagar ahora
                     </button>
                     
                     <div className="flex-1 w-full flex items-center gap-3 justify-center px-4 py-2.5 bg-green-50 border border-green-100 rounded-xl">
                        <div className="relative shrink-0">
                          <img src="/whatsapp-3.svg" className="h-4 w-4" alt="WA" />
                          <div className="absolute -top-1 -right-1 h-2 w-2 bg-green-500 rounded-full animate-ping" />
                        </div>
                        <span className="text-[10px] font-semibold text-green-700 leading-tight">Comprobante por WhatsApp</span>
                     </div>
                   </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  )
}
