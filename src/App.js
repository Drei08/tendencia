import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";

export default function App(){
 return <>
  <NavBar/>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/sobre" element={<Sobre/>}/>
   <Route path="/contato" element={<Contato/>}/>
  </Routes>
 </>;
}