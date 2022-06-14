import styled from "styled-components";

export default styled.div`
  @keyframes square-to-circle {
    0% {
      border-radius: 0 0 0 0;
      background: linear-gradient(blue, white, red);
    }
    25% {
      border-radius: 10% 10% 10% 10%;
      background: linear-gradient(to left, yellow, pink);
    }
    50% {
      border-radius: 25% 25% 25% 25%;
      background: conic-gradient(from 45deg, red, orange, yellow, green, blue, purple);
    }
      75% {
      border-radius: 40% 40% 40% 40%;
      background:  linear-gradient(70deg, #1391a1, #cdf00990);
    }
    100% {
      border-radius: 50%;
      background: conic-gradient(red, blue);;
    } 
  }
  div {
    margin-left: auto;
    width: auto;
    height: auto;
    background-color: coral;
    animation: square-to-circle 2s infinite alternate;
    font-size: 1.6em;
    display: flex;
    word-wrap;
    justify-content: center;
  }
`;
