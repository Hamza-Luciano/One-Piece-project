import SFooter from "./style";
// import Contact from "../contact";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <SFooter>
      <Link to="/contact"> Contact</Link>
      Mentions légales
    </SFooter>
  );
}
// add logo ONE PIECE
// ajouter logo linkedin/ github : https://fontawesome.com/icons/linkedin?s=brands
export default Footer;
