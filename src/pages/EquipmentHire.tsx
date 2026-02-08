import PageSection from '../components/ui/PageSection'
import equipmentHireImg from '../assets/home/equipmentHireImg.png'

export default function EquipmentHire() {
  return (
    <div>
      {/* HERO */}
      <section
        className="h-[60vh] flex items-center"
        style={{
          backgroundImage: `url(${equipmentHireImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Equipment & Machinery Hire
          </h1>
          <p className="text-text-secondary max-w-2xl">
            Reliable machines and equipment hire solutions
            for construction, mining, and industrial projects.
          </p>
        </div>
      </section>

      {/* EQUIPMENT */}
      <PageSection title="Available Equipment">
        <ul className="grid md:grid-cols-2 gap-6 text-text-secondary">
          <li>Construction & earth-moving machinery</li>
          <li>Site support equipment</li>
          <li>Short-term and long-term hire options</li>
          <li>Well-maintained and field-ready units</li>
        </ul>
      </PageSection>

      {/* RELIABILITY */}
      <PageSection title="Built for Demanding Environments">
        <p className="text-text-secondary max-w-3xl">
          Our equipment is selected and maintained to perform
          reliably in challenging environments, ensuring uptime
          and operational continuity for your projects.
        </p>
      </PageSection>

      {/* CTA */}
      <PageSection title="Hire Equipment">
        <button className="btn-primary">
          Request Equipment Hire Details
        </button>
      </PageSection>
    </div>
  )
}
