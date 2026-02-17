import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import PageSection from '../components/ui/PageSection'
import generalSupplyImg from '../assets/home/generalSupplyImg.png'

import hardware from '../assets/general_supply/hardware.jpg'
import lifting from '../assets/general_supply/lifting-equipment.jpg'
import office from '../assets/general_supply/office-supplies.jpg'
import ppe from '../assets/general_supply/ppe.jpeg'

export default function GeneralSupply() {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [index, setIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)

  const products = [
    { img: hardware, label: 'Industrial Tools & Hardware' },
    { img: lifting, label: 'Lifting Equipment & Site Handling' },
    { img: office, label: 'Office & Operational Supplies' },
    { img: ppe, label: 'Personal Protective Equipment (PPE)' },
  ]

  /* ---------------- RESPONSIVE CARDS ---------------- */
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 768) setCardsPerView(1)
      else if (window.innerWidth < 1024) setCardsPerView(2)
      else setCardsPerView(3)
    }

    updateCards()
    window.addEventListener('resize', updateCards)
    return () => window.removeEventListener('resize', updateCards)
  }, [])

  const maxIndex = Math.max(0, products.length - cardsPerView)

  const scrollToIndex = (i: number) => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const cardWidth = container.offsetWidth / cardsPerView
    container.scrollTo({
      left: i * cardWidth,
      behavior: 'smooth',
    })
    setIndex(i)
  }

  /* ---------------- AUTOSLIDE ---------------- */
  useEffect(() => {
    if (products.length <= cardsPerView) return

    const interval = setInterval(() => {
      setIndex(prev => {
        const next = prev >= maxIndex ? maxIndex : prev + 1
        scrollToIndex(next)
        return next
      })
    }, 4500)

    return () => clearInterval(interval)
  }, [maxIndex, cardsPerView])

  return (
    <div className="relative bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
      
      {/* HERO */}
      <section
        className="relative h-[60vh] flex items-center"
        style={{
          backgroundImage: `url(${generalSupplyImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-7xl px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            General Supply
          </h1>
          <p className="text-text-secondary max-w-2xl">
            End-to-end sourcing of PPE, logistics support, and industrial
            essentials for operational environments.
          </p>
        </motion.div>
      </section>

      {/* PRODUCT RANGE CAROUSEL */}
      <PageSection title="Product Range">
        <div className="relative">

          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-dark-950 to-transparent z-20" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-dark-950 to-transparent z-20" />

          {/* Chevron Left */}
          {index > 0 && (
            <button
              onClick={() => scrollToIndex(index - 1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30
                         bg-dark-800/70 backdrop-blur px-3 py-2 rounded-full
                         hover:bg-brand-red transition"
            >
              ‹
            </button>
          )}

          {/* Chevron Right */}
          {index < maxIndex && (
            <button
              onClick={() => scrollToIndex(index + 1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30
                         bg-dark-800/70 backdrop-blur px-3 py-2 rounded-full
                         hover:bg-brand-red transition"
            >
              ›
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar"
          >
            {products.map((item, i) => {
              const isActive = i === index

              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04 }}
                  className={`
                    snap-center flex-shrink-0
                    w-[90%] md:w-[45%] lg:w-[30%]
                    rounded-xl overflow-hidden
                    border border-dark-700
                    bg-dark-850/80 backdrop-blur
                    transition-all duration-500
                    ${isActive ? 'scale-100' : 'scale-95 opacity-70'}
                  `}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-dark-900">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-white">
                      {item.label}
                    </h3>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </PageSection>

      {/* OUR SUPPLY CATEGORIES */}
      <PageSection title="Our Supply Categories">
        <ul className="grid md:grid-cols-2 gap-6 text-text-secondary">
          <li>Personal Protective Equipment (PPE)</li>
          <li>Industrial tools & consumables</li>
          <li>Logistics & procurement support</li>
          <li>Office & site operational supplies</li>
          <li>Software & systems sourcing (on request)</li>
        </ul>
      </PageSection>

      {/* WHY SMJ 
      <PageSection title="Why SMJ">
        <p className="text-text-secondary max-w-3xl">
          We simplify procurement by acting as a single point of contact,
          reducing delays, vendor complexity, and supply risk while ensuring
          consistent quality delivery.
        </p>
      </PageSection> */}

      {/* CTA */}
      <PageSection title="Get in Touch">
        <button className="btn-primary">
          Discuss General Supply Requirements
        </button>
      </PageSection>
    </div>
  )
}
