import { Truck, Phone, Mail, MapPin, ChevronRight } from 'lucide-react'

interface FooterProps {
  scrollToSection: (id: string) => void
}

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
]

const services = ['Gravel', 'Asphalt', 'Mulch', 'Sand', 'Milling', 'Job Site Support']

export default function Footer({ scrollToSection }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div className="leading-none">
                <div className="font-black text-white text-base">AMILCAR</div>
                <div className="text-orange-500 text-[10px] font-bold tracking-[0.2em] uppercase">
                  Trucking LLC
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Reliable trucking and material delivery services across the Virginia area.
              Over 10 years of getting the job done right — on time, every time.
            </p>
            <div className="space-y-3">
              <a
                href="tel:7032969499"
                className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm group"
              >
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                703-296-9499
              </a>
              <a
                href="mailto:amilcartruckingllc@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm group"
              >
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                amilcartruckingllc@gmail.com
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                Virginia, USA
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="flex items-center gap-1.5 text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -ml-1 transition-opacity duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="flex items-center gap-1.5 text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -ml-1 transition-opacity duration-200" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {year} Amilcar Trucking LLC. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Serving Virginia with reliable hauling services
          </p>
        </div>
      </div>
    </footer>
  )
}
