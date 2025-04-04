import Menu from "./components/menu";
import Contacto from "./components/contacto";
import About from "./components/about";
import Ours from "./components/ours";
import Habitaciones from "./components/habitaciones";
import Footer from "./components/footer";
import Banner from "./components/banner";

function App() {
  return (
    <>
    <Menu/>
    <Banner/>
    <div className="w3-content" style={{"maxWidth":"1532px"}}>
    <Habitaciones/>
    <About/>
    <Ours/>
    <Contacto/>
    </div>

    <Footer/>
    </>
  )
}

export default App
