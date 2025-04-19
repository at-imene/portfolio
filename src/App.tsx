import { ThemeProvider } from "@/components/theme-provider"
import { createBrowserRouter, RouterProvider } from "react-router"
import Projects from "./pages/Projects"
import ContactMe from "./pages/ContactMe"
import NotFound from "./pages/NotFound"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import './i18n'; 

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:[
        {
          index: true,
          element: <Home />
        },
        {
          path: '/projects',
          element: <Projects />
        },
        {
          path: '/contact-me',
          element: <ContactMe />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
      <RouterProvider router={routes}/>
    </ThemeProvider>
  )
}

export default App
