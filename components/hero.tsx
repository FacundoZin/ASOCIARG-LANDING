import Link from "next/link"
import { 
  ArrowRight, 
  RefreshCw, 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Package, 
  Wallet, 
  Map, 
  DollarSign, 
  Home, 
  ChevronRight 
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <RefreshCw className="h-4 w-4" />
              <span>Version 2.0 Enterprise Edition</span>
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Gestion Integral para su{" "}
              <span className="text-primary">Asociacion Civil</span>
            </h1>

            <div className="flex flex-col gap-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
                Gestión completa del padrón de socios, control de cobranzas y pagos online, notificaciones automáticas por WhatsApp, balances generales y administración de alquileres de salones.
                Todo esto y mucho más integrado en una sola plataforma, diseñada para simplificar la administración de Asociaciones Civiles.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="#contacto">
                  Comenzar ahora
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#caracteristicas">Ver funcionalidades</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-video sm:aspect-[4/3] lg:aspect-[16/11] max-w-4xl overflow-hidden rounded-2xl border bg-slate-50 shadow-2xl">
              {/* Browser Header Bar */}
              <div className="flex items-center gap-1.5 border-b border-slate-800 bg-slate-900 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="ml-4 flex h-6 w-full max-w-md items-center rounded-md bg-slate-800 px-3 text-[10px] text-slate-300/80">
                  tuasociacion.com/dashboard
                </div>
              </div>

              {/* System Content Mock */}
              <div className="flex h-[calc(100%-44px)] flex-col overflow-hidden bg-slate-50">
                <div className="flex-1 overflow-auto p-4 text-[10px] sm:text-[11px] custom-scrollbar">
                  {/* System Header */}
                  <div className="mb-6 flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 text-white">
                        <LayoutDashboard className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 leading-tight">Sistema Club Abuelos</h3>
                        <p className="text-[8px] text-slate-500 uppercase tracking-wider">Panel de Administración</p>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-3 text-right">
                      <div>
                        <p className="font-medium text-slate-700">Administrador</p>
                        <p className="text-[8px] text-slate-400">DOMINGO, 18 ENE</p>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                        AD
                      </div>
                    </div>
                  </div>

                  {/* Breadcrumbs */}
                  <div className="mb-4 flex items-center gap-1 text-[9px] text-slate-400">
                    <Home className="h-3 w-3" />
                    <span>Inicio</span>
                    <ChevronRight className="h-2 w-2" />
                    <span className="text-slate-600">Panel General</span>
                  </div>

                  {/* Welcome Message */}
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-slate-800">Bienvenido de nuevo</h2>
                    <p className="text-slate-500">Seleccione un módulo para gestionar las operaciones del club.</p>
                  </div>

                  {/* Modules Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      { title: "Gestión Socios", desc: "Administración completa del padrón de socios.", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
                      { title: "Gestión Reservas", desc: "Control de calendario y disponibilidad de espacios.", icon: Calendar, color: "text-purple-500", bg: "bg-purple-50" },
                      { title: "Alquiler de artículos", desc: "Préstamo y devolución de inventario.", icon: Package, color: "text-cyan-500", bg: "bg-cyan-50" },
                      { title: "Módulo para cobradores", desc: "Manejo de cobranzas desde un solo lugar.", icon: Wallet, color: "text-teal-500", bg: "bg-teal-50" },
                      { title: "Gestión de viajes", desc: "Organización de excursiones y turismo.", icon: Map, color: "text-emerald-500", bg: "bg-emerald-50" },
                      { title: "Registrar pago", desc: "Ingreso rápido de cuotas y movimientos.", icon: DollarSign, color: "text-green-500", bg: "bg-green-50" },
                    ].map((module, i) => (
                      <div key={i} className="group relative flex flex-col items-start gap-2 rounded-xl border border-white bg-white/60 p-3 shadow-sm transition-all hover:bg-white hover:shadow-md">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${module.bg} ${module.color}`}>
                          <module.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800">{module.title}</h4>
                          <p className="text-[8px] text-slate-500 max-w-[120px]">{module.desc}</p>
                        </div>
                        <ChevronRight className="absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-300 transition-colors group-hover:text-slate-500" />
                      </div>
                    ))}
                  </div>

                  {/* System Footer (Inside Mock) */}
                  <div className="mt-8 flex items-center justify-between border-t pt-4 text-[8px] text-slate-400">
                    <div className="flex items-center gap-4">
                      <span>© 2026 Sistema Club Abuelos</span>
                      <span className="hidden sm:inline">Versión 2.0.0 - Enterprise Edition</span>
                    </div>
                    <div className="flex gap-3">
                      <span>Soporte</span>
                      <span>Privacidad</span>
                      <span>Términos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
