 
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function ProjectDetailCard({
  img,
  alt,
  title,
  description,
  techStack,
  features,
  live,
  github,
  reverse = false,
}) {
  return (
    <motion.div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 md:gap-12 items-center mb-16 md:mb-20 last:mb-0`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl border border-[#2C3930]">
        <img
          src={img}
          alt={alt}
          className="w-full h-56 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h3 className="font1 text-2xl md:text-3xl text-[#A27B5C] mb-4">
          {title}
        </h3>

        <p className="font-body text-[#DCD7C9]/90 text-sm md:text-base leading-relaxed mb-5">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="font-body text-xs md:text-sm bg-[#2C3930] text-[#DCD7C9] px-3 py-1 rounded-full border border-[#A27B5C]/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="font-body text-sm md:text-base text-[#DCD7C9]/80 space-y-1.5 mb-6 list-disc list-inside">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="flex gap-4">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#DCD7C9] text-[#2C3930] font-body font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-[#A27B5C] hover:text-white transition"
          >
            Live Demo
          </a>
          {github && github !== "#" && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#A27B5C] text-[#A27B5C] font-body font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-[#A27B5C] hover:text-white transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

ProjectDetailCard.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  live: PropTypes.string.isRequired,
  github: PropTypes.string,
  reverse: PropTypes.bool,
};

export default ProjectDetailCard;
