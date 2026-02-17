import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import PageSection from '../components/ui/PageSection'

import miningImg from '../assets/home/miningImg.png'

import drillRods from '../assets/mining/drill-rods.jpg'
import drillCons from '../assets/mining/drill_cons.png'
import drillingBits from '../assets/mining/dd-bits.jpg'
import headAssembly from '../assets/mining/head-assembly.jpg'
import overshot from '../assets/mining/overshot.jpg'
import reamerBit from '../assets/mining/reamer-and-bit.jpg'
import waterSwivel from '../assets/mining/water-swivel.jpg'
import wrenches from '../assets/mining/wrenches.jpg'

const products = [
  { img: drillRods, label: 'Drill Rods' },
  { img: drillCons, label: 'Head & Overshot Assy Parts' },
  { img: drillingBits, label: 'Core & Drill Bits' },
  { img: headAssembly, label: 'Head Assembly' },
  { img: overshot, label: 'Overshot Assemblies' },
  { img: reamerBit, label: 'Reamers & Bit Systems' },
  { img: waterSwivel, label: 'Water Swivels' },
  { img: wrenches, label: 'Rod Wrenches' },
]

function ProductCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const scrollByCards = (direction: 'left' | 'right') => {
    if (!containerRef.current) return

    const container = containerRef.current
    const cardWidth = container.firstElementChild?.clientWidth || 0
    const gap = 32
    const scrollAmount = cardWidth + gap

    container.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (!containerRef.current || isHovered) return

    const container = containerRef.current

    const interval = setInterval(() => {
      const maxScroll = container.scrollWidth - container.clientWidth

      if (container.scrollLeft >= maxScroll - 5) {
        container.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollByCards('right')
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Edge Fade */}
      <div className="absolute left-0 top-0 h-full w-16 z-20 bg-gradient-to-r from-dark-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-16 z-20 bg-gradient-to-l from-dark-950 to-transparent pointer-events-none" />

      {/* Chevron Left */}
      <button
        onClick={() => scrollByCards('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30
                   bg-dark-900/80 backdrop-blur
                   border border-dark-700
                   p-2 rounded-full
                   hover:border-brand-red
                   transition"
      >
        ‹
      </button>

      {/* Chevron Right */}
      <button
        onClick={() => scrollByCards('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30
                   bg-dark-900/80 backdrop-blur
                   border border-dark-700
                   p-2 rounded-full
                   hover:border-brand-red
                   transition"
      >
        ›
      </button>

      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory px-20 scrollbar-hide"
      >
        {products.map((item, i) => (
          <div
            key={i}
            className="snap-center flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[30%]"
          >
            <div
              className="
                group bg-dark-900/80 backdrop-blur-sm
                border border-dark-700
                shadow-[0_8px_20px_rgba(0,0,0,0.6)]
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.8)]
                rounded-xl
                transition-all duration-300
              "
            >
              <div className="aspect-[4/3] overflow-hidden bg-dark-950">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-3">
                <h3 className="text-xs tracking-wider uppercase text-text-secondary text-center">
                  {item.label}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Mining() {
  return (
    <div className="relative min-h-screen bg-dark-950 overflow-hidden">

      {/* Subtle Industrial Red Glow Layers */}
      <div className="absolute inset-0
                      bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.08),transparent_40%)]
                      pointer-events-none" />

      <div className="absolute inset-0
                      bg-[radial-gradient(circle_at_bottom_right,rgba(193,18,31,0.06),transparent_50%)]
                      pointer-events-none" />

      <div className="relative z-10">

        {/* HERO */}
        <section
          className="h-[60vh] flex items-center relative"
          style={{
            backgroundImage: `url(${miningImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Mining Consumables
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-text-secondary max-w-2xl"
            >
              Supplying reliable diamond drilling tools, consumables, and critical
              machine spares to exploration and mining operations.
            </motion.p>
          </div>
        </section>

        {/* PRODUCT RANGE */}
        <PageSection title="Product Range">
          <ProductCarousel />
        </PageSection>

        {/* WHAT WE SUPPLY */}
        <PageSection title="What We Supply">
          <ul className="grid md:grid-cols-2 gap-6 text-text-secondary">
            <li>Diamond drilling tools & consumables</li>
            <li>Drill machine spares & wear parts</li>
            <li>Core barrels, rods & accessories</li>
            <li>Technical sourcing for site-specific needs</li>
            <li>Future expansion into RC & blast hole tools</li>
          </ul>
        </PageSection>

        {/* CTA */}
        <PageSection title="Talk to Us">
          <button className="btn-primary">
            Request Mining Supply Support
          </button>
        </PageSection>

      </div>
    </div>
  )
}
