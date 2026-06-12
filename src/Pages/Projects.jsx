 
import ProjectDetailCard from "../Components/ProjectDetailCard";
import SectionHeader from "../Components/SectionHeader";

const projects = [
  {
    img: "/img/ecommerse.png",
    alt: "Shoppingholic",
    title: "Shoppingholic",
    description:
      "A full stack ecommerce application with customer and admin workflows. Includes authentication, product management, cart functionality, order tracking and Cloudinary image storage.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    features: [
      "Authentication & Authorization",
      "Cart Management",
      "Order Tracking",
      "Admin Dashboard",
      "Dark / Light Theme",
    ],
    live: "https://shoppingholic.netlify.app/",
    github: "https://github.com/Vaibhavi-Bhosale/ecommerce.git",
    reverse: false,
  },
  {
    img: "/img/chatbot.png",
    alt: "AI College Assistant",
    title: "AI College Assistant",
    description:
      "AI-powered chatbot built using Google Gemini API. Helps students with admissions, placements, fees, courses, hostel information and college facilities.",
    techStack: ["React", "TypeScript", "Gemini API", "Tailwind CSS", "Vite"],
    features: [
      "Natural Language Queries",
      "AI Powered Responses",
      "Dark / Light Mode",
      "Responsive Design",
    ],
    live: "https://ur-college-buddy.netlify.app/",
    github: "https://github.com/Vaibhavi-Bhosale/college-chatbot",
    reverse: true,
  },
  {
    img: "/img/apod.png",
    alt: "NASA APOD",
    title: "NASA APOD Explorer",
    description:
      "A React application that fetches and displays NASA's Astronomy Picture of the Day using NASA APIs.",
    techStack: ["React", "Axios", "Tailwind CSS", "NASA API"],
    features: [
      "API Integration",
      "Responsive Design",
      "Daily Astronomy Images",
    ],
    live: "https://apodimg.netlify.app/",
    github: "https://github.com/Vaibhavi-Bhosale/apod-project.git",
    reverse: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-6 md:px-12 bg-black scroll-mt-5"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          
          title="Things I've Built "
          description="A collection of projects showcasing my skills in frontend development, backend development, API integration, authentication, and AI applications."
        />

        {projects.map((project) => (
          <ProjectDetailCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
