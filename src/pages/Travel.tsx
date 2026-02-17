import { motion } from 'framer-motion'
import travelImg from '../assets/home/travelImg.png'

import carHireImg from '../assets/travel/car-hire.jpg'
import hotelImg from '../assets/travel/hotel.jpg'
import safariImg from '../assets/travel/safari.jpg'
import shuttleImg from '../assets/travel/airport-shuttle.jpg'
import townTourImg from '../assets/travel/town-tour.jpg'
import culturalImg from '../assets/travel/cultural-tour.jpg'

const services = [
  {
    title: 'Car Hire',
    description:
      'Reliable and affordable car hire services with a range of vehicles to suit your needs — from short-term private hires to long-term project-based rentals.',
    image: carHireImg,
  },
  {
    title: 'Hotel Bookings',
    description:
      'Book the best hotels with exclusive deals to ensure your stay is comfortable, seamless, and memorable.',
    image: hotelImg,
  },
  {
    title: 'Safaris',
    description:
      'Experience breathtaking safaris tailored to your interests and schedule, guided by experienced local professionals.',
    image: safariImg,
  },
  {
    title: 'Airport Shuttle',
    description:
      'Convenient and punctual airport shuttle services ensuring smooth and comfortable transfers.',
    image: shuttleImg,
  },
  {
    title: 'Town Tours',
    description:
      'Explore vibrant towns with guided tours showcasing local landmarks, culture, and hidden gems.',
    image: townTourImg,
  },
  {
    title: 'Cultural Tours',
    description:
      'Immerse yourself in authentic cultural experiences and traditions that elevate your Tanzanian journey.',
    image: culturalImg,
  },
]

export default function Travel() {
  return (
    <div className="bg-dark-950 text-white">

      {/* HERO */}
      <section
        className="h-[60vh] flex items-center relative"
        style={{
          backgroundImage: `url(${travelImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-7xl px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Travel, Safaris & Vehicle Hire
          </h1>
          <p className="text-text-secondary max-w-2xl">
            Curated travel experiences and reliable vehicle hire,
            blending leisure, adventure, and logistical support.
          </p>
        </motion.div>
      </section>

      {/* SERVICES */}
      {/* SERVICES GRID */}
<section className="py-20 px-6 bg-dark-950">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8">

      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[38vh] rounded-xl overflow-hidden group cursor-pointer"
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-all duration-500" />

          {/* Subtle safari accent gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            <h2 className="text-2xl font-semibold mb-2">
              {service.title}
            </h2>
            <p className="text-sm text-text-secondary max-w-md">
              {service.description}
            </p>
          </div>

          {/* Accent line */}
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-red transition-all duration-500 group-hover:w-full" />
        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-20 text-center bg-dark-900">
        <h2 className="text-3xl font-semibold mb-6">
          Plan Your Journey
        </h2>
        <button className="btn-primary">
          Enquire About Travel & Vehicle Hire
        </button>
      </section>
    </div>
  )
}
