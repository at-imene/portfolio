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
      children: [
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
    <div className="max-w-screen-xl w-full px-4 mx-auto space-y-8 space-b-24 mt-20 mb-40 overflow-x-hidden">
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

        <RouterProvider router={routes} />
      </ThemeProvider>

    </div>
  )
}

export default App
