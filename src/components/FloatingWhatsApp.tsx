import { motion } from 'framer-motion'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/255795544881?text=Hello%20SMJ,%20I%20would%20like%20to%20make%20an%20inquiry."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 120 }}
      whileHover={{ scale: 1.1 }}
      className="
        fixed bottom-6 right-6 z-50
        bg-green-600 hover:bg-green-500
        w-14 h-14 rounded-full
        flex items-center justify-center
        shadow-lg animate-[whatsappPulse_2.5s_infinite]
      "
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7"
      >
        <path d="M16 .4C7.2.4.2 7.4.2 16.2c0 2.9.8 5.6 2.1 8l-2.3 8.4 8.6-2.3c2.3 1.2 4.9 1.9 7.6 1.9 8.8 0 15.8-7 15.8-15.8C31.8 7.4 24.8.4 16 .4zm0 29.2c-2.5 0-4.9-.7-7-1.9l-.5-.3-5.1 1.4 1.4-5-.3-.5c-1.3-2.1-2-4.6-2-7.1 0-7.4 6-13.4 13.4-13.4S29.4 8.8 29.4 16.2 23.4 29.6 16 29.6zm7.4-9.9c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.2-1.3-1.2-2.1-2.6-2.3-3-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3 0-.6 0-.8-.1-.2-1-2.5-1.4-3.4-.4-.9-.8-.8-1.1-.8h-1c-.3 0-.8.1-1.3.6-.4.5-1.7 1.7-1.7 4.2s1.8 4.9 2 5.2c.2.3 3.5 5.4 8.6 7.6 1.2.5 2.1.8 2.8 1 .9.3 1.8.2 2.4.1.7-.1 2.4-1 2.7-2 .3-1 .3-1.9.2-2.1-.1-.2-.3-.3-.7-.5z" />
      </svg>
    </motion.a>
  )
}
