import React from "react"
import { projectsSection } from "../../portfolio"
// import { Fade } from "react-reveal"
import ProjectCard from "../../components/projectCard/ProjectCard"
import "./MyProjects.css"

export default function MyProjects() {
  return (
    // <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects" style={{ paddingTop: "100px" }}>
        <div className="projects-main-div">
          <div className="projects-header">
            <h1 className="projects-heading">{projectsSection.title}</h1>
            <p className="subTitle projects-subtitle">
              {projectsSection.subtitle}
            </p>
          </div>
          <div className="projects-cards-div">
            {projectsSection.projects.map((card, i) => {
              return (
                <ProjectCard
                  key={i}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    url: card.url,
                  }}
                />
              )
            })}
          </div>
        </div>
      </div>
    // </Fade>
  )
}
