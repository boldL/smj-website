import PageSection from '../components/ui/PageSection'
import travelImg from '../assets/home/travelImg.png'

export default function Travel() {
  return (
    <div>
      {/* HERO */}
      <section
        className="h-[60vh] flex items-center"
        style={{
          backgroundImage: `url(${travelImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Travel, Safaris & Vehicle Hire
          </h1>
          <p className="text-text-secondary max-w-2xl">
            Curated travel experiences and reliable vehicle hire,
            blending leisure, adventure, and logistical support.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <PageSection title="What We Offer">
        <ul className="grid md:grid-cols-2 gap-6 text-text-secondary">
          <li>Safari planning & guided experiences</li>
          <li>4x4 vehicle hire for tourism & field operations</li>
          <li>Airport transfers & executive transport</li>
          <li>Custom travel itineraries within Tanzania</li>
          <li>Support for corporate & site-based travel needs</li>
        </ul>
      </PageSection>

      {/* EXPERIENCE */}
      <PageSection title="Experience the Difference">
        <p className="text-text-secondary max-w-3xl">
          Whether you are exploring Tanzania’s natural beauty or
          supporting site-based operations, we provide dependable
          transport and local expertise to ensure smooth journeys.
        </p>
      </PageSection>

      {/* CTA */}
      <PageSection title="Plan Your Journey">
        <button className="btn-primary">
          Enquire About Travel & Vehicle Hire
        </button>
      </PageSection>
    </div>
  )
}
