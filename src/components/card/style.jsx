import styled from "styled-components";
import wanted from "../../assets/wanted.png";
export default styled.div`
  .card {
    background-image: url(${wanted});
    width: 17rem;
    height: 25rem;
    margin: 1.5rem 2rem;
    border: 4px solid black;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .wanted {
    margin-top: initial;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    opacity: 0.75;
  }
  .search {
    text-align: center;
    font-weight: bold;
    line-height: 1.5rem;
  }
  .berry {
    height: 0.8rem;
    width: 1rem;
  }
  .price {
    letter-spacing: 0.5rem;
  }
  p {
    margin: 0;
  }
  .marine {
    text-align: end;
  }
  .dead {
    word-spacing: 2rem;
  }
  .image {
    margin-top: -2rem;
  }
  .luffy {
    height: 14rem;
    width: 15rem;
    border: 2px solid black;
    padding: inherit;
    margin: initial;
  }
  /* wanted régler l'opacité du titre + chercher background-color de la couleur des cards arrière-plan; */
`;
