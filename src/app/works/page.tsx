"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import HomeText from "@/components/home-text";
import { works } from "../constants";
import Footer from "@/components/footer";


export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
<div className="min-h-screen bg-gradient-to-b from-gray-950 to-[#200550] pb-5 pt-20 sm:pt-28">
  <div className="max-w-6xl mx-auto px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-16">
      <HomeText 
        text={' My Works'} 
        className={'w-full flex justify-center text-4xl lg:text-6xl font-extrabold tracking-tighttext-white mb-4'} />

      <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Explore my projects organized by technology stack and expertise area.  
        Each category highlights a unique aspect of my development journey.
      </p>
     
    </div>

    {/* Stack Categories Grid */}
    <div className="space-y-4">
      {works.map((category, index) => (
        // https://examples.motion.dev/react/accordion
        // use motion animation for accordions
        <div
          key={index + category.title}
          className="border border-gray-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-gray-950/80 hover:bg-gray-100 dark:hover:bg-gray-950 backdrop-blur-sm"
        >
          <button
            onClick={() => toggleAccordion(index)}
            // className="w-full flex justify-between items-center px-4 py-2 text-left text-lg font-semibold text-gray-900 dark:text-gray-100 bg-fuchsia-200"
            className="w-full flex justify-between items-center px-4 py-3 text-left text-lg font-semibold text-gray-100"
          >
            <span className="flex flex-col items-start gap-2">
                <p>{category.title}</p>
                <span className={`text-sm font-medium text-gray-400  px-3 py-1 rounded-full  ${category.works.length !==0 ? 'bg-gradient-to-r from-blue-600 to-indigo-600': 'bg-gray-700'} `}>{category.works.length} projects</span> 
            </span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>

          {openIndex === index && (
            <div className="top-full p-4 rounded-b-2xl animate-fadeIn w-full mt-4 border-gray-700 rounded-xl shadow-lg space-y-2">
            {/* <div className="top-full p-4 rounded-b-2xl animate-fadeIn w-full mt-4 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg space-y-2"> */}

               {category.works.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {category.works.map((project, index) => (
              <div
                key={index + category.title}
                className="bg-gray-950 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <Image
                  fill
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-blue-900/30 text-blue-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    {/* <Link
                      href={`/works/${project.id}`}
                      className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      View Details
                    </Link> */}
                    
                    <div className="flex items-center space-x-3">
                      {project.deployedUrl && (
                        <a
                          href={project.deployedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                          title="View Live Site"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                          title="View Source Code"
                        >
                          <FaGithub  className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Projects Coming Soon
            </h3>
            <p className="text-gray-300">
              I&apos;m working on adding projects to this category. Check back soon!
            </p>
          </div>
        )}
            </div>
          )}
        </div>
      ))}

    </div>

  </div>

  <Footer />
</div>
  );
}
