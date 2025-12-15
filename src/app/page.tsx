"use client"
import HomeText from '@/components/home-text';
import Button from '@/ui/button';
import CountUp from '@/ui/count-up';
import DecryptedText from '@/ui/decrypted-text';
import DarkVeil from '@/ui/prism';
import TrueFocus from '@/ui/true-focus';
import { Brain} from 'lucide-react';
import Image from 'next/image';
import { motion } from "framer-motion";
import Footer from '@/components/footer';
import { dashboardCards, variants } from './constants';

export default function Home() {

  return (
     <div className="bg-black ">
      {/* Hero Section */}
      <section className="w-screen min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black to-black">

      <DarkVeil />

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center top-0 absolute">
          <div className="text-center">
            
            <HomeText 
            text={'Cynthia Abah'} 
            className={'w-full flex justify-center text-5xl lg:text-7xl font-bold text-white mb-6'} />
            
            <div className="text-blue-600 font-medium mb-8">
              <TrueFocus
              sentence="Software Engineer-Student Nurse"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
              textClassName='lg:text-5xl text-2xl'
              />
            </div>
            
          <div className="text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-mono text-shadow-sm text-medium sm:text-lg">
            <DecryptedText
              text="From Technology to Healthcare, my journey is fueled by a passion for solving problems, creating meaningful experiences, and building solutions that improve lives."
              speed={250}
              animateOn="view"
              revealDirection="center"
            />
          </div>

            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
              aria-label="View portfolio projects"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl" 
              text='View My Work'
              type='link'
              href='/works'
              />
              {/* supposed to be a link to reach out to me through */}
              <Button 
              aria-label="Contact Cynthia via email"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 dark:text-blue-400 bg-transparent border-2 border-blue-400 rounded-lg  transform hover:scale-105 transition-all duration-200 shadow-lg" 
              text='Get In Touch'
              onClick={() => window.location.href = "mailto:abahojomacynthia@gmail..com"}
              />
              
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
  {/* Optional background shapes */}
  <div className="absolute inset-0 -z-10">
    <div className="bg-gradient-to-tr from-purple-900 to-indigo-800 opacity-20 w-full h-full"></div>
    <div className="absolute top-10 left-[-50px] w-72 h-72 rounded-full bg-indigo-600 opacity-30 blur-3xl"></div>
    <div className="absolute bottom-10 right-[-50px] w-96 h-96 rounded-full bg-purple-500 opacity-30 blur-3xl"></div>
  </div>

  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <HomeText
        text="Skills & Technologies"
        className="w-full flex justify-center text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 sm:mb-4"
      />
      <p className="text-gray-400 max-w-2xl mx-auto">
        Technologies I use to design, build, and ship reliable web and mobile applications.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {dashboardCards.map((card, idx) =>{ 
 let variantType: keyof typeof variants = "center";
    if (idx === 0) variantType = "left";
    if (idx === dashboardCards.length - 1) variantType = "right";

        return (
        <motion.div
          key={card.title}
          variants={variants[variantType]}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-br from-gray-900/40 via-black/20 to-gray-900/40 border border-white/10 rounded-2xl p-6 hover:scale-105 hover:border-indigo-400 transition-transform shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            {card.icon}
            <h3 className="text-2xl font-bold text-white">{card.title}</h3>
          </div>
          <ul className="space-y-2 text-gray-300">
            {card.items.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-400 rounded-full flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      )})}
    </div>

       {/* Currently Exploring */}
    <div className="mt-20 border-t border-white/10 pt-12">
      <div className="flex items-center gap-3 mb-6">
        <Brain className="text-purple-400" size={26} />
        <h3 className="text-3xl font-bold text-white">Currently Exploring</h3>
      </div>
      <div className="flex flex-wrap gap-4">
        {["AI-powered applications", "Health-tech & Nursing Informatics", "Systems engineering using Rust", "Web3 Dev"].map((item) => (
          <span
            key={item}
            className="px-4 py-2 rounded-full border border-white/10 text-gray-300 text-sm hover:border-indigo-400 transition"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Stats Section */}
  <section className="py-24 bg-black">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left content */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
            Turning Ideas into Reliable Digital Products
          </h2>
          <p className="text-gray-400 leading-relaxed">
            I design and build scalable software with real users in mind and a focus on clean architecture and thoughtful UX.
          </p>

          <div className="mt-10 w-full">
            <div className="grid grid-cols-2 text-center">

              <div>
                <div className="text-4xl lg:text-6xl font-extrabold text-indigo-400 mb-2">
                  <CountUp
                    from={0}
                    to={40}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />+
                  </div>
                <div className="text-gray-300">Projects Completed</div>
              </div>

              <div>
                <div className="text-4xl lg:text-6xl font-extrabold text-emerald-400 mb-2">
                  <CountUp
                    from={0}
                    to={3}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                </div>
                <div className="text-gray-300">Years Experience</div>
              </div>

            </div>
          </div>
        </div>

        {/* Right stats */}
      <div className="relative h-[400px] lg:h-[480px]">
        <Image
          src="/code-svg.svg"
          fill
          alt="Code illustration"
          className="object-contain"
        />
      </div>

      </div>
    </div>
  </section>
  
    <Footer />

    </div>
  );
}
