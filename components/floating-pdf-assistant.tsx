"use client"

import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronRight, Download, FileText, X } from "lucide-react"
import { useEffect, useState } from "react"

export default function FloatingPDFAssistant() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [hasNewNotification, setHasNewNotification] = useState(true)

  useEffect(() => {
    // Show the side tab after 8 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Auto-expand after 15 seconds total (8s + 7s)
      setTimeout(() => setIsExpanded(true), 7000)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  // Auto-close logic
  useEffect(() => {
    let closeTimer: NodeJS.Timeout
    if (isExpanded && !isMinimized) {
      closeTimer = setTimeout(() => {
        setIsExpanded(false)
        setHasNewNotification(true) // Show badge when it auto-closes
      }, 6000) // 6 seconds visibility
    }
    return () => clearTimeout(closeTimer)
  }, [isExpanded, isMinimized])

  if (!isVisible) return null

  return (
    <>
      {/* Re-open Side Tab (When not expanded) */}
      <AnimatePresence>
        {(!isExpanded || isMinimized) && (
          <motion.button
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            onClick={() => {
              setIsExpanded(true)
              setIsMinimized(false)
              setHasNewNotification(false)
            }}
            className="fixed left-0 bottom-4 sm:bottom-6 z-[60] flex items-center gap-2 rounded-r-xl border border-l-0 border-[#16a34a]/10 bg-white/40 py-4 px-2 shadow-sm backdrop-blur-md transition-all hover:bg-white/60 hover:pr-4 group"
          >
            <div className="relative flex flex-col items-center gap-2">
              <FileText className="h-5 w-5 text-[#16a34a]/70" />
              <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-bold uppercase tracking-widest text-[#16a34a]/60">
                Info PDF
              </span>

              {/* Notification Badge */}
              {hasNewNotification && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border border-white"></span>
                </span>
              )}
            </div>
            <ChevronRight className="h-4 w-4 text-[#16a34a]/50 opacity-0 -ml-4 transition-all group-hover:opacity-100 group-hover:ml-0" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expanded Side Panel */}
      <AnimatePresence>
        {isExpanded && !isMinimized && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="fixed left-0 bottom-4 sm:bottom-6 z-[65] w-[280px] sm:w-[300px] rounded-r-3xl border border-l-0 border-[#16a34a]/10 bg-white/60 p-6 shadow-2xl backdrop-blur-xl ring-1 ring-black/5 overflow-hidden"
          >
            {/* Auto-close Progress Bar */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 6, ease: "linear" }}
              className="absolute top-0 left-0 h-1 bg-[#16a34a]/30"
            />

            {/* Close/Minimize button */}
            <button
              onClick={() => {
                setIsExpanded(false)
                setHasNewNotification(false)
              }}
              className="absolute top-4 right-4 p-1.5 text-muted-foreground/60 hover:text-foreground hover:bg-black/5 rounded-full transition-all"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16a34a]/10 text-[#16a34a] backdrop-blur-sm relative">
                  <FileText className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 rounded-full bg-[#16a34a] border-2 border-white animate-pulse" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900/80 leading-none text-pretty">Dossier Informativo</h3>
                  <p className="text-[10px] text-[#16a34a] font-semibold uppercase tracking-wider mt-1.5">Descubrí ASOCIARG</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-slate-600/90 leading-relaxed font-medium text-pretty">
                  ¿Querés potenciar tu asociación? Descubrí todos los beneficios y funciones exclusivas de ASOCIARG en nuestro dossier.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400/80 uppercase tracking-tight pt-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#16a34a] animate-pulse" />
                  Actualizado • Febrero 2026
                </div>
              </div>

              <Button
                asChild
                className="w-full gap-2 shadow-lg shadow-[#16a34a]/20 transition-all group h-11 bg-[#16a34a] hover:bg-[#15803d] text-white border-0"
              >
                <a href="/Presentación ASOCIARG.pdf" download="Presentacion_ASOCIARG.pdf">
                  <Download className="h-4 w-4 group-hover:animate-bounce" />
                  Descargar Ahora
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
