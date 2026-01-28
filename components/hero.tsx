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
              Sistema de Gestión Integral para {" "}
              <span className="text-primary">Asociaciones Civiles</span>
            </h1>

            <div className="flex flex-col gap-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
                Socios, cobranzas, pagos online, alquileres, notificaciones automáticas y balances claros, todo esto y mucho más, pensado para asociaciones civiles que quieren ordenar su gestión sin complicarse.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="#contacto">
                  Solicitar cotización
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#caracteristicas">Ver funcionalidades</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-[280px] h-[580px] sm:max-w-4xl sm:h-[450px] lg:max-w-5xl lg:h-[520px] overflow-hidden rounded-[3rem] sm:rounded-2xl border-[8px] border-slate-900 sm:border bg-slate-50 shadow-2xl transition-all duration-300 ring-1 ring-slate-800/50">
              {/* Mobile Hardware Details */}
              <div className="absolute top-0 left-1/2 z-20 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-900 sm:hidden" />
              <div className="absolute bottom-1.5 left-1/2 z-20 h-1 w-20 -translate-x-1/2 rounded-full bg-slate-400/30 sm:hidden" /> 
              
              {/* Browser/System Bar */}
              <div className="flex items-center gap-1.5 border-b border-slate-800 bg-slate-900 px-4 py-3 pt-6 sm:pt-3">
                <div className="hidden sm:flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex h-5 sm:h-6 w-full max-w-[200px] sm:max-w-md items-center rounded-md bg-slate-800 px-2 sm:px-3 text-[8px] sm:text-[10px] text-slate-300/80 truncate mx-auto sm:ml-4">
                  tuasociacion.com/dashboard
                </div>
              </div>

              {/* System Content Mock */}
              <div className="flex h-[calc(100%-44px)] flex-col overflow-hidden bg-slate-50 sm:rounded-none rounded-b-[2.5rem] relative">
                {/* Ultra-Light Dark Glass Preview Badge */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 sm:bottom-5 sm:left-auto sm:right-5 sm:translate-x-0 z-40 pointer-events-none w-fit">
                  <div className="flex items-center gap-1.5 sm:gap-2.5 rounded-full sm:rounded-xl border border-slate-900/[0.05] bg-slate-900/[0.03] px-3 py-1 sm:px-4 sm:py-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.02)] backdrop-blur-2xl transition-all whitespace-nowrap">
                    <div className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500/40 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                    </div>
                    <span className="text-[8px] sm:text-[10px] font-bold text-slate-500/60 uppercase tracking-[0.15em] sm:tracking-[0.25em]">
                      Vista Previa del sistema
                    </span>
                  </div>
                </div>

                <div className="flex-1 overflow-auto p-3 sm:p-4 text-[10px] sm:text-[11px] custom-scrollbar relative z-10">
                  {/* System Header */}
                  <div className="mb-4 sm:mb-6 flex items-center justify-between rounded-lg bg-white p-2.5 sm:p-3 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 text-white">
                        <LayoutDashboard className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 leading-tight">Asociación Civil Casa del Jubilado</h3>
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
                  <div className="mb-3 sm:mb-4 flex items-center gap-1 text-[9px] text-slate-400">
                    <Home className="h-3 w-3" />
                    <span>Inicio</span>
                    <ChevronRight className="h-2 w-2" />
                    <span className="text-slate-600">Panel General</span>
                  </div>

                  {/* Welcome Message */}
                  <div className="mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-xl font-bold text-slate-800 leading-tight">Bienvenido de nuevo</h2>
                    <p className="text-slate-500">Seleccione un módulo para gestionar las operaciones de su asociación.</p>
                  </div>

                  {/* Modules Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { title: "Gestión Socios", desc: "Administración completa del padrón de socios.", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
                      { title: "Gestión Reservas", desc: "Control de calendario y disponibilidad de espacios.", icon: Calendar, color: "text-purple-500", bg: "bg-purple-50" },
                      { title: "Alquiler salones", desc: "Gestión de solicitudes y cobros de espacios.", icon: Home, color: "text-emerald-500", bg: "bg-emerald-50" },
                      { title: "Control Cobranzas", desc: "Manejo de cobranzas desde un solo lugar.", icon: Wallet, color: "text-teal-500", bg: "bg-teal-50" },
                      { title: "Gestión de viajes", desc: "Organización de excursiones y turismo.", icon: Map, color: "text-indigo-500", bg: "bg-indigo-50" },
                      { title: "Registrar pago", desc: "Ingreso rápido de cuotas y movimientos.", icon: DollarSign, color: "text-green-500", bg: "bg-green-50" },
                      { title: "Balances", desc: "Reportes económicos detallados.", icon: Package, color: "text-amber-500", bg: "bg-amber-50" },
                      { title: "Notificaciones", desc: "Avisos automáticos por WhatsApp.", icon: RefreshCw, color: "text-rose-500", bg: "bg-rose-50" },
                      { title: "Configuración", desc: "Ajustes generales del sistema.", icon: LayoutDashboard, color: "text-slate-500", bg: "bg-slate-50" },
                    ].map((module, i) => (
                      <div key={i} className="group relative flex flex-col items-start gap-1.5 sm:gap-2 rounded-xl border border-white bg-white/60 p-2.5 sm:p-3 shadow-sm transition-all hover:bg-white hover:shadow-md">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${module.bg} ${module.color}`}>
                          <module.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800">{module.title}</h4>
                          <p className="text-[7.5px] sm:text-[8px] text-slate-500 max-w-[120px]">{module.desc}</p>
                        </div>
                        <ChevronRight className="absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-300 transition-colors group-hover:text-slate-500" />
                      </div>
                    ))}
                  </div>

                  {/* System Footer (Inside Mock) */}
                  <div className="mt-8 flex items-center justify-between border-t pt-4 text-[8px] text-slate-400">
                    <div className="flex items-center gap-4">
                      <span>© 2026 Asociación Civil Casa del Jubilado</span>
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
