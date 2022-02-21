import React from "react"
import { Blob } from "../components/atoms"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postList"
import ProjectList from "../components/projectList"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout activePage="/">
    <SEO />
    <div className="mt-12 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6">
      <h1 className="mt-12 lg:mt-0 max-w-3xl text-3xl sm:text-4xl text-primary font-semibold sm:text-left md:text-center lg:text-left">
        Hi, I’m Aayush.
        <br className="mb-6 lg:hidden" /> I’m a full stack developer with an
        avid interest in Deep learning.
      </h1>
      <div className="relative">
        <Blob />
        <div className="absolute w-full h-full top-0 flex items-center justify-center">
          <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full overflow-hidden">
            <img src="/images/the-avatar.png" alt="Aayush Acharya in a suit" />
          </div>
        </div>
      </div>
    </div>
    <PostList showHeading />
    <ProjectList showHeading />
    <Contact />
  </Layout>
)

export default IndexPage
