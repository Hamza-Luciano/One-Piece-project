import styled from 'styled-components';
export default styled.div`
  cursor: url(https://cdn.custom-cursor.com/db/11229/32/pac-man-3d-championship-edition-2-pointer.png),
    pointer;

  height: 100 vmin;
  h1 {
    font-size: 8;
    color: red;
    text-align: center;
  }
  .sousTitre {
    border: 6px inset #142ca4;
    height: 1rem;
    display: ruby-text;
    margin-right: 56rem;
    font-family: Georgia, serif;
    font-size: 16px;
    letter-spacing: 2px;
    word-spacing: 2px;
    font-weight: 400;
    font-style: oblique;
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

    /* background: none;
    border: 4px solid #fff;
    border-radius: 10px;
    color: #fff;
    display: block;
    font-size: 1.6em;
    font-weight: bold;
    margin: 10px auto;
    padding: 2em 6em;
    position: relative;
    text-transform: uppercase; */
  }
  button:hover {
    cursor: url(https://cdn.custom-cursor.com/db/6670/32/naruto-itachi-uchiha-and-crow-cursor.png),
      pointer;
  }

  .logoLaw {
    width: 15vh;
  }
  .images {
    height: 18vw;
    align-items: center;
  }
  .texte {
    text-align: justify;
    color: blueviolet;
    font-family: Georgia, serif;
    font-size: 16px;
    letter-spacing: 2px;
    word-spacing: 2px;
  }
  .merry {
    height: 11rem;
  }
  .line1 {
    display: flex;
    justify-content: space-between;
  }
`;
