import { useNavigate } from 'react-router-dom'

import equipmentHireImg from '../assets/home/equipmentHireImg.png'
import generalSupplyImg from '../assets/home/generalSupplyImg.png'
import miningImg from '../assets/home/miningImg.png'
import travelImg from '../assets/home/travelImg.png'

const sections = [
  {
    title: 'Mining Equipment & Consumables',
    subtitle: 'Diamond drilling tools & technical supply',
    route: '/mining-supply',
    image: miningImg,
  },
  {
    title: 'General Supply',
    subtitle: 'PPE, logistics & industrial sourcing',
    route: '/general-supply',
    image: generalSupplyImg,
  },
  {
    title: 'Travel, Safaris & Vehicle Hire',
    subtitle: 'Leisure-first mobility with corporate support',
    route: '/travel-logistics',
    image: travelImg,
  },
  {
    title: 'Equipment & Machinery Hire',
    subtitle: 'Reliable machines for demanding environments',
    route: '/equipment-hire',
    image: equipmentHireImg,
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="h-screen grid grid-cols-4">
      {sections.map((section, index) => (
        <div
          key={index}
          onClick={() => navigate(section.route)}
          className="
            group relative cursor-pointer overflow-hidden
            flex items-center justify-center
            transition-all duration-500 ease-out
            hover:z-10 hover:scale-[1.02]
          "
          style={{
            backgroundImage: `url(${section.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay */}
          <div className="
            absolute inset-0
            bg-black/60
            group-hover:bg-black/40
            transition-colors duration-500
          " />

          {/* Content */}
          <div className="
            relative z-10 text-center px-6 max-w-sm
            transition-all duration-500 ease-out
            translate-y-4 opacity-90
            group-hover:translate-y-0 group-hover:opacity-100
          ">
            <h1 className="text-2xl lg:text-3xl font-bold mb-3">
              {section.title}
            </h1>
            <p className="text-text-secondary text-sm lg:text-base mb-6">
              {section.subtitle}
            </p>

            <span className="
              inline-block text-sm font-medium tracking-wide
              text-brand-red
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500
            ">
              Click to explore →
            </span>
          </div>

          {/* Accent bar */}
          <div className="
            absolute bottom-0 left-0 h-1 w-0
            bg-brand-red
            transition-all duration-500
            group-hover:w-full
          " />
        </div>
      ))}
    </div>
  )
}
