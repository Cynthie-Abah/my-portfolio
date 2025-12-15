import { Code2, Smartphone, Wrench } from 'lucide-react';

export const workStats = [
        { label: "Projects Completed", value: 40, color: "blue"},
        { label: "Years Experience", value: 3, color: "indigo"},
        { label: "Tech Stack Mastered", value: 15, color: "purple" },
        { label: "Happy Collaborations", value: 25, color: "emerald"},
      ]

    export const variants = {
  left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  center: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
  right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
}

export const dashboardCards = [
        {
          title: "Web Development",
          icon: <Code2 className="text-indigo-400" size={28} />,
          items: ["React.js", "Next.js", "Vue.js", "Angular.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3 / SCSS"],
        },
        {
          title: "Mobile Development",
          icon: <Smartphone className="text-emerald-400" size={28} />,
          items: ["React Native (Expo)", "Mobile-first UI"],
        },
        {
          title: "Tools & Workflow",
          icon: <Wrench className="text-purple-400" size={28} />,
          items: ["Git / GitHub", "REST APIs", "Convex / Firebase / Supabase", "Vercel / Expo Go", "React Hook Form", "React Query"],
        },
      ]

export const healthcareTimelineData = [
  { 
    year: "2019–2020", 
    title: "Assistant Chief Infirmarian", 
    description: "Began caring for others while in secondary school. My dedication was recognized by the school infirmary board, where I was appointed Assistant Chief Infirmarian.", 
  },
  { 
    year: "2023", 
    title: "Direct Entry into Nursing Science", 
    description: "Earned A-level qualifications through JUPEB, which granted me direct entry into 200 Level Nursing Science at the University of Nigeria.", 
  },
  { 
    year: "2025", 
    title: "Clinical Training in 400 Level", 
    description: "Currently in 400 Level, gaining hands-on experience across diverse nursing fields: Medical-Surgical Nursing at UNTH Enugu, Community Health Nursing at Amokpo Health Centre, Mental Health Nursing at Federal Neuropsychiatric Hospital Enugu, and Reproductive Health Nursing at Poly General Hospital Enugu.", 
  },
];

export const techTimelineData = [
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
    title: "Startup Experience - IMall", 
    description: "Contributed to product development at IMall, gaining hands-on experience with collaboration, and delivering features for real users.", 
    image: "/imall.jpeg"
 },
  { 
    year: "2023-2024", 
    title: "Women Techsters Fellowship", 
    description: "Completed the Women Techsters Fellowship in Software Development where I enhanced my technical expertise while building teamwork, leadership, and professional communication skills.", 
    image: "/wtech.jpeg" 
},
  { 
    year: "2025", 
    title: "Quadups - Frontend Lead Engineer", 
    description: "Currently leading frontend development at Quadups while also managing social media strategy. It’s a mix of technical leadership and creative storytelling, helping us scale both our products and brand.", 
},
];

export 
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