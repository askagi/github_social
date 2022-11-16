import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { useTheme } from "../hooks/useTheme"
import { GlocalStyles } from "../styles/global"
import { darkTheme, lightTheme } from "../styles/theme/default"
import { MyRoutes } from "./routes"

export function App() {

  const { isDarkTheme } = useTheme();
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Suspense fallback={null}>
          <MyRoutes />
          <GlocalStyles />  {/*Estilos globais*/}
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}
