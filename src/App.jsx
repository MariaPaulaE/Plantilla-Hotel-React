import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Rooms from "./pages/Rooms"
import Contact from "./pages/Contact"
import NotFoud from "./pages/NotFoud"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/About" element={ <About />} />
        <Route path="/Rooms" element={ <Rooms />} />
        <Route path="/Contact" element={ <Contact />} />
        <Route path="*" element={ <NotFoud/>}/>
      </Routes>
    </>
  )
}

export default App
