import { motion } from 'framer-motion'
import equipmentHireImg from '../assets/home/equipmentHireImg.webp'

import craneImg from '../assets/equipment/crane.webp'
import excavatorImg from '../assets/equipment/excavator.webp'
import dumpTruckImg from '../assets/equipment/dump-truck.webp'
import graderImg from '../assets/equipment/grader.webp'
import telehandlerImg from '../assets/equipment/telehandler.webp'
import bulldozerImg from '../assets/equipment/bulldozer.webp'

const equipmentCategories = [
  {
    title: 'Crane Trucks',
    description:
      'Heavy-duty crane truck hire solutions tailored for long-term infrastructure, mining, and construction projects requiring lifting precision and reliability.',
    image: craneImg,
  },
  {
    title: 'Excavators',
    description:
      'Reliable excavator hire for bulk earthworks, trenching, and structural groundwork across demanding project environments.',
    image: excavatorImg,
  },
  {
    title: 'Dump Trucks',
    description:
      'High-capacity dump truck hire for material transport across large-scale project sites with sustained operational demands.',
    image: dumpTruckImg,
  },
  {
    title: 'Graders',
    description:
      'Precision grading solutions for road construction, site leveling, and infrastructure preparation under long-term contracts.',
    image: graderImg,
  },
  {
    title: 'Telehandlers',
    description:
      'Versatile telehandler hire for site logistics, material handling, and elevated access support in structured project phases.',
    image: telehandlerImg,
  },
  {
    title: 'Bulldozers',
    description:
      'Powerful bulldozer hire designed for land clearing, bulk pushing, and foundational site preparation in heavy-duty operations.',
    image: bulldozerImg,
  },
]

export default function EquipmentHire() {
  return (
    <div className="bg-dark-950 text-white">

      {/* HERO */}
      <section
        className="relative h-[60vh] flex items-center"
        style={{
          backgroundImage: `url(${equipmentHireImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Heavy Equipment Rental
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-text-secondary max-w-2xl"
          >
            Strategic heavy machinery hire solutions structured for long-term
            project deployment across mining, construction, and industrial sectors.
          </motion.p>
        </div>
      </section>

      {/* EQUIPMENT GRID */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">

            {equipmentCategories.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-[42vh] rounded-xl overflow-hidden group cursor-pointer"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/75 group-hover:bg-black/65 transition-all duration-500" />

                {/* Industrial gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <h2 className="text-2xl font-semibold mb-3">
                    {item.title}
                  </h2>

                  <p className="text-sm text-text-secondary max-w-md">
                    {item.description}
                  </p>
                </div>

                {/* Red accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-red transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-dark-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Discuss Your Project Requirements
          </h2>
          <p className="text-text-secondary mb-8">
            We structure equipment hire around long-term operational efficiency,
            project scale, and deployment timelines.
          </p>

          <button className="btn-primary">
            Request Equipment Hire Proposal
          </button>
        </div>
      </section>

    </div>
  )
}
