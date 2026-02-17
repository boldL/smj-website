import PageSection from '../components/ui/PageSection'
import travelImg from '../assets/home/about.jpg'

export default function About() {
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
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About SMJ Tanzania
          </h1>
          <p className="text-text-secondary max-w-2xl">
            100% locally owned and operated since 2013, proudly based in Mwanza, Tanzania.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <PageSection title="Who We Are">
        <p className="text-text-secondary max-w-3xl leading-relaxed">
          SMJ is a well-established Tanzanian business founded in 2013 and
          headquartered in Mwanza. What began as a travel and tours company
          has grown into a diversified enterprise serving the mining,
          industrial, logistics, and tourism sectors.
        </p>
      </PageSection>

      {/* OUR ROOTS */}
      <PageSection title="Our Roots in Tanzanian Tourism">
        <p className="text-text-secondary max-w-3xl leading-relaxed mb-6">
          Through SMJ Travel & Tours, we have delivered unique and authentic
          Tanzania wildlife safaris, mountaineering treks, cultural experiences,
          eco-tours, historical site visits, and relaxing beach holidays.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-text-secondary">
          <div>Serengeti National Park</div>
          <div>Tarangire National Park</div>
          <div>Lake Manyara</div>
          <div>Ngorongoro Crater</div>
          <div>Mount Kilimanjaro</div>
          <div>Saanane & Rubondo Island National Parks</div>
        </div>
      </PageSection>

      {/* OUR PASSION */}
      <PageSection title="Our Passion & Experience">
        <p className="text-text-secondary max-w-3xl leading-relaxed">
          We are deeply passionate about our wildlife, rich tribal cultures,
          and the natural treasures that Tanzania has to offer. The combined
          experience of our team reflects a deep understanding of wildlife
          behavior, practical local knowledge of culture and history, and an
          unwavering dedication to crafting personalized, unforgettable
          experiences.
        </p>
      </PageSection>

      {/* OUR VALUES */}
      <PageSection title="What Drives Us">
        <div className="grid md:grid-cols-3 gap-8 text-text-secondary">
          <div>
            <h3 className="text-white font-semibold mb-2">Local Expertise</h3>
            Authentic knowledge rooted in lived experience.
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Reliability</h3>
            Professional delivery across tourism and industrial sectors.
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Long-Term Partnerships</h3>
            Building trust with clients, suppliers, and communities.
          </div>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection title="Work With SMJ">
        <button className="btn-primary">
          Get in Touch
        </button>
      </PageSection>
    </div>
  )
}
