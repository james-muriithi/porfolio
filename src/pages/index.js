import React, { useReducer } from "react"
import SEO from "../components/seo/Seo"
import Main from "../containers/Main"
import "../styles/index.css"
import "../styles/font-awesome/css/all.css"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../containers/theme/Theme"
import { GlobalStyles } from "../containers/theme/Global"
import Context from "../containers/theme/Context"
import reducer from "../containers/theme/Reducer"
import preferences from "../containers/theme/Preference"

const IndexPage = () => {
  const isDark = preferences.Get()
  const [state, dispatch] = useReducer(reducer, { isDark })
  return (
    <>
      <SEO title="James Muriithi - Portfolio" />
      <Context.Provider value={{ state, dispatch }}>
        <ThemeProvider theme={state.isDark ? darkTheme : lightTheme}>
          <>
            <GlobalStyles />
            <Main />
          </>
        </ThemeProvider>
      </Context.Provider>
    </>
  )
}

export default IndexPage
