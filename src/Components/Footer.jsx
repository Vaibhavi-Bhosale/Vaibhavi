import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2C3930] text-[#DCD7C9] py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left - Copyright */}
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Vaibhavi Bhosale. All rights reserved.
        </p>

        {/* Right - Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/Vaibhavi-Bhosale"
            target="_blank"
           
            className="hover:text-[#A27B5C] transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhavi-bhosale-developer/"
            target="_blank"
            
            className="hover:text-[#A27B5C] transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
