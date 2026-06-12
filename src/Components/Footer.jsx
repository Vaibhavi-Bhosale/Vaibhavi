import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-[#DCD7C9] py-6 border-t border-[#3F4F44]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="font-body text-sm mb-4 md:mb-0">
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
