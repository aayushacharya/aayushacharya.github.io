import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ExtLink} from "../components/atoms"
import Contact from "../components/contact"
import SkillGrid from "../components/skillGrid"
import skills from "../data/skills"
import { Heading } from "../components/atoms"
const About = () => {
  return (
    <Layout activePage="about">
      <SEO title="About" />
      <div className="container">
        <article className="prose">
          <h2>About Me</h2>
          <p>
            I'm Aayush Acharya, currently studying computer engineering at{" "}
            <ExtLink link="http://pcampus.edu.np/">IOE, Pulchowk Campus</ExtLink>. My goal is to
            provide a meaningful contribution through research to the Deep Learning community and
            contribute to open source projects.
          </p>
          <p>
            Currently, I am in the Editorial Team of The Zerone magazine serving as the Event Head.  
            My responsibilities include covering tech events organized by <ExtLink link="http://locus.pcampus.edu.np">LOCUS</ExtLink>; an umbrella organization led by undergraduate students
            of IOE Pulchowk Campus. I am also a Beta member of the <ExtLink link="https://studentambassadors.microsoft.com/certificate/b4737c20-7e60-4e74-81ba-b97a45954a0f">Microsoft Student Learn Ambassador (MLSA)</ExtLink>. 
            As MLSAs, we serve as the community leaders, organizing workshops,
            hands-on training and educational seminars aided by Microsoft community experts. 
            I also serve as a member of Engineering Youth Network, <ExtLink link="https://amnestynepal.org">Amnesty International Nepal</ExtLink>. 
            We strive to raise our voice against injustice and condemn human rights violations.
          </p>
        </article>
      </div>
      <Heading>Skills</Heading>
      <p className="text-tertiary">Currently, these are the skills I have acquired over the years. Download the full CV <ExtLink link="/docs/CV.pdf">here</ExtLink>.</p>
      <div className="flex flex-col space-y-0">
        {skills.map(data => {
          return (
            <SkillGrid
              key={data.label}
              heading={data.label}
              description={data.description}
              categories={data.categories}
            />
          )
        })}
      </div>
      
      <Contact />
    </Layout>
  )
}

export default About
