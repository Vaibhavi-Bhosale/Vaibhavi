import React from 'react'

function ProjectCard({img, alt, name, des, github, live}) {
  return (
     
      <div className="bg-white md:w-100 w-[90%] rounded-2xl overflow-hidden hover:cursor-pointer hover:scale-110">
              <img
                src={img}
                alt= {alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#3F4F44]"> {name}</h3>
                <p className="text-sm text-[#2C3930] mb-4">
                  {des}
                </p>
                <div className="flex space-x-4">
                  <a
                    href= {live}
                    target="_blank"
                    className="text-[#A27B5C] hover:underline"
                  >
                    Live  
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    className="text-[#A27B5C] hover:underline"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
     
  )
}

export default ProjectCard
