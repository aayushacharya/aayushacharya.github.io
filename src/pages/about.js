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
            I'm Aayush Acharya, a Software Developer working at{" "} <ExtLink link="https://raralabs.com">RARA Labs</ExtLink> and a Computer Engineer alumni of{" "}
            <ExtLink link="http://pcampus.edu.np/">IOE, Pulchowk Campus</ExtLink>. My goal is to
            provide a meaningful contribution through research to the software engineering community.
          </p>
          <p>
            Currently, I am working in RARA Labs, carrying out projects in GraphQL and REST API using Go. 
            Here, I have designed independent execution threads using goroutines, worked with asynchronous messaging using RabbitMQ, constructed ISO20022 financial standard
            digitally signed messages and devised CI/CD pipelines. I also undertook the role of a Research Intern in <ExtLink link="https://www.naamii.org.np/">NAAMII</ExtLink>. 
            There I worked on building a Nepali automatic speech recognition using Wav2Vec 2.0, for learning the speech representations in a low resource setting and MURIL, a BERT model pretrained on indic languages, as a classification model in my final year project thesis supervised by Bishesh Khanal, Ph.D. as a research intern at NAAMII.
            Furthermore, I also built ML pipelines for identifying medical harms based on EMR data in RARA Labs.
            I am also a Beta member of the <ExtLink link="https://studentambassadors.microsoft.com/certificate/b4737c20-7e60-4e74-81ba-b97a45954a0f">Microsoft Student Learn Ambassador (MLSA)</ExtLink>. 
            As MLSAs, we serve as the community leaders, organizing workshops,
            hands-on training and educational seminars aided by Microsoft community experts. 
            I also served as a member of Engineering Youth Network, <ExtLink link="https://amnestynepal.org">Amnesty International Nepal</ExtLink>. 
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
