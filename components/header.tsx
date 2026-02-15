"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Características", href: "#caracteristicas" },
  { label: "Integraciones", href: "#integraciones" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Basic active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(`#${current}`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "border-b border-border/40 bg-background/80 backdrop-blur-md shadow-sm h-16" 
          : "border-b border-transparent bg-background/0 h-20"
      )}
    >
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <motion.div 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="h-full flex items-center"
        >
          <Link 
            href="#inicio" 
            className="group relative flex items-center overflow-hidden h-full w-48 sm:w-64"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Image
              src="/logo-asociarg.png"
              alt="ASOCIARG"
              width={300}
              height={50}
              className={cn(
                "h-full w-full object-contain transform-gpu transition-all duration-300",
                isScrolled ? "scale-[1.6]" : "scale-[2.0]"
              )}
              priority
            />
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3,
                delay: 0.2 + (index * 0.05),
                ease: "easeOut"
              }}
            >
              <Link
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:text-primary",
                  activeSection === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
          >
            <Button 
              asChild 
              size={isScrolled ? "sm" : "default"} 
              className="transition-all duration-300 rounded-full font-semibold px-6 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              <Link href="#contacto">Solicita tu cotización</Link>
            </Button>
          </motion.div>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </motion.div>

      {/* Subtle bottom line details */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          />
        )}
      </AnimatePresence>


      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop oscuro para cerrar el menú al hacer click fuera */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm md:hidden"
            />
            
            {/* Panel lateral del menú */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-[70] h-screen w-[300px] border-l border-border bg-background p-6 pb-24 shadow-2xl md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-lg font-bold">Menú</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-muted"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto flex flex-col gap-4 pr-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="block py-2 text-xl font-medium text-muted-foreground transition-colors hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-auto pt-6 border-t">
                  <Button asChild className="w-full py-6 text-lg rounded-xl font-bold shadow-lg shadow-primary/10">
                    <Link href="#contacto" onClick={() => setMobileMenuOpen(false)}>
                      Solicita tu cotización
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
