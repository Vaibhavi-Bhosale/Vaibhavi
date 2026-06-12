 
import { motion } from "framer-motion";
import PropTypes from "prop-types";

function SectionHeader({ label, title, description, align = "center" }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      className={`mb-12 md:mb-16 max-w-3xl ${alignClass}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="font1 text-sm md:text-base text-[#A27B5C] tracking-widest uppercase mb-3">
        {label}
      </p>
      <h2 className="font2 text-3xl md:text-5xl text-[#DCD7C9] mb-4">{title}</h2>
      {description && (
        <p className="font-body text-[#DCD7C9]/80 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

SectionHeader.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  align: PropTypes.oneOf(["center", "left"]),
};

export default SectionHeader;
