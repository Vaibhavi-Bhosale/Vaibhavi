 import React from "react";
import ProjectCard from "../Components/ProjectCard";


const Projects = () => {
  return (
    <>
      <section id="projects" className="py-12 px-4 md:px-20 bg-[#2C3930] text-[#DCD7C9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#A27B5C]">My Projects</h2>

          <div className="flex justify-center items-center md:gap-14 gap-7 flex-wrap">
             

            <ProjectCard  img={"/images/vibeTube.png"}
                          alt={"vibeTube Cover Image"}
                          name={"VibeTube"}
                          des={"VibeTube is a YouTube-like web application built with the MERN stack. Users can watch, upload, like, comment, and delete videos, as well as create tweets and subscribe to other users."}
                          github = {"https://github.com/Vaibhavi-Bhosale/VibeTube.git"}
                          live = {"https://vibetube-v.netlify.app"}
                          /> 

            <ProjectCard  img={"/images/space.jpg"}
                          alt={"NASA APOD Viewer"}
                          name={"VibeTube"}
                          des={"Uses NASAs Astronomy Picture of the Day API to show a new space image every day. Built with React and Tailwind CSS."}
                          github = {"https://github.com/Vaibhavi-Bhosale/apod-project.git"}
                          live = {"https://apodimg.netlify.app/"}
                          /> 
                          
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
