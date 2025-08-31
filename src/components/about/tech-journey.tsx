import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const timelineData = [
  { 
    year: "2022", 
    title: "ADSE Program", 
    description: "Built my first e-commerce site on Shopify, which sparked my interest in software engineering. Later that year, I enrolled in an Advanced Diploma in Software Engineering (ADSE), gaining a strong foundation in software Engineering", 
 },
  { 
    year: "2023", 
    title: "First Hackathon", 
    description: "Competed in my first web application hackathon across all Aptech centers and placed 3rd runner-up, validating my technical and problem-solving skills under pressure.", 
 },
  { 
    year: "2023", 
    title: "Startup Experience – IMall", 
    description: "Contributed to product development at IMall, gaining hands-on experience with collaboration, and delivering features for real users.", 
    image: "/imall.jpeg"
 },
  { 
    year: "2023–2024", 
    title: "Women Techsters Fellowship", 
    description: "Completed the Women Techsters Fellowship in Software Development where I enhanced my technical expertise while building teamwork, leadership, and professional communication skills.", 
    image: "/wtech.jpeg" 
},
  { 
    year: "2025", 
    title: "Quadups – Frontend Lead Engineer", 
    description: "Currently leading frontend development at Quadups while also managing social media strategy. It’s a mix of technical leadership and creative storytelling, helping us scale both our products and brand.", 
},
];

export default function TechJourney() {

const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end end"],
  });

  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div ref={containerRef} className="h-[75vh] w-full overflow-y-auto">
    <div className="relative py-2">

      <div className="italic text-gray-400 mb-8 w-[90%] lg:w-[70%] mx-auto text-sm sm:text-[1.05rem]">
        My love for creating started early. As a kid, I would spend hours in my brother’s room designing random projects in PowerPoint not knowing I was laying the foundation for my journey into the tech industry.
      </div>

      {/* progress line */}
      <div className="flex justify-center mx-auto gap-5 mb-10 w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="w-3 sm:w-1.5 bg-[#8319f1] rounded-full origin-top z-50"
        />

        <div className="md:w-[90%] lg:w-[70%] flex flex-col">
           {timelineData.map((item, index) => (
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

              {/* Chevron */}
              {item.image && (
                <motion.div
                  animate={{ rotate: selected === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                </motion.div>
              )}
            </button>

            {/* Expandable Image */}
            {item.image && selected === index && (

                 <div className="py-2 w-full overflow-hidden relative">
                    <Image
                    width={400}
                    height={225}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 rounded-xl"
                    />
                </div>
              
            )}
          </motion.div>
        ))}  
        </div>
      </div>
    </div>
    </div>
  );
}
