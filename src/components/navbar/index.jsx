import SNavbar from "./style";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <SNavbar>
      <div>
        <Link to="/">HomePage</Link>
        <Link to="/wanted">wanted</Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/thumb/3/34/One_Piece_%28ja%29_Logo.svg/1280px-One_Piece_%28ja%29_Logo.svg.png"
          alt="logo OP"
          className="logoOP"
        />
      </div>
      {/* Ajouter logo One Piece   */}
      <div className="App"></div>
    </SNavbar>
  );
}

export default Navbar;
