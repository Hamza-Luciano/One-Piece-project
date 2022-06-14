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
          <Link to="/wanted" className="titleNav">
            Wanted
          </Link>
          <Link to="/lieux" className="titleNav">
            Lieux
          </Link>
          <Link to="/pirates" className="titleNav">
            Pirates
          </Link>
          <Link to="/yonkou" className="titleNav">
            Yonkou
          </Link>
          <Link to="/marine" className="titleNav">
            Marine
          </Link>
          <Link to="/revolutionnaires" className="titleNav">
            Revolutionnaires
          </Link>
          <Link to="/mugiwara" className="titleNav">
            Mugiwara
          </Link>
          <Link to="/mysteres" className="titleNav">
            Mysteres
          </Link>
        </div>
      </div>
      <div className="App"></div>
    </SNavbar>
  );
}

export default Navbar;
