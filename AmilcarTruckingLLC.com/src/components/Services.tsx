import { motion } from 'framer-motion'
import { Truck, Package, Layers, Leaf, HardHat, Wrench } from 'lucide-react'


const primaryServices = [
  {
    icon: Layers,
    name: 'Gravel',
    description:
      'Crushed stone and gravel transported to driveways, roadways, drainage sites, and construction foundations.',
    accent: '#f97316',
  },
  {
    icon: Wrench,
    name: 'Asphalt',
    description:
      'Hot mix and cold patch asphalt hauled to your job site, ready for paving and road repair projects.',
    accent: '#f97316',
  },
  {
    icon: Leaf,
    name: 'Mulch',
    description:
      'Bulk mulch hauled for landscaping, erosion control, and garden bed coverage — any quantity.',
    accent: '#f97316',
  },
  {
    icon: Package,
    name: 'Sand',
    description:
      'Mason sand, fill sand, and specialty sand transported to residential and commercial job sites.',
    accent: '#f97316',
  },
  {
    icon: Truck,
    name: 'Milling',
    description:
      'Recycled asphalt millings for cost-effective driveways, parking areas, and base layer applications.',
    accent: '#f97316',
  },
  {
    icon: HardHat,
    name: 'Job Site Support',
    description:
      'On-demand hauling and material support to keep your project running on schedule, every day.',
    accent: '#f97316',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
}

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24 lg:py-32">
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
            What We Haul
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4">
            Materials We Transport
            <br />
            <span className="text-orange-500">All Across Virginia</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            From single-load hauls to large-scale project support, Amilcar Trucking LLC
            handles it all with speed and professionalism.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {primaryServices.map((service, i) => (
            <motion.div
              key={service.name}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:border-orange-100 transition-all duration-300 group cursor-default"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-50 rounded-2xl mb-5 group-hover:bg-orange-500 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-500 transition-colors duration-200">
                {service.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>

              {/* Hover accent line */}
              <div className="mt-5 w-0 group-hover:w-12 h-0.5 bg-orange-500 rounded-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
