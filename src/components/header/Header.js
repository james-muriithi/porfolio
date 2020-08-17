import React, { useEffect, useState, useContext } from "react"
import "./Header.css"
import { Fade } from "react-reveal"
import { greeting, workExperiences, bigProjects } from "../../portfolio"
import Toggle from "react-toggle"
import Context from "../../containers/theme/Context"

import "./Toggle.css"
import sun from "../../assets/images/sun.png"
import moon from "../../assets/images/moon.png"

function Header() {
  const exp = workExperiences.viewExperiences
  const proj = bigProjects.viewBigProjecst

  const myContext = useContext(Context)

  const [isDark, setDarkMode] = useState(null)
  const { dispatch } = myContext

  useEffect(() => {
    const { state } = myContext
    setDarkMode(state.isDark)
  }, [myContext])

  const setIsDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" })
  }

  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header" id="header">
          <a href="/" className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">{greeting.username}</span>
            <span className="grey-color">/&gt;</span>
          </a>
          <div className="fr">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>

            <span className="toggle">
              {isDark !== "null" && (
                <Toggle
                  // defaultChecked={state.isDark}
                  icons={{
                    checked: (
                      <img
                        src={moon}
                        width="16"
                        height="16"
                        alt="moon"
                        style={{
                          pointerEvents: "none",
                          width: "16px",
                          heigth: "16px",
                        }}
                      />
                    ),
                    unchecked: (
                      <img
                        src={sun}
                        width="16"
                        height="16"
                        alt="sun"
                        style={{
                          pointerEvents: "none",
                          width: "16px",
                          heigth: "16px",
                        }}
                      />
                    ),
                  }}
                  aria-label="toggle dark mode"
                  checked={isDark}
                  onChange={setIsDarkMode}
                />
              )}
            </span>

            <ul className="menu">
              <li>
                <a href="#skills">Skills</a>
              </li>
              {exp === true && (
                <li>
                  <a href="#experience">Experiences</a>
                </li>
              )}
              <li>
                <a href="#serviceSection">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              {proj === true && (
                <li>
                  <a href="#projects">Projects</a>
                </li>
              )}
              <li>
                <a href="#achievements">Achievements</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </Fade>
  )
}
export default Header
