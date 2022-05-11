import SCard from "./style";
import luffy from "../../assets/luffy.png";
import berry2 from "../../assets/berry2.gif";

function Card() {
  return (
    <SCard>
      <div className="card">
        <h1 className="wanted"> WANTED</h1>
        <div className="image">
          <img src={luffy} alt="luffy" className="luffy" />
        </div>
        <div className="search">
          <p className="dead">DEAD OR ALIVE</p>
          <p className="name">MONKEY. D. LUFFY</p>
          <p className="price">
            <img src={berry2} alt="ff" className="berry" /> 30.000.000
          </p>
          <p className="marine">MARINE</p>
        </div>
      </div>
    </SCard>
  );
}
export default Card;

// d'abord faire en dur une data.jsx, puis faire une base de donnée en mode MYSQL
