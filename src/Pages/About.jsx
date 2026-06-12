 
import { motion } from "framer-motion";
import SectionHeader from "../Components/SectionHeader";
import { scrollToSection } from "../utils/scrollTo";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-6 md:px-12 bg-black scroll-mt-5"
      // className="py-20 md:py-28 px-6 md:px-12 bg-[#3F4F44] scroll-mt-5"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
           
          title="Who I Am"
          description="I'm a passionate full-stack developer focused on building modern, responsive web apps. I love turning complex problems into simple, elegant solutions — combining backend APIs, frontend UI/UX, and real-world deployment."
        />

        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            {
              title: "Frontend",
              text: "React, responsive UI, clean design systems, and smooth user experiences.",
            },
            {
              title: "Backend",
              text: "Node.js, Express, REST APIs, authentication, and database design.",
            },
            {
              title: "Deployment",
              text: "Production-ready apps with real-world features and live demos.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#2C3930] rounded-xl p-6 border border-[#A27B5C]/20 hover:border-[#A27B5C]/50 transition"
            >
              <h3 className="font1 text-[#A27B5C] text-lg mb-2">{item.title}</h3>
              <p className="font-body text-[#DCD7C9]/80 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <button
            type="button"
            onClick={() => scrollToSection("connect")}
            className="bg-[#DCD7C9] text-[#2C3930] font-body font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#A27B5C] hover:text-white transition cursor-pointer"
          >
            Lets Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
