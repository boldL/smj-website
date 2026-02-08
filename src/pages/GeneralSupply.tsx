import PageSection from '../components/ui/PageSection'
import generalSupplyImg from '../assets/home/generalSupplyImg.png'

export default function GeneralSupply() {
  return (
    <div>
      {/* HERO */}
      <section
        className="h-[60vh] flex items-center"
        style={{
          backgroundImage: `url(${generalSupplyImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            General Supply
          </h1>
          <p className="text-text-secondary max-w-2xl">
            End-to-end sourcing of PPE, logistics support, and industrial
            essentials for operational environments.
          </p>
        </div>
      </section>

      {/* WHAT WE SUPPLY */}
      <PageSection title="Our Supply Categories">
        <ul className="grid md:grid-cols-2 gap-6 text-text-secondary">
          <li>Personal Protective Equipment (PPE)</li>
          <li>Industrial tools & consumables</li>
          <li>Logistics & procurement support</li>
          <li>Office & site operational supplies</li>
          <li>Software & systems sourcing (on request)</li>
        </ul>
      </PageSection>

      {/* VALUE */}
      <PageSection title="Why SMJ">
        <p className="text-text-secondary max-w-3xl">
          We simplify procurement by acting as a single point of contact,
          reducing delays, vendor complexity, and supply risk.
        </p>
      </PageSection>

      {/* CTA */}
      <PageSection title="Get in Touch">
        <button className="btn-primary">
          Discuss General Supply Requirements
        </button>
      </PageSection>
    </div>
  )
}
