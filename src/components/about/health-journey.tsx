import { healthcareTimelineData } from "@/app/constants";
import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";

export default function HealthJourney() {

const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end end"],
  });

  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div ref={containerRef} className="h-[75vh] w-full overflow-y-auto scrollbar-hide">
    <div className="relative py-2">

        <div className="italic text-gray-400 mb-8 w-[90%] lg:w-[70%] mx-auto text-sm sm:text-[1.05rem]">
            I was always drawn to helping people feel better even at a young age, whether it was tending to a someone who was&napos;t feeling well or staying close and offering emotional relief.
        </div>

      {/* progress line */}
      <div className="flex justify-center mx-auto gap-5 mb-10 w-full ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="w-3 sm:w-1.5 bg-[#8319f1] rounded-full origin-top z-50"
        />

        <div className="md:w-[90%] lg:w-[70%] flex flex-col">
           {healthcareTimelineData.map((item, index) => (
          <motion.div
            key={index + item.title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-6 relative"
          >
            {/* Dot */}
            <span className="absolute -left-3 sm:-left-2 flex items-center justify-center w-6 h-6 sm:w-5 sm:h-5 bg-gradient-to-b from-blue-600/50 to-[#8319f1]/50 rounded-full shadow-2xl" />

            {/* Accordion */}
            <button
              className="p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer flex justify-between items-center text-start border border-gray-900 bg-gray-950/80 hover:bg-gray-950"
              onClick={() => setSelected(selected === index ? null : index)}
            >
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold">
                  {item.year} – {item.title}
                </h3>
                <p className="text-gray-400 mt-2 text-sm sm:text-base">{item.description}</p>
              </div>
            
            </button>

          </motion.div>
        ))}  
        </div>
      </div>
    </div>
    </div>

  );
}
