import Menu from "../components/menu"
import Banner from "../components/banner"
import Habitaciones from "../components/habitaciones"
import About from "./About"
import OursHotels from "../components/ours"
import Contacto from "../components/contacto"
import Footer from "../components/footer"
export default function Home() {
  return (
    <>
    <Menu/>
    <Banner/>
    <div className="w3-content" style={{"maxWidth":"1532px"}}>
    <Habitaciones/>
    <About/>
    <OursHotels/>
    <Contacto/>
    </div>

    <Footer/>
    </>
  )
}
