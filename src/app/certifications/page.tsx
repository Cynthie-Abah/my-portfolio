"use client"
import HomeText from "@/components/home-text"
import Image from "next/image"

const certifications = [
  {
    title: "Women Techsters Fellowship Program: Software Development stack",
    issuer: "Tech4Dev",
    date: "Issued October 2024",
    credentialUrl: "/wtf-cert.jpg",
    logo: "/wtf-cert.jpg",
  },
  {
    title: "Ultimate React and Next.js Course: Redux, context, react-query, and more",
    issuer: "Udemy",
    date: "Issued August 2025",
    credentialUrl: "/udemy.jpg",
    logo: "/udemy.jpg",
  },
  {
    title: "Great Learning Frontend Course",
    issuer: "Scrimba",
    date: "Issued April 2024",
    credentialUrl: "/greatlearning.jpeg",
    logo: "/greatlearning.jpeg",
  },
]

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-[#200550] pt-20 sm:pt-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <HomeText
              text={'Certifications'} 
              className={'w-full flex justify-center text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4'} />

          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A showcase of my certifications and credentials that validate my
            skills across cloud, web, and software development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pb-5">
          {certifications.map((cert, index) => (
            <div
              key={index + cert.title}
              className="bg-white dark:bg-gray-950 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
               <div className="w-full overflow-hidden relative">
                  <Image
                  width={400}
                  height={225}
                    src={cert.logo}
                    alt={cert.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {cert.issuer}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {cert.date}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State (if no certs yet) */}
        {certifications.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📜</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I&apos;m currently working on adding my certifications here. Stay
              tuned!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
