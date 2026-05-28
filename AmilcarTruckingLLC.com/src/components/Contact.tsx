import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '703-296-9499',
    href: 'tel:7032969499',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'amilcartruckingllc@gmail.com',
    href: 'mailto:amilcartruckingllc@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Service Area',
    value: 'Virginia',
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Reach Out
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4">
            Contact <span className="text-orange-500">Info</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors duration-300">
                <info.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">
                {info.label}
              </p>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-slate-900 font-bold text-sm leading-snug hover:text-orange-500 transition-colors duration-200 break-all"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-slate-900 font-bold text-base">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
