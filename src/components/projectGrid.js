import React from "react"
import projects from "../data/projects"
import { ProjectLink } from "./atoms"

const ProjectGrid = ({ showHeading }) => {
  return (
    <section className="">
      {showHeading && (
        <h2 className="mt-32 font-normal text-accent tracking-widestest">
          PROJECTS
        </h2>
      )}
      <ul className="mt-3 -mx-5 grid md:grid-cols-2 gap-6 md:gap-6">
        {projects.map(project => {
          return (
            <li
              key={project.title}
              className="py-5 px-6 relative group md:bg-secondary hover:bg-secondary"
            >
              <div className="flex justify-between space-x-3 sm:space-x-0 pb-10">
                <div>
                  <h3 className="text-xl font-semibold text-primary group-hover:text-accent">
                    
                      {project.title}
                    
                  </h3>
                  <h4 className="font-base mt-2 mb-2 text-tertiary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stack mr-2" style={{display: 'inline-block'}} viewBox="0 0 16 16">
                      <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                      <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                    </svg> 
                    {project.stack.map((eachStack,index)=>{
                      return(index===project.stack.length -1 ? eachStack : eachStack + ', ')
                    })}
                  </h4>
                  <h4 className="font-base mt-2 mb-4 text-tertiary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tags-fill mr-2" style={{display: 'inline-block'}} viewBox="0 0 16 16">
                    <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                    <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z"/>
                  </svg>
                    {project.tags.map((eachTag,index)=>{
                      return(index===project.tags.length -1 ? eachTag : eachTag + ', ')
                    })}
                  </h4>
                
                  <h4 className="font-base text-tertiary pr-3">
                    {project.description}
                  </h4>
                  <div className="flex items-center justify-start space-x-4 absolute bottom-0 mb-5">
                    {project.links === undefined ? null : project.links.map(link => {
                      return (
                        <ProjectLink
                          key={link.url}
                          label={link.label}
                          url={link.url}
                        />
                      )
                    })}
                  </div>
                </div>
                <span className="mt-1 text-sm sm:text-base text-tertiary">
                  {project.year}
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ProjectGrid
