export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="mx-auto max-w-7xl px-6 py-16">
        
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold">SMJ (T) Limited</h4>
            <p className="mt-4 text-sm text-text-secondary">
              Industrial supply, mining solutions, logistics and equipment hire
              services based in Mwanza, Tanzania.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h5>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>Mwanza, Tanzania</li>
              <li>Rockcity Mall - 2nd Floor Wing C</li>
              <li>P.O. Box 289, Furahisha/Makongoro Road</li>
              <li>info@smjtz.com</li>
              <li>+255 795 544 881</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h5>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>Mining Consumables Supply</li>
              <li>General Supply</li>
              <li>Travel & Vehicle Rental</li>
              <li>Heavy Equipment Rental</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-dark-700 pt-6 text-sm text-text-secondary">
          © {new Date().getFullYear()} SMJ (T) Limited. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
