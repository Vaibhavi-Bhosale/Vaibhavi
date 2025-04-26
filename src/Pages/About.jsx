import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-64px-48px)] bg-[#2C3930] text-[#DCD7C9]">
      {/* About Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-[#A27B5C]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I'm a passionate full-stack developer currently focused on building
          modern, responsive web apps with the{" "}
          <span className="text-[#A27B5C] font-medium">MERN stack</span>. I love
          turning complex problems into simple, elegant solutions. Currently
          crafting projects that combine backend APIs, frontend UI/UX, and
          real-world deployment.
        </motion.p>

        <Link
          className="inline-block bg-[#DCD7C9] text-[#2C3930] hover:text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#A27B5C] hover:text-white] transition"
          to="/connect"
        >
          Let's Connect
        </Link>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-6 bg-[#3F4F44] text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 text-[#DCD7C9]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
            "JavaScript",
          ].map((tech, index) => (
            <motion.span
              key={index}
              className="bg-[#2C3930] text-[#DCD7C9] shadow-md px-5 py-3 rounded-md font-semibold hover:bg-[#A27B5C] hover:text-white transition"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default About;
