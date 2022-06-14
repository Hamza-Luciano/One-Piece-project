import SHome from "./style";
import Rayleigh from "../../assets/Rayleigh.jpg";
import Rocks from "../../assets/Rocks.jpg";
import Shanks from "../../assets/shanks.jpg";
// import objLuffy from "../Mugiwara/index";

function Home() {
  return (
    <SHome>
      <h1>Démonstration WILD CODE SCHOOL</h1>
      <button>Update</button>
      <div className="images">
        {/* CHANGE IMAGE OF GRAND LINE, IMPORT... */}
        <p className="texte">
          <br /> <br /> Grand Line est l'océan actuel qui suit une ligne
          imaginaire qui s'étend du Nord-Ouest au Sud-Est dans le milieu du
          monde et perpendiculaire à Red Line. Red Line est un vaste continent
          qui encercle le globe du Nord-Est au Sud-Ouest. Ces deux lignes
          divisent le monde en quatre mers: North Blue, East Blue, West Blue et
          South Blue. Il est dit que ce tronçon de l'océan est l'endroit le plus
          dangereux du monde et est parfois appelé le cimetière des pirates en
          raison de cette réputation. La plupart des gens croient qu'il est
          impossible de quitter en toute sécurité la Route de tous les Périls
          sauf à son début et la fin; toutefois, le Gouvernement Mondial envoie
          régulièrement des navires dans Calm Belt en revêtant leurs coques avec
          du Granit Marin - cela les rend "invisible", autrement dit plus
          difficile à détecter, pour les monstres marins
        </p>
        <p className="sousTitre"> Rayleigh </p>
        {/* Chercher pour la const présente dans index Mugiwara ne s'affiche pas

        <p>{objLuffy}</p> */}
        <img src={Rayleigh} alt="Rayleigh" />

        <p className="sousTitre">Rocks D. Xebec</p>
        <img src={Rocks} alt="Rocks" />
        <p className="sousTitre">Shanks le Roux</p>
        <img src={Shanks} alt="Shanks" />
      </div>
    </SHome>
  );
}

export default Home;
