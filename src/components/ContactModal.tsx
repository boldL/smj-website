import { motion, AnimatePresence } from 'framer-motion'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/10 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-dark-850/50
                        backdrop-blur-md
                        border border-dark-700
                        p-8
                        rounded-xl
                        max-w-md w-full
                        text-center
                        relative
                        shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold mb-4">
              Contact SMJ (T) Ltd
            </h3>

            <p className="text-text-secondary mb-6 text-sm">
              For quotations, equipment availability, mining support, PPE inquiries, 
              drilling tools, and long-term project discussions.
            </p>

            <div className="flex flex-col gap-4">

              <a
                href="mailto:info@smjtz.com?subject=SMJ Inquiry"
                className="btn-primary"
              >
                Email Us
              </a>

              <a
                href="https://wa.me/255795544881?text=Hello%20SMJ,%20I%20would%20like%20to%20make%20an%20inquiry."
                target="_blank"
                className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg text-sm font-semibold"
              >
                Chat on WhatsApp
              </a>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
