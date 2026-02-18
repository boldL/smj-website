// Home.tsx
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import equipmentHireImg from '../assets/home/equipmentHireImg.webp'
import generalSupplyImg from '../assets/home/generalSupplyImg.webp'
import miningImg from '../assets/home/miningImg.webp'
import travelImg from '../assets/home/travelImg.webp'

const sections = [
  {
    title: 'Mining Consumables',
    subtitle: 'Diamond Drilling Tools Supply & Technical Support',
    route: '/mining-supply',
    image: miningImg,
  },
  {
    title: 'General Supply',
    subtitle: 'PPE, Logistics Solutions & Industrial Sourcing',
    route: '/general-supply',
    image: generalSupplyImg,
  },
  {
    title: 'Travel, Safaris & Vehicle Hire',
    subtitle: 'Leisure-first Mobility',
    route: '/travel-logistics',
    image: travelImg,
  },
  {
    title: 'Heavy Equipment Rental',
    subtitle: 'Reliable Machines For Demanding Environments',
    route: '/equipment-hire',
    image: equipmentHireImg,
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="
                    min-h-screen
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-4
                    ">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          onClick={() => navigate(section.route)}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.12,
            duration: 0.6,
            ease: 'easeOut',
          }}
          whileHover={{ scale: 1.04 }}
          className="
            group relative cursor-pointer overflow-hidden
            flex items-center justify-center
            h-[70vh] md:h-screen
          "
          style={{
            backgroundImage: `url(${section.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="
                absolute -inset-1/2
                bg-[radial-gradient(ellipse_at_top_left,rgba(193,18,31,0.25),transparent_60%)]
                animate-gradient-slow
              "
            />
            <div
              className="
                absolute -inset-1/2
                bg-[radial-gradient(ellipse_at_bottom_right,rgba(193,18,31,0.15),transparent_60%)]
                animate-gradient-slower
              "
            />
          </div>

          {/* Dark overlay */}
          <div
            className="
              absolute inset-0
              bg-black/25
              group-hover:bg-black/15
              transition-colors duration-500
            "
          />

          {/* Content */}
          <div
            className="
              relative z-10 text-center px-6 max-w-sm
              transition-all duration-500 ease-out
              translate-y-4 opacity-90
              group-hover:translate-y-0 group-hover:opacity-100
            "
          >
            <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-3">
              {section.title}
            </h1>
            <p className="text-text-secondary text-sm lg:text-base mb-6">
              {section.subtitle}
            </p>

            <span
              className="
                inline-block text-sm font-medium tracking-wide
                text-brand-red
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
            >
              Click to explore →
            </span>
          </div>

          {/* Accent bar */}
          <div
            className="
              absolute bottom-0 left-0 h-1 w-0
              bg-brand-red
              transition-all duration-500
              group-hover:w-full
            "
          />
        </motion.div>
      ))}
    </div>
  )
}
