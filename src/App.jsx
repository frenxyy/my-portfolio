import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Service from "./components/service"
import Skills from "./components/skills"
import Works from "./components/works"

function App() {

  return (
    <>
      <NavBar />
        <Home />
        <div className="d-flex flex-column justify-content-center align-items-center bg-dark p-5 gap-5">
          <Service />
          <Works />
          <Skills />
        </div>
        <Footer />
    </>
  )
}

export default App
