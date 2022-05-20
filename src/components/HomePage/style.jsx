import styled from "styled-components";
export default styled.div`
  height: 100 vmin;

  h1 {
    font-size: 8;
    color: red;
    text-align: center;
  }
  .sousTitre {
    /* border: 6px inset #142ca4; */
    /* border: 6px inset #ff0000; */
    border: thick groove #ff0000;
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
    color: blueviolet;
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
`;
