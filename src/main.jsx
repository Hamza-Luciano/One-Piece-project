import { Route, Routes } from "react-router-dom";
import Card from "./components/card";
import Contact from "./components/contact";
import Home from "./components/HomePage";
import Lieux from "./components/Lieux";
import Marine from "./components/Marine";
import Mugiwara from "./components/Mugiwara";
import Mystères from "./components/Mystères";
import Pirates from "./components/Pirates";
import Revolutionnaires from "./components/Revolutionnaires";
import Yonkou from "./components/Yonkou";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/wanted" element={<Card />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lieux" element={<Lieux />} />
        <Route path="/pirates" element={<Pirates />} />
        <Route path="/yonkou" element={<Yonkou />} />
        <Route path="/mugiwara" element={<Mugiwara />} />
        <Route path="/marine" element={<Marine />} />
        <Route path="/mysteres" element={<Mystères />} />
        <Route path="/revolutionnaires" element={<Revolutionnaires />} />
      </Routes>
    </main>
  );
}

export default Main;

// FINIR d'insérer les routes :
// push les modif + créer branche menuBurger
// - puis créer le menu burger
// - les lister dans la navbar
