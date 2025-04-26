 import React from "react";

const Projects = () => {
  return (
    <>
      <section id="projects" className="py-12 px-4 md:px-20 bg-[#2C3930] text-[#DCD7C9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#A27B5C]">My Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Calculator */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img
                src="public/images/image.png"
                alt="Calculator"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#3F4F44]">Calculator</h3>
                <p className="text-sm text-[#2C3930] mb-4">
                  A simple and responsive calculator built with HTML, CSS, and
                  JavaScript. Supports basic arithmetic operations with a clean
                  UI.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://vaibhavi-bhosale.github.io/calculator-project/"
                    target="_blank"
                    className="text-[#A27B5C] hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Vaibhavi-Bhosale/calculator-project"
                    target="_blank"
                    className="text-[#A27B5C] hover:underline"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* Tic Tac Toe */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img
                src="/public/images/tic-toc-toe.webp"
                alt="Tic Tac Toe"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#3F4F44]">Tic Tac Toe</h3>
                <p className="text-sm text-[#2C3930] mb-4">
                  A fun and interactive Tic Tac Toe game made using HTML, CSS, Js.
                  Includes game restart and win detection logic for two players.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://vaibhavi-bhosale.github.io/TIc-Toc-Toe/"
                    target="_blank"
                    className="text-[#A27B5C] hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Vaibhavi-Bhosale/TIc-Toc-Toe"
                    target="_blank"
                    className="text-[#A27B5C] hover:underline"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* NASA APOD App */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img
                src="/public/images/space.jpg"
                alt="NASA APOD"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#3F4F44]">NASA APOD Viewer</h3>
                <p className="text-sm text-[#2C3930] mb-4">
                  Uses NASA’s Astronomy Picture of the Day API to show a new
                  space image every day. Built with React and Tailwind CSS.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://apodimg.netlify.app/"
                    target="_blank"
                    className="text-[#A27B5C] hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Vaibhavi-Bhosale/apod-project"
                    target="_blank"
                    className="text-[#A27B5C] hover:underline"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
