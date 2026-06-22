import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";

//Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
 return ( 
  <BrowserRouter>
    <NavBar/>
    <>
    <Routes>
     <Route path="/" element={<Home/>}/>
      <Route path="/sobre" element={<Sobre/>}/>
      <Route path="/contato" element={<Contato/>}/>
    </Routes>
    </>
    <Footer />
  </BrowserRouter>
 )
}

export default App;