import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading } from "../components/atoms"
import Contact from "../components/contact"
import ProjectGrid from "../components/projectGrid"

const Projects = () => {
  return (
    <Layout activePage="projects">
      <SEO title="Projects" />
      <Heading>Projects</Heading>
      <p className="-mt-3 mb-8 text-tertiary">
        Collection of projects.
      </p>
      <ProjectGrid />
      <Contact />
    </Layout>
  )
}

export default Projects
