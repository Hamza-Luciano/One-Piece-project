import SNavbar from "./style";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <SNavbar>
      <div className="barre">
        <div className="title">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/fr/thumb/3/34/One_Piece_%28ja%29_Logo.svg/1280px-One_Piece_%28ja%29_Logo.svg.png"
              alt="logo OP"
              className="logoOp"
            />
          </Link>
        </div>
        <div className="nom">
          <Link to="/wanted">Wanted</Link>
          <Link to="/lieux">Lieux</Link>
          <Link to="/pirates">Pirates</Link>
          <Link to="/yonkou">Yonkou</Link>
          <Link to="/marine">Marine</Link>
          <Link to="/revolutionnaires">Revolutionnaires</Link>
          <Link to="/mugiwara">Mugiwara</Link>
        </div>
      </div>
      <div className="App"></div>
    </SNavbar>
  );
}

export default Navbar;
