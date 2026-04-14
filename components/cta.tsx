"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { AlertCircle, Building2, Check, ChevronLeft, ChevronRight, Layout, Loader2, Mail, PartyPopper, Send } from "lucide-react"
import { useState } from "react"

const steps = [
  { id: 1, name: "Institución", icon: Building2 },
  { id: 2, name: "Funcionalidades", icon: Layout },
  { id: 3, name: "Contacto", icon: Mail },
]

const functionalities = [
  { id: "portalpagos", label: "Portal de pagos online" },
  { id: "linkdepago", label: "Link de pago" },
  { id: "cobrador", label: "Modulo para cobradores" },
  { id: "socios", label: "Gestion de socios" },
  { id: "salones", label: "Reservas de salones" },
  { id: "articulos", label: "Alquiler de articulos" },
  { id: "analiticas", label: "Analiticas" },
  { id: "viajes", label: "Organizacion de viajes" },
  { id: "notificacionpagowhastapp", label: "Notificaciones de pago por Whastapp" },
  { id: "comunicacionwhastapp", label: "Comunicacion institucional por whastapp" },
  { id: "perzonalizacion", label: "Funcionalidad personalizada" },
]

export function CTA() {
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    nombreAsociacion: "",
    cantidadSocios: "",
    ciudad: "",
    funcionalidades: [] as string[],
    nombreContacto: "",
    email: "",
    telefono: "",
    cargo: "",
  })

  const handleNext = () => {
    // Basic validation for Step 1
    if (currentStep === 1) {
      if (!formData.nombreAsociacion.trim()) {
        const input = document.getElementById('nombreAsociacion') as HTMLInputElement
        input?.focus()
        input?.classList.add('border-red-500', 'animate-shake')
        setTimeout(() => input?.classList.remove('animate-shake'), 500)
        return
      }
    }

    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const toggleFunctionality = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      funcionalidades: prev.funcionalidades.includes(id)
        ? prev.funcionalidades.filter((f) => f !== id)
        : [...prev.funcionalidades, id],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    const formDataWeb3 = new FormData()

    // Web3Forms configuration
    formDataWeb3.append("access_key", "d91f199f-ebc4-4600-bc56-23e983104708")
    formDataWeb3.append("subject", `🚀 Nueva Solicitud: ${formData.nombreAsociacion}`)
    formDataWeb3.append("from_name", "Landing AsociarG")

    // Mapping relevant information for the email body
    formDataWeb3.append("Nombre Asociación", formData.nombreAsociacion)
    formDataWeb3.append("Cantidad de Socios", formData.cantidadSocios || "No especificado")
    formDataWeb3.append("Ciudad", formData.ciudad || "No especificado")

    const selectedFuncs = formData.funcionalidades
      .map(id => functionalities.find(f => f.id === id)?.label)
      .filter(Boolean)
      .join(", ")

    formDataWeb3.append("Módulos Solicitados", selectedFuncs || "Ninguna seleccionado")
    formDataWeb3.append("Contacto", formData.nombreContacto)
    formDataWeb3.append("Email", formData.email)
    formDataWeb3.append("Teléfono", formData.telefono || "No especificado")
    formDataWeb3.append("Cargo", formData.cargo || "No especificado")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataWeb3
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        // Reset form after a brief delay or keep success state
        setFormData({
          nombreAsociacion: "",
          cantidadSocios: "",
          ciudad: "",
          funcionalidades: [],
          nombreContacto: "",
          email: "",
          telefono: "",
          cargo: "",
        })
      } else {
        setStatus('error')
        console.error("Web3Forms Error:", data)
      }
    } catch (error) {
      console.error("Critical submission error:", error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="py-12 sm:py-16 bg-[#001D3D] relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      {/* Elementos decorativos con colores de marca */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 sm:w-96 sm:h-96 bg-[#00478F]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 sm:w-96 sm:h-96 bg-[#39B54A]/10 rounded-full blur-3xl home" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#39B54A] mb-2">
            Solicita Tu Demo Gratuita
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl text-balance">
            Comience la transformación hoy mismo
          </h2>
          <p className="mt-2 text-base text-white/70 text-balance">
            Complete el formulario y reciba una propuesta personalizada para su asociación.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Progress Bar - Optimized for mobile */}
          <div className="max-w-xs sm:max-w-md mx-auto">
            <div className="relative flex justify-between">
              {/* Connector Lines */}
              <div className="absolute top-4 sm:top-5 left-0 w-full h-0.5 bg-white/20 -translate-y-1/2" />
              <div
                className="absolute top-4 sm:top-5 left-0 h-0.5 bg-[#39B54A] transition-all duration-500 -translate-y-1/2"
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              />

              {steps.map((step) => (
                <div key={step.id} className="relative z-10 flex flex-col items-center">
                  <div
                    className={cn(
                      "h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                      currentStep >= step.id
                        ? "bg-[#39B54A] border-[#39B54A] text-white shadow-[0_0_10px_rgba(57,181,74,0.3)]"
                        : "bg-[#003366] border-white/20 text-white/50"
                    )}
                  >
                    {currentStep > step.id ? (
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 stroke-[3px]" />
                    ) : (
                      <span className="text-xs sm:text-sm font-bold">{step.id}</span>
                    )}
                  </div>
                  {/* Label hidden on very small screens to avoid overflow */}
                  <span className={cn(
                    "absolute top-10 sm:top-12 text-[8px] sm:text-[10px] uppercase font-black tracking-widest whitespace-nowrap hidden sm:block",
                    currentStep >= step.id ? "text-[#39B54A]" : "text-white/40"
                  )}>
                    {step.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="pt-2 sm:pt-4">
            {status === 'success' ? (
              <div className="py-12 text-center animate-in zoom-in duration-500">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-[#39B54A]/20 mb-6">
                  <PartyPopper className="h-10 w-10 text-[#39B54A]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Solicitud Enviada!</h3>
                <p className="text-white/70 max-w-md mx-auto mb-8">
                  Gracias por contactarnos. Nuestro equipo analizará tu información y se pondrá en contacto contigo a la brevedad.
                </p>
                <Button
                  onClick={() => {
                    setStatus('idle')
                    setCurrentStep(1)
                  }}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-2 rounded-xl"
                >
                  Enviar otra solicitud
                </Button>
              </div>
            ) : (
              <>
                {currentStep === 1 && (
                  <div className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-right-4 duration-500 max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-1.5 sm:space-y-2 md:col-span-2">
                        <Label htmlFor="nombreAsociacion" className="text-white/90 text-sm font-medium ml-1">Nombre de la Asociación *</Label>
                        <Input
                          id="nombreAsociacion"
                          placeholder="Ej: Club Social y Deportivo"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/30 h-10 sm:h-11 rounded-xl focus:ring-[#00478F]/30 focus:border-[#00478F]/40 w-full"
                          value={formData.nombreAsociacion}
                          onChange={(e) => setFormData({ ...formData, nombreAsociacion: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="cantidadSocios" className="text-white/90 text-sm font-medium ml-1">Cantidad de Socios</Label>
                        <Select
                          onValueChange={(value) => setFormData({ ...formData, cantidadSocios: value })}
                          value={formData.cantidadSocios}
                        >
                          <SelectTrigger className="bg-white/10 border-white/20 text-white h-10 sm:h-11 rounded-xl focus:ring-[#0072CE]/30 w-full">
                            <SelectValue placeholder="Seleccione rango" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#001D3D] border-white/20 text-white">
                            <SelectItem value="500">Menos de 500</SelectItem>
                            <SelectItem value="500-2500">500 a 2500</SelectItem>
                            <SelectItem value="2500-5000">2500 - 5000</SelectItem>
                            <SelectItem value="5000+">Más de 5000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="ciudad" className="text-white/90 text-sm font-medium ml-1">Ciudad / Localidad</Label>
                        <Input
                          id="ciudad"
                          placeholder="Ej: Buenos Aires"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/30 h-10 sm:h-11 rounded-xl focus:ring-[#00478F]/30 focus:border-[#00478F]/40 w-full"
                          value={formData.ciudad}
                          onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                    <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-2 sm:mb-4">Selecciona las Funcionalidades</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                      {functionalities.map((func) => (
                        <button
                          key={func.id}
                          type="button"
                          role="checkbox"
                          aria-checked={formData.funcionalidades.includes(func.id)}
                          className={cn(
                            "flex items-center text-left space-x-3 p-2.5 sm:p-3.5 rounded-xl border transition-all cursor-pointer hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#39B54A]/50",
                            formData.funcionalidades.includes(func.id)
                              ? "bg-white/20 border-white/40 shadow-lg"
                              : "bg-white/5 border-white/10"
                          )}
                          onClick={() => toggleFunctionality(func.id)}
                        >
                          <div className={cn(
                            "h-4 w-4 sm:h-5 sm:w-5 rounded flex items-center justify-center border transition-colors shrink-0",
                            formData.funcionalidades.includes(func.id)
                              ? "bg-[#39B54A] border-[#39B54A] text-white"
                              : "border-white/30"
                          )}>
                            {formData.funcionalidades.includes(func.id) && <Check className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 stroke-[3px]" />}
                          </div>
                          <span className="flex-1 font-medium text-white text-xs sm:text-sm leading-tight">
                            {func.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-right-4 duration-500 max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="nombreContacto" className="text-white/90 text-sm font-medium ml-1">Nombre Completo *</Label>
                        <Input
                          id="nombreContacto"
                          placeholder="Tu nombre"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/30 h-10 sm:h-11 rounded-xl focus:ring-[#00478F]/30 focus:border-[#00478F]/40 w-full"
                          value={formData.nombreContacto}
                          onChange={(e) => setFormData({ ...formData, nombreContacto: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="email" className="text-white/90 text-sm font-medium ml-1">Email de Contacto *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="ejemplo@correo.com"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/30 h-10 sm:h-11 rounded-xl focus:ring-[#00478F]/30 focus:border-[#00478F]/40 w-full"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="telefono" className="text-white/90 text-sm font-medium ml-1">Teléfono</Label>
                        <Input
                          id="telefono"
                          placeholder="+54 11 1234-5678"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/30 h-10 sm:h-11 rounded-xl focus:ring-[#00478F]/30 focus:border-[#00478F]/40 w-full"
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="cargo" className="text-white/90 text-sm font-medium ml-1">Cargo en la Asociación</Label>
                        <Select
                          onValueChange={(value) => setFormData({ ...formData, cargo: value })}
                          value={formData.cargo}
                        >
                          <SelectTrigger className="bg-white/10 border-white/20 text-white h-10 sm:h-11 rounded-xl w-full">
                            <SelectValue placeholder="Seleccione cargo" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#001D3D] border-white/20 text-white">
                            <SelectItem value="presidente">Presidente/a</SelectItem>
                            <SelectItem value="tesorero">Tesorero/a</SelectItem>
                            <SelectItem value="secretario">Secretario/a</SelectItem>
                            <SelectItem value="administrativo">Administrativo/a</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-200 text-sm animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <p>Hubo un error al enviar el formulario. Por favor, intentalo de nuevo o contactanos directamente.</p>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleBack}
                    disabled={currentStep === 1 || loading}
                    className={cn(
                      "h-11 sm:h-12 px-6 rounded-xl transition-all font-semibold w-full sm:w-auto",
                      currentStep === 1
                        ? "text-white/20 bg-white/5 cursor-not-allowed border border-white/5"
                        : "text-white hover:bg-white/10 hover:text-white border border-white/10"
                    )}
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Anterior
                  </Button>

                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="bg-[#39B54A] hover:bg-[#39B54A]/90 text-white h-11 sm:h-12 px-8 sm:px-10 rounded-xl text-base font-bold shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                    >
                      Siguiente
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-[#39B54A] hover:bg-[#39B54A]/90 text-white h-11 sm:h-12 px-8 sm:px-10 rounded-xl text-base font-bold shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto min-w-[180px]"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Solicitud
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
