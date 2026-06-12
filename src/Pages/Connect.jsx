 
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeader from "../Components/SectionHeader";
import { CONTACT_EMAIL } from "../config/contact";

function Connect() {
  

   

  return (
    <section
      id="connect"
      className="py-20 md:py-28 px-6 md:px-12 scroll-mt-5 bg-black
      "
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          
          title="Let's Build Something Together"
          description="Got an idea or opportunity? I'm open to freelance work, collaborations, and internships. Send me a message or reach out directly."
        />

        <div className="flex items-center justify-center">
           

          {/* Direct Contact */}
          <motion.div
            className="flex flex-col justify-center gap-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#3F4F44] rounded-2xl p-6 md:p-8 border border-[#A27B5C]/20">
              <h3 className="font1 text-[#A27B5C] text-lg mb-4">
                Email
              </h3>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 font-body text-[#DCD7C9] hover:text-[#A27B5C] transition group mb-6"
              >
                <FaEnvelope
                  size={22}
                  className="text-[#A27B5C] group-hover:scale-110 transition"
                />
                <span className="break-all">{CONTACT_EMAIL}</span>
              </a>

              <p className="font-body text-[#DCD7C9]/70 text-sm leading-relaxed mb-6">
                Lets build something great together. Feel free to reach out anytime!
              </p>

              <div className="flex gap-5">
                <a
                  href="https://www.linkedin.com/in/vaibhavi-bhosale-developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-[#DCD7C9] hover:text-[#A27B5C] transition"
                >
                  <FaLinkedin size={32} />
                </a>
                <a
                  href="https://github.com/Vaibhavi-Bhosale"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-[#DCD7C9] hover:text-[#A27B5C] transition"
                >
                  <FaGithub size={32} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
