import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Perfil from "./pages/Perfil";
import Settings from "./pages/Setings";
import Erro from "./pages/Erro.jsx";
import Layout from "./layout/Layout.jsx";

function App () {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path= "/" element={<Home />} />
        <Route path= "/about" element={<About />} />
        <Route path= "/perfil" element={<Perfil />} />
        <Route path= "/settings" element={<Settings />} />
        <Route path= "/*" element={<Erro />}/>
      </Route>
    </Routes>
  );
}  

export default App;