 
import { motion } from "framer-motion";
import { scrollToSection } from "../utils/scrollTo";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center scroll-mt-20"
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="relative w-full max-w-[350px] h-[350px]">
          {/* Board Image */}
          <div
            className="absolute inset-0 bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/img/board-guy.png')",
              backgroundSize: "contain",
            }}
          />

          {/* Text on Board */}
          <button
            onClick={() => scrollToSection("projects")}
            className="
              absolute
              top-[20%]
              left-1/2
              -translate-x-1/2
              text-2xl
              md:text-4xl
              font-bold
              text-[#2C3930]
              hover:text-[#614d3c]
              transition-all
              duration-300
              cursor-pointer
            "
          >
            View My Work
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12">
        <motion.div
          className="text-center md:text-left max-w-lg"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font2 text-5xl md:text-7xl text-[#A27B5C] mb-3">
            Vaibhavi
          </p>

          <p className="font1 text-xl md:text-3xl text-[#DCD7C9] mb-6">
            Full Stack Developer
          </p>

          <p className="font-body text-[#DCD7C9]/80 text-base md:text-lg leading-relaxed mb-8">
            Aspiring Full Stack Developer passionate about solving real-world problems through technology.
          </p>

          <div className="mt-6  ">
            <a
              href="/Vaibhavi_Bhosale_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-body
                text-[#A27B5C]
                hover:text-[#614d3c]
                transition
                underline-offset-4
                hover:underline

                
               
              "
            >
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;