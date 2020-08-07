import React from "react"
import "./Skills.css"
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill"
import { skillsSection } from "../../portfolio"
import { Fade } from "react-reveal"
import styled from "styled-components"

const MyDiv = styled.div`
  padding-top: 40px;
  @media (max-width: 768px) {
    padding-top: 10px;
  }
`

export default function Skills() {
  return (
    <MyDiv id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            <img
              alt="Saad Working"
              src={require("../../assets/images/developerActivity.svg")}
            ></img>
          </div>
        </Fade>
        <Fade up duration={1000}>
          <div className="skills-text-div">
            <h1 className="skills-heading">{skillsSection.title} </h1>
            <p className="subTitle skills-text-subtitle">
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p key={i} className="subTitle skills-text">
                    {skills}
                  </p>
                )
              })}
            </div>
          </div>
        </Fade>
      </div>
    </MyDiv>
  )
}
