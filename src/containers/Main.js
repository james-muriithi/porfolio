import React, { Component } from "react"
import loadable from "@loadable/component"
import Header from "../components/header/Header"
import Greeting from "./greeting/Greeting"
import Footer from "../components/footer/Footer"
import Top from "./topbutton/Top"
const Skills = loadable(() => import("./skills/Skills"))
const StackProgress = loadable(() => import("./skillProgress/skillProgress"))
const WorkExperience = loadable(() => import("./workExperience/WorkExperience"))
const Projects = loadable(() => import("./projects/Projects"))
const StartupProject = loadable(() =>
  import("./StartupProjects/StartupProject")
)
const Achievement = loadable(() => import("./achievement/Achievement"))
const Profile = loadable(() => import("./profile/Profile"))
export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Top />
        <Greeting />
        <Skills />
        <StackProgress />
        <WorkExperience />
        <Projects />
        <StartupProject />
        <Achievement />
        <Profile />
        <Footer />
      </div>
    )
  }
}
