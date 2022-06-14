import SMugiwara from "./style";

function Mugiwara() {
  const objLuffy = "Je serai le futur roi des pirates!! Monkey D. Luffy";
  return (
    <SMugiwara>
      <div className="texte">
        <h2>page Mugiwara</h2>
        {objLuffy}
      </div>
    </SMugiwara>
  );
}
export default Mugiwara;

//Voir s'il est possible d'appeler la const objLuffy ailleurs
