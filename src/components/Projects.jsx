import React from 'react'
import Cards from "./Cards";
import { Element } from "react-scroll"
import projectData from "../data/projectData"


const Projects = () => {
  return (
    <Element name="projects" className="min-h-screen flex flex-col items-center mt-30">
        <h1 className="text-4xl font-bold mb-5">Projects</h1>
        <hr class="w-[90%] border-0.5 bg-gray-400 mb-20 text-center" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {projectData.map((proj) => (
            <Cards key={proj.id} project={proj}></Cards>
        ))}
        </div>

</Element>
  )
}

export default Projects