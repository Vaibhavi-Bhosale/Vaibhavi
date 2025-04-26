import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const sentence = "Full-Stack Developer | MERN";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-64px-48px)] flex flex-wrap justify-center items-center bg-[#2C3930] text-[#DCD7C9]">
      <section className="min-h-[calc(100vh-64px-48px)] flex items-center justify-center text-center px-4">
        <div>
          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4 font-inter"
          >
            Hi, I'm Vaibhavi
          </motion.h1>

          {/* Typing Animation */}
          <motion.p 
            className="text-lg md:text-2xl mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05, // delay between letters
                },
              },
            }}
          >
            {sentence.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          {/* Button */}
          <Link
            to="/projects"
            className="bg-[#DCD7C9] text-[#2C3930] font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#A27B5C] hover:text-white transition"
          >
            View My Work
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
