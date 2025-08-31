"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion";
import HomeText from '@/components/home-text';
import TechJourney from '@/components/about/tech-journey';
import HealthJourney from '@/components/about/health-journey';

const tabs = ["Tech Journey", "Healthcare Journey"]

export default function Page() {
  const [selected, setSelected] = useState("Tech Journey")
   
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-[#200550] p-20 sm:p-28">
      <div className="px-6 lg:px-8">

           <HomeText
                text={'Get To Know Me'} 
                className={'w-full flex justify-center text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4'} />

            <div className="flex justify-center space-x-6 relative text-white rounded-xl p-2 my-4">
                {tabs.map((tab) => (
                <motion.button
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    key={tab}
                    onClick={() => setSelected(tab)}
                    className={`relative z-10 px-4 py-2 text-[1.5rem] font-bold transition-colors ${
                    selected === tab ? "text-blue-400 border-b-2 border-blue-600 dark:border-blue-400" : "text-gray-500"
                    }`}
                >
                    {tab}
                </motion.button>
                ))}
        </div>

        { selected === 'Tech Journey' ? <TechJourney /> : <HealthJourney /> }
    </div>
    </div>

  )
}

      