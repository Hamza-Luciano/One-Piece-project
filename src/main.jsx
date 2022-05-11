import { Route, Routes } from "react-router-dom";
import Card from "./components/card";
import Contact from "./components/contact";
import Home from "./components/HomePage";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/wanted" element={<Card />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default Main;
