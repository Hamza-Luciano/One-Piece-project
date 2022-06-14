import SLieux from "./style";
import sea from "../../assets/sea.webp";

function Lieux() {
  return (
    <SLieux>
      <h4>PAGE Lieux</h4>
      <img src={sea} alt="sea" usemap="#exemple-map-1" />
      <map name="exemple-map-1">
        {/* CHERCHER UN TUTO REACT POUR RENDRE L'IMAGE CLIQUABLE A PLUSIEURS ENDROITS  */}
        <area
          shape="rect"
          coords="10, 5, 20, 15"
          href="https://upload.wikimedia.org/wikipedia/fr/thumb/3/34/One_Piece_%28ja%29_Logo.svg/1280px-One_Piece_%28ja%29_Logo.svg.png"
          alt="exemple de rectangle"
        />
        {/* <area
            shape="rect"
            coords="10, 5, 20, 15"
            href="page-3.html"
            alt="exemple de rectangle"
          /> */}
      </map>

      <p className="sousTitre">Grand Line</p>
      <div className="line1">
        <img
          src="https://www.serieously.com/app/uploads/2022/03/one-piece-grand-line.jpg"
          alt="carte de Grand Line"
        />
      </div>
      {/* CHANGE IMAGE OF GRAND LINE, IMPORT... */}
      <p className="texte">
        FAIRE UNE PAGE AVEC LES ILES DECOUVERTES, SOUS FORME DE CHEMIN, LES
        PEUPLES, PAGE FRUIT DU DEMON, MARINE...
        <br /> <br /> Grand Line est l'océan actuel qui suit une ligne
        imaginaire qui s'étend du Nord-Ouest au Sud-Est dans le milieu du monde
        et perpendiculaire à Red Line. Red Line est un vaste continent qui
        encercle le globe du Nord-Est au Sud-Ouest. Ces deux lignes divisent le
        monde en quatre mers: North Blue, East Blue, West Blue et South Blue. Il
        est dit que ce tronçon de l'océan est l'endroit le plus dangereux du
        monde et est parfois appelé le cimetière des pirates en raison de cette
        réputation. La plupart des gens croient qu'il est impossible de quitter
        en toute sécurité la Route de tous les Périls sauf à son début et la
        fin; toutefois, le Gouvernement Mondial envoie régulièrement des navires
        dans Calm Belt en revêtant leurs coques avec du Granit Marin - cela les
        rend "invisible", autrement dit plus difficile à détecter, pour les
        monstres marins
      </p>
    </SLieux>
  );
}
export default Lieux;
