import { motion } from 'framer-motion'
import { Truck, Shield, Clock, MapPin, Award, Users } from 'lucide-react'

interface AboutProps {
  scrollToSection: (id: string) => void
}

const stats = [
  { icon: Clock, value: '10+', label: 'Years in Business' },
  { icon: Truck, value: '100%', label: 'Reliable Hauling' },
  { icon: Users, value: 'Pro', label: 'Licensed Drivers' },
  { icon: MapPin, value: 'VA', label: 'Service Area' },
]

const values = [
  {
    icon: Shield,
    title: 'Fully Licensed & Insured',
    desc: 'We operate with full commercial licensing and insurance coverage so every job is protected.',
  },
  {
    icon: Truck,
    title: 'Trucks Ready to Work',
    desc: 'Our fleet is maintained and available to take on hauling jobs of all sizes across the region.',
  },
  {
    icon: Award,
    title: 'Decade of Experience',
    desc: 'Over 10 years serving contractors, developers, and homeowners throughout Virginia.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function About({ scrollToSection }: AboutProps) {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
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
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4">
            Built on Trust, Driven
            <br />
            <span className="text-orange-500">by Results</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-5">
              Virginia's Trusted Hauling Partner Since Day One
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Amilcar Trucking LLC has been a trusted name in the Virginia hauling and
                material transport industry for over{' '}
                <strong className="text-slate-800">10 years</strong>. We started as a small
                operation with a commitment to reliability, and that same dedication drives
                every load we haul today.
              </p>
              <p>
                Our professional drivers are experienced, punctual, and ready to support
                your project from start to finish. Whether you're a general contractor
                needing job site material or a homeowner tackling a landscaping project,
                we have the equipment and the expertise to get it done.
              </p>
              <p>
                We take pride in serving the greater Virginia area with honest pricing,
                dependable schedules, and trucks that are always ready to work. Our fleet
                handles materials of all kinds — gravel, asphalt, mulch, sand, milling,
                and more.
              </p>
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors duration-200"
            >
              Work With Us
              <Truck className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500/10 rounded-xl mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values row */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative bg-slate-900 rounded-2xl p-7 overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500/15 rounded-xl mb-5">
                  <v.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="text-white font-bold text-lg mb-3">{v.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
