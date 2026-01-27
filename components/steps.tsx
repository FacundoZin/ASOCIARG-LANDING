import Image from "next/image"

const steps = [
  {
    number: 1,
    title: "Migracion De Datos",
    description:
      "Importamos su padron actual de socios de forma segura y rapida sin perdida de informacion.",
  },
  {
    number: 2,
    title: "Configuracion Del Sistema",
    description:
      "Te ayudamos a elegir los modulos y las configuraciones necesarias para que el sistema se adapte a su estructura operativa.",
  },
  {
    number: 3,
    title: "Capacitacion y Despliegue",
    description:
      "Entrenamos a su personal en el uso del sistema para cada una de sus areas.",
  },
]

export function Steps() {
  return (
    <section id="soluciones" className="py-16 sm:py-24 bg-muted/30 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Modernice su institucion en 3 simples pasos
            </h2>

            <div className="flex flex-col gap-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group max-w-md mx-auto lg:ml-auto w-full">
            {/* Elemento decorativo de fondo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
            
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/20 shadow-2xl ring-1 ring-black/5">
              <Image
                src="/casa-del-jubilado-v3.jpg"
                alt="Casa del Jubilado"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 448px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-4 border border-white/20 shadow-2xl max-w-[95%] mx-auto relative overflow-hidden">
                  {/* Sutil brillo interno */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                  
                  <div className="relative flex flex-col gap-2">
                    <p className="text-xs sm:text-sm text-white/90 leading-snug italic font-light line-clamp-4">
                      &quot;Antes de usar ASOCIARG, no teníamos una visión general de nada. 
                      Logramos centralizarlo todo, ordenar los cobros y trabajar con normalidad 
                      desde casa, independientemente de quién esté presente.&quot;
                    </p>

                    <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                      <p className="font-bold text-white text-xs">Oscar</p>
                      <span className="text-white/40 text-[10px]">•</span>
                      <p className="text-[10px] text-white/60 uppercase tracking-tight font-medium truncate">
                        Asoc. Civil Casa del Jubilado
                      </p>
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
