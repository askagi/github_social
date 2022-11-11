import { Suspense, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlocalStyles } from "../styles/global"
import { lightTheme, darkTheme } from "../styles/theme/default"
import { MyRoutes } from "./routes"

export function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false)
  return (
    <Suspense fallback={null}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <BrowserRouter>
          <MyRoutes />
          <GlocalStyles />  {/*Estilos globais*/}
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  )
}
