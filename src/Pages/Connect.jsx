import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Connect() {
  return (
    <div className="min-h-[calc(100vh-64px-48px)] flex flex-wrap justify-center items-center bg-[#2C3930] text-[#DCD7C9]">
      <motion.section
        className="py-12 px-4 md:px-20 text-white flex items-center justify-center flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-[#A27B5C]">Let’s Build Something Together</h2>
        <p className="mb-6 text-center">
          Got an idea or opportunity? I’m open to freelance work, collaborations, and internships.
        </p>

        <div className="flex gap-6 p-3 md:items-start md:justify-start text-white text-lg justify-center">
          <a
            href="https://www.linkedin.com/in/vaibhavi-bhosale-developer/"
            target="_blank" 
          >
            <FaLinkedin
              size={40}
              className="text-gray-100 hover:text-[#A27B5C] transition-colors"
            />
          </a>

          <a
            href="https://github.com/Vaibhavi-Bhosale"
            target="_blank"
            
          >
            <FaGithub size={40} className="text-gray-100 hover:text-[#A27B5C] transition-colors" />
          </a>
        </div>
      </motion.section>
    </div>
  );
}

export default Connect;
