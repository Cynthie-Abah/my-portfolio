import Button from '@/ui/button'
import { motion } from "framer-motion";
import HomeText from './home-text';

const Footer = () => {
  return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <HomeText
        text="Let's Build Something Amazing Together"
        className="w-full flex justify-center text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 sm:mb-8"
      />
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
        Whether it’s a web app, mobile experience, or a full-scale system, 
        reach out and let’s make something incredible together.
      </p>

      <div>
  <Button
    aria-label="Contact Cynthia via email"
    className="inline-flex items-center justify-center px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-2xl font-medium text-blue-600 bg-transparent border-2 border-blue-400 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-md sm:shadow-lg"
    text="Get In Touch"
    onClick={() => window.location.href = "mailto:abahojomacynthia@gmail.com"}
  />
</div>
    </motion.div>

    <p className="text-gray-500 mt-16 text-sm">
      &copy; {new Date().getFullYear()} Cynthia Abah. All rights reserved.
    </p>
  </div>
  )
}

export default Footer