import React, { Component, Suspense, lazy } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
const Skills = lazy(() => import("./skills/Skills"))
const StackProgress = lazy(() => import("./skillProgress/skillProgress"))
const WorkExperience = lazy(() => import("./workExperience/WorkExperience"))
const Projects = lazy(() => import("./projects/Projects"))
const StartupProject = lazy(() => import("./StartupProjects/StartupProject"))
const Achievement = lazy(() => import("./achievement/Achievement"))
const Profile = lazy(() => import("./profile/Profile"))
export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />    
        <Suspense fallback={<div></div>}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <StackProgress />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <WorkExperience />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <StartupProject />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <Achievement />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <Profile />
        </Suspense>
        <Top />
        <Footer />
        
      </div>
    );
  }
}
