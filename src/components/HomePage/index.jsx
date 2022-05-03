import SDemo from './style';
import law from '../../assets/law.jpg';
import Rayleigh from '../../assets/Rayleigh.jpg';
import Rocks from '../../assets/Rocks.jpg';
import Shanks from '../../assets/shanks.jpg';
import Footer from '../footer';
import Navbar from '../navbar';
// FAIRE UNE CARD avec comme modèle les fiches wanted, mediaquerry, API One Piece, UN MENU BURGER, UN CARROUSSEL, MENTION LEGAL, CONTACT AVEC UNE MODAL qui affiche mes infos en mode carte wanted, connecter une api
function Demo() {
  return (
    <SDemo>
      <Navbar />
      <h1>Démonstration WILD CODE SCHOOL</h1>
      <img src={law} alt='logo' className='logoLaw' />
      <button>Update</button>
      <div className='images'>
        <p className='sousTitre'>Grand Line</p>
        <div className='line1'>
          <img
            src='https://www.serieously.com/app/uploads/2022/03/one-piece-grand-line.jpg'
            alt='carte de Grand Line'
          />
          {/* CHANGE IMAGE OF GRAND LINE, IMPORT... */}
          <p className='texte'>
            FAIRE UNE PAGE AVEC LES ILES DECOUVERTES, SOUS FORME DE CHEMIN, LES
            PEUPLES, PAGE FRUIT DU DEMON, MARINE...
            <br /> <br /> Grand Line est l'océan actuel qui suit une ligne
            imaginaire qui s'étend du Nord-Ouest au Sud-Est dans le milieu du
            monde et perpendiculaire à Red Line. Red Line est un vaste continent
            qui encercle le globe du Nord-Est au Sud-Ouest. Ces deux lignes
            divisent le monde en quatre mers: North Blue, East Blue, West Blue
            et South Blue. Il est dit que ce tronçon de l'océan est l'endroit le
            plus dangereux du monde et est parfois appelé le cimetière des
            pirates en raison de cette réputation. La plupart des gens croient
            qu'il est impossible de quitter en toute sécurité la Route de tous
            les Périls sauf à son début et la fin; toutefois, le Gouvernement
            Mondial envoie régulièrement des navires dans Calm Belt en revêtant
            leurs coques avec du Granit Marin - cela les rend "invisible",
            autrement dit plus difficile à détecter, pour les monstres marins
          </p>
        </div>
        <p className='sousTitre'> Rayleigh</p>

        <img src={Rayleigh} alt='Rayleigh' />

        <p className='sousTitre'>Rocks D. Xebec</p>
        <img src={Rocks} alt='Rocks' />
        <p className='sousTitre'>Shanks le Roux</p>
        <img src={Shanks} alt='Shanks' />
        <Footer />
      </div>

      {/* pour les images faire un background url dans le style.jsx */}
    </SDemo>
  );
}

export default Demo;
