 
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React.js" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "MongoDB" },
  { name: "Java" },
  { name: "MySQL" },
  { name: "GitHub" },
  { name: "Postman" },
];
const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-6 md:px-12 scroll-mt-5"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
         
          title="My Tech Stack"
          description="Technologies and tools I use to build full-stack applications — from UI to database."
        />

<div className="flex flex-wrap justify-center gap-4 md:gap-5 mt-12">
  {skills.map((skill, index) => (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -3 }}
      className="
        px-6 py-3
        rounded-xl
        bg-[#3F4F44]
        border border-[#A27B5C]/15
        text-[#DCD7C9]
        font-body
        font-medium
        text-sm md:text-base
        shadow-sm
        hover:border-[#A27B5C]/50
        hover:bg-[#46584c]
        transition-all duration-300
        cursor-default
      "
    >
      {skill.name}
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Skills;
