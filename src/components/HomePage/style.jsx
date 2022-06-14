import styled from "styled-components";
export default styled.div`
  height: 100 vmin;

  h1 {
    font-size: 8;
    color: red;
    text-align: center;
  }
  .sousTitre {
    border: thick groove #ff0000;
    width: 90vw;
    margin-right: 12rem;
    height: 1rem;
    font-family: Georgia, serif;
    font-size: 16px;
    letter-spacing: 2px;
    word-spacing: 2px;
    font-weight: 400;
    text-transform: uppercase;
  }

  button {
    color: red;
    background: #2529ab;
    display: inline-block;
    background-color: #7b38d8;
    border-radius: 10px;
    border: 4px double #cccccc;
    color: #eeeeee;
    text-align: center;
    font-size: 28px;
    padding: 20px;
    width: 200px;
    margin: 5px;
  }
  button:hover {
    cursor: url(https://cdn.custom-cursor.com/db/6670/32/naruto-itachi-uchiha-and-crow-cursor.png),
      pointer;
  }

  img {
    height: 100%;
    width: 100%;
  }
  .texte {
    text-align: justify;
    color: #ff3300;
    font-family: Georgia, serif;
    font-size: 16px;
    letter-spacing: 2px;
    word-spacing: 2px;
  }

  .line1 {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    justify-content: space-between;
  }
  /* explication : https://www.codeur.com/tuto/css/pseudo-elements-after-before-css/#quest-ce_que_les_pseudo-elements_css_%c2%ab_before_%c2%bb_et_%c2%ab_after_%c2%bb */
  .texte {
    display: block;
    position: relative;
    width: 400px;
    padding: 15px;
    border: 8px #d3d3d3 solid;
  }
  .texte:before,
  .texte:after {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border: 8px #346abf solid;
    transition: all 0.8s;
  }
  .texte:before {
    top: -8px;
    left: -8px;
    border-width: 8px 0 0 8px;
  }
  .texte:after {
    bottom: -8px;
    right: -8px;
    border-width: 0 8px 8px 0;
  }
  .texte:hover.texte:before,
  .texte:hover.texte:after {
    width: calc(100% + 8px);
    height: calc(100% + 8px);
  }
`;
