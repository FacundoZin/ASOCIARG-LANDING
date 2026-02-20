import { Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  producto: [
    { label: "Módulos", href: "#caracteristicas" },
    { label: "Cómo Funciona", href: "#como-funciona" },
    { label: "Portal del Socio", href: "#integraciones" },
    { label: "Pagos Online", href: "#integraciones" },
  ],
  siguenos: [
    { label: "Instagram ASOCIARG", href: "https://www.instagram.com/asociarg/", icon: Instagram },
    { label: "Instagram Syntrax", href: "https://www.instagram.com/syntrax.software/", icon: Instagram },
    { label: "LinkedIn Syntrax", href: "https://www.linkedin.com/company/syntrax-software/", icon: Linkedin },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Column 1: Logo & Social (Mobile Friendly) */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="relative flex items-center overflow-hidden h-16 w-48 -ml-10">
              <Image
                src="/logo-asociarg.png"
                alt="logo de ASOCIARG"
                width={300}
                height={100}
                className="h-full w-full object-contain scale-[1.8] transform-gpu"
                priority
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Solución definitiva para la gestión de asociaciones civiles,
              clubes y organizaciones sin fines de lucro. Potenciando la transparencia y eficiencia.
            </p>
            <div className="flex gap-4">
              {footerLinks.siguenos.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Product Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-foreground">Producto</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.producto.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact/Company Info */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-foreground">Síguenos</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.siguenos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary flex items-center gap-2"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 ASOCIARG by Syntrax Software. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-tighter">
            Enterprise Edition
          </p>
        </div>
      </div>
    </footer>
  )
}
