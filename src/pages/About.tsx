import { motion } from 'framer-motion'
import { useContactModal } from '../context/ContactModalContext'
import miningImg from '../assets/home/miningImg.webp'

export default function About() {
  const { openModal } = useContactModal()

  return (
    <div className="relative bg-dark-900 text-white overflow-hidden">

      {/* Subtle industrial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.08),transparent_40%)] pointer-events-none" />

      {/* HERO */}
      <section
        className="relative h-[65vh] flex items-center"
        style={{
          backgroundImage: `url(${miningImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About SMJ (T) Limited
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-text-secondary max-w-2xl"
          >
            A Tanzanian company evolving from tourism roots into a trusted
            supplier for mining, industrial, logistics, and heavy equipment operations.
          </motion.p>
        </div>
      </section>

      {/* COMPANY EVOLUTION */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            Our Evolution
          </h2>

          <p className="text-text-secondary leading-relaxed mb-6">
            Founded in 2013 and headquartered in Mwanza, SMJ began as a travel
            and tours business serving local and international clients across Tanzania.
            Over time, our operational exposure to logistics, fleet coordination,
            and field-based support positioned us to expand into industrial supply.
          </p>

          <p className="text-text-secondary leading-relaxed">
            Today, SMJ (T) Limited operates across multiple sectors including:
            mining consumables supply, general industrial procurement, PPE sourcing,
            heavy equipment rental, and project-based logistics support.
          </p>
        </div>
      </section>

      {/* CURRENT OPERATIONS GRID */}
      <section className="py-20 px-6 bg-dark-850">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          <div>
            <h3 className="text-white font-semibold mb-3">Mining Consumables</h3>
            <p className="text-text-secondary text-sm">
              Diamond drilling tools, drill rods, core barrels,
              spares, and site-specific sourcing for exploration operations.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">General Supply</h3>
            <p className="text-text-secondary text-sm">
              PPE, industrial tools, lifting equipment,
              logistics support and operational procurement solutions.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Heavy Equipment Rental</h3>
            <p className="text-text-secondary text-sm">
              Excavators, crane trucks, graders,
              dump trucks and site-ready machinery for long-term deployment.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            What Drives Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-text-secondary">
            <div>
              <h3 className="text-white font-semibold mb-2">Operational Reliability</h3>
              Structured supply systems and consistent delivery standards.
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Local Strength</h3>
              Deep understanding of Tanzanian logistics and field conditions.
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Long-Term Partnerships</h3>
              Built on trust with mines, contractors, and suppliers.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center border-t border-dark-800">
        <h2 className="text-3xl font-semibold mb-6">
          Partner With SMJ
        </h2>

        <button onClick={openModal} className="btn-primary">
          Discuss Business Opportunities
        </button>
      </section>

    </div>
  )
}
