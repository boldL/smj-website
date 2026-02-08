import PageSection from '../components/ui/PageSection'
import miningImg from '../assets/home/miningImg.png'

export default function Mining() {
  return (
    <div>
      {/* HERO */}
      <section
        className="h-[60vh] flex items-center"
        style={{
          backgroundImage: `url(${miningImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mining Equipment & Consumables
          </h1>
          <p className="text-text-secondary max-w-2xl">
            Supplying reliable diamond drilling tools, consumables, and critical
            machine spares to exploration and mining operations.
          </p>
        </div>
      </section>

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

      {/* BRANDS */}
      <PageSection title="Brands & Partners">
        <p className="text-text-secondary">
          We work with established international manufacturers and trusted
          regional partners to ensure consistent quality and supply.
        </p>
        <div className="mt-6 text-sm text-text-disabled">
          (Partner logos to be added)
        </div>
      </PageSection>

      {/* EXPERIENCE */}
      <PageSection title="Experience & Track Record">
        <p className="text-text-secondary max-w-3xl">
          Our team brings hands-on experience supporting drilling operations,
          understanding the realities of uptime, wear cycles, and logistics
          in remote environments.
        </p>
      </PageSection>

      {/* CTA */}
      <PageSection title="Talk to Us">
        <button className="btn-primary">
          Request Mining Supply Support
        </button>
      </PageSection>
    </div>
  )
}
