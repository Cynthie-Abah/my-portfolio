"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import HomeText from "@/components/home-text";

const works = [
  {
    title: "Frontend Development",
    works: [
      {
        id: "portfolio",
        title: "Lendsqr Test Project",
        shortDescription: " This was the first React project I built after learning the basics (useState and useEffect). The completed frontend assessment for the Lendsqr Engineering role.",
        image: "/lendsqr.jpg",
        techStack: ["React Js", "SCSS", "TypeScript"],
        deployedUrl: "https://cynthia-abah-lendsqr-fe-test.vercel.app",
        githubUrl: "https://github.com/Cynthie-Abah/lendsqr-fe-test.git",
      },
      {
        id: "wild-oasis-dashboard",
        title: "The Wild Oasis Dashboard",
        shortDescription: "A Responsive dashboard built for managing cabin accomodation bookings.",
        image: "/wild-oasis-dashboard.jpg",
        techStack: ["React", "Tailwind", "Supabase", "React Query",],
        deployedUrl: "https://the-wild-oasis-cyn.netlify.app",
        githubUrl: "https://github.com/Cynthie-Abah/the-wild-oasis-dashboard.git",
      },
      {
        id: "The Wild Oasis Website",
        title: "The Wild Oasis Website",
        shortDescription: "Official website for the wild oasis where guests can view and book for accomodations",
        image: "/the-wild-oasis-website.jpg",
        techStack: ["Next Js", "Auth Js", "TailwindCSS"],
        deployedUrl: "https://the-wild-oasis-website-project-rouge.vercel.app",
        githubUrl: "https://github.com/Cynthie-Abah/the-wild-oasis-website-project.git",
      },
      {
        id: "Student Dropout Risk Predictor",
        title: "Student Dropout Risk Predictor",
        shortDescription: "A Hackathon project that predicts students at risk of dropping out using a React frontend.",
        image: "/predictor-app.jpg",
        techStack: ["React Js", "TailwindCSS"],
        deployedUrl: "https://predictor-app-delta.vercel.app/",
        githubUrl: "https://github.com/Cynthie-Abah/predictor-app.git",
      },
      {
        id: "Plantnest E-commerce and Blog Site",
        title: "Plantnest E-commerce and Blog Site",
        shortDescription: "A Hackathon project designed to promote sustainable home gardening by helping users discover, manage, and care for their plants with ease.",
        image: "/plantnest.jpg",
        techStack: ["React Js", "TailwindCSS"],
        deployedUrl: "",
        githubUrl: "https://github.com/Cynthie-Abah/PlantNest-User.git",
      },
      {
        id: "Audiophile E-commerce Site",
        title: "Audiophile E-commerce Site",
        shortDescription: "A Stage 3 HNG task where I built a modern e-commerce website for Audiophile, featuring product listings, detailed pages, cart management, and a clean, responsive UI.",
        image: "/audiophile.png",
        techStack: ["React Js", "Next JS", "Convex", "TailwindCSS"],
        deployedUrl: "https://audiophile-ecommerce-website-pi.vercel.app/",
        githubUrl: "https://github.com/Cynthie-Abah/Audiophile-ecommerce-website.git",
      },
      {
        id: "TicketFlow - React Frontend and Vue frontend",
        title: "TicketFlow - React Frontend and Vue frontend",
        shortDescription: "A multi-framework ticket management system built with React & vue featuring authentication, dashboard analytics, and full ticket CRUD operations with a clean, responsive UI.",
        image: "/ticketflow.png",
        techStack: ["React Js", "Vue JS", "React Query", "validateVue", "Supabase", "TailwindCSS"],
        deployedUrl: "https://ticketing-app-react.netlify.app/",
        githubUrl: "https://github.com/Cynthie-Abah/ticketing-app-react.git",
      },
      {
        id: "Framez - Mobile Social App",
        title: "Framez - Mobile Social Application",
        shortDescription: "A React Native social app built as an intern task, featuring authentication, real-time posts, user profiles, and a clean Instagram-inspired UI. Users can create posts, follow others, comment, and manage their profiles with persistent sessions.",
        image: "/framez.png",
        techStack: ["React Native", "Expo", "Clerk", "Convex", "Zustand", "React Hook Form"],
        deployedUrl: "https://drive.google.com/file/d/1M-abBorVMPgp-2_NnTR06efM558I493i/view?usp=drive_link",
        githubUrl: "https://github.com/Cynthie-Abah/framez.git",
      },
    ],
  }
  // {
  //   title: "Backend Development",
  //   works: [
  //   //   {
  //   //     id: "rest-api",
  //   //     title: "REST API",
  //   //     shortDescription: "Secure REST API built with Node.js and Express.",
  //   //     image: "/images/rest-api.png",
  //   //     techStack: ["Node.js", "Express", "MongoDB"],
  //   //     deployedUrl: "",
  //   //     githubUrl: "https://github.com/username/rest-api",
  //   //   },
  //   //   {
  //   //     id: "auth-system",
  //   //     title: "Authentication System",
  //   //     shortDescription: "Role-based authentication using NextAuth and JWT.",
  //   //     image: "/images/auth.png",
  //   //     techStack: ["NextAuth", "JWT", "PostgreSQL"],
  //   //     deployedUrl: "",
  //   //     githubUrl: "https://github.com/username/auth-system",
  //   //   },
  //   //   {
  //   //     id: "analytics-dashboard",
  //   //     title: "Analytics Dashboard API",
  //   //     shortDescription: "Backend for real-time analytics dashboards.",
  //   //     image: "/images/analytics.png",
  //   //     techStack: ["Node.js", "GraphQL", "Redis"],
  //   //     deployedUrl: "",
  //   //     githubUrl: "https://github.com/username/analytics-dashboard",
  //   //   },
  //   ],
  // },
  // {
  //   title: "Mobile Application Development",
  //   works: [
  //   //   {
  //   //     id: "inventory-manager",
  //   //     title: "Inventory Manager",
  //   //     shortDescription: "Mobile app for managing inventory with Flutter.",
  //   //     image: "/images/inventory.png",
  //   //     techStack: ["Flutter", "Firebase"],
  //   //     deployedUrl: "",
  //   //     githubUrl: "https://github.com/username/inventory-manager",
  //   //   },
  //   //   {
  //   //     id: "task-manager",
  //   //     title: "Task Manager App",
  //   //     shortDescription: "Cross-platform task manager built with React Native.",
  //   //     image: "/images/task-manager.png",
  //   //     techStack: ["React Native", "Expo"],
  //   //     deployedUrl: "",
  //   //     githubUrl: "https://github.com/username/task-manager",
  //   //   },
  //   //   {
  //   //     id: "health-app",
  //   //     title: "Health Monitoring App",
  //   //     shortDescription: "Tracks vital health stats and syncs with wearables.",
  //   //     image: "/images/health.png",
  //   //     techStack: ["Flutter", "Bluetooth API"],
  //   //     deployedUrl: "",
  //   //     githubUrl: "",
  //   //   },
  //   ],
  // },
  // {
  //   title: "DevOps Engineering",
  //   works: [
  //   //   {
  //   //     id: "ci-cd",
  //   //     title: "CI/CD Pipeline Setup",
  //   //     shortDescription: "Automated CI/CD pipelines using GitHub Actions.",
  //   //     image: "/images/cicd.png",
  //   //     techStack: ["GitHub Actions", "Docker"],
  //   //     deployedUrl: "",
  //   //     githubUrl: "https://github.com/username/ci-cd-pipeline",
  //   //   },
  //   //   {
  //   //     id: "dockerized-apps",
  //   //     title: "Dockerized Applications",
  //   //     shortDescription: "Containerized apps for easier deployment.",
  //   //     image: "/images/docker.png",
  //   //     techStack: ["Docker", "Kubernetes"],
  //   //     deployedUrl: "",
  //   //     githubUrl: "https://github.com/username/dockerized-apps",
  //   //   },
  //   //   {
  //   //     id: "cloud-deployment",
  //   //     title: "Cloud Deployment",
  //   //     shortDescription: "Deployments across AWS and Vercel with monitoring.",
  //   //     image: "/images/cloud.png",
  //   //     techStack: ["AWS", "Vercel", "Terraform"],
  //   //     deployedUrl: "https://cloud-app.com",
  //   //     githubUrl: "",
  //   //   },
  //   ],
  // },
];


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
        className={'w-full flex justify-center text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4'} />

      <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Explore my projects organized by technology stack and expertise area.  
        Each category highlights a unique aspect of my development journey.
      </p>

        {/* <DecryptedText
        className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
        text={`Explore my projects organized by technology stack and expertise area.
        Each category highlights a unique aspect of my development journey.`}
        speed={250}
        animateOn="view"
        revealDirection="center"
        /> */}
     
    </div>

    {/* Stack Categories Grid */}
    <div className="space-y-4">
      {works.map((category, index) => (
        // https://examples.motion.dev/react/accordion
        // use motion animation for accordions
        <div
          key={index + category.title}
          className="border border-gray-200 dark:border-gray-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/70 dark:bg-gray-950/80 hover:bg-gray-100 dark:hover:bg-gray-950 backdrop-blur-sm"
        >
          <button
            onClick={() => toggleAccordion(index)}
            // className="w-full flex justify-between items-center px-4 py-2 text-left text-lg font-semibold text-gray-900 dark:text-gray-100 bg-fuchsia-200"
            className="w-full flex justify-between items-center px-4 py-3 text-left text-lg font-semibold text-gray-900 dark:text-gray-100"
          >
            <span className="flex flex-col items-start gap-2">
                <p>{category.title}</p>
                <span className={`text-sm font-medium text-gray-500 dark:text-gray-400  px-3 py-1 rounded-full  ${category.works.length !==0 ? 'bg-gradient-to-r from-blue-600 to-indigo-600': 'bg-gray-100 dark:bg-gray-700'} `}>{category.works.length} projects</span> 
            </span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>

          {openIndex === index && (
            <div className="top-full p-4 rounded-b-2xl animate-fadeIn w-full mt-4 dark:border-gray-700 rounded-xl shadow-lg space-y-2">
            {/* <div className="top-full p-4 rounded-b-2xl animate-fadeIn w-full mt-4 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg space-y-2"> */}

               {category.works.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {category.works.map((project, index) => (
              <div
                key={index + category.title}
                className="bg-white dark:bg-gray-950 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700"
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
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
                          className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
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
                          className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Projects Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
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
</div>
  );
}
