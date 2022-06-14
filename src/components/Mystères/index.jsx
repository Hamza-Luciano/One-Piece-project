import brook from "../../assets/brook.jpeg";
import luffy from "../../assets/luffy.png";
import chooper from "../../assets/chooper.jpeg";
import franky from "../../assets/franky.jpeg";
import jimbei from "../../assets/jimbei.jpeg";
import nami from "../../assets/nami.jpeg";
import robin from "../../assets/robin.jpeg";
import sanji from "../../assets/sanji.jpeg";
import usopp from "../../assets/usopp.jpeg";
import zoro from "../../assets/zoro.jpeg";

// import SMystères from "./style";
// function Mystères() {
//   return (
//     <SMystères>
//       <div>PAGE Mystères</div>
//     </SMystères>
//   );
// }
// export default Mystères;

import { useState } from "react";
import SCarousel from "./style";

export default function Carousel() {
  const [images] = useState([]);
  const [position, setPosition] = useState(0);
  const CarrousselData = [
    { img: luffy },
    { img: zoro },
    { img: nami },
    { img: usopp },
    { img: sanji },
    { img: chooper },
    { img: robin },
    { img: franky },
    { img: brook },
    { img: jimbei },
  ];
  const prevSlide = () => {
    if (position === 0) return;
    setPosition(position - 1);
  };
  const nextSlide = () => {
    if (position + 4 >= CarrousselData.length) return;
    setPosition(position + 1);
  };
  return (
    <SCarousel>
      <div className="carouselContainer">
        <button type="button" onClick={prevSlide}>
          &lsaquo;
        </button>
        {CarrousselData.filter(
          (toto, img) => img >= position && img < position + 4
        ).map((data) => {
          return <img key={images} src={data.img} alt="carousel" />;
        })}
        <button type="button" onClick={nextSlide}>
          &rsaquo;
        </button>
      </div>
    </SCarousel>
  );
}
