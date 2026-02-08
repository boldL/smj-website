import { useNavigate } from 'react-router-dom'

const sections = [
  {
    title: 'Mining Equipment & Consumables',
    subtitle: 'Diamond drilling tools & technical supply',
    route: '/mining-supply',
    accent: 'from-neutral-900 to-neutral-800',
  },
  {
    title: 'General Supply',
    subtitle: 'PPE, logistics & industrial sourcing',
    route: '/general-supply',
    accent: 'from-neutral-800 to-neutral-700',
  },
  {
    title: 'Travel, Safaris & Vehicle Hire',
    subtitle: 'Leisure-first mobility with corporate support',
    route: '/travel-logistics',
    accent: 'from-neutral-700 to-neutral-800',
  },
  {
    title: 'Equipment & Machinery Hire',
    subtitle: 'Reliable machines for demanding environments',
    route: '/equipment-hire',
    accent: 'from-neutral-800 to-neutral-900',
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
          className={`
            relative cursor-pointer overflow-hidden
            flex items-center justify-center
            bg-gradient-to-b ${section.accent}
            transition-all duration-500
            hover:z-10 hover:scale-[1.02]
          `}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 hover:bg-black/30 transition" />

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-sm">
            <h1 className="text-2xl lg:text-3xl font-bold mb-3">
              {section.title}
            </h1>
            <p className="text-text-secondary text-sm lg:text-base">
              {section.subtitle}
            </p>
          </div>

          {/* Hover accent bar */}
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-red transition-all duration-500 hover:w-full" />
        </div>
      ))}
    </div>
  )
}
