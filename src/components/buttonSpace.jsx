import React from "react";
import styled from "styled-components";

const Button = ({ onClick }) => {
  return (
    <StyledWrapper>
      <button type="button" className="btn" onClick={onClick}>
        <strong>SPACE</strong>
        <div id="container-stars">
          <div id="stars" />
        </div>
        <div id="glow">
          <div className="circle" />
          <div className="circle" />
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap");

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* Full width */
    overflow: hidden;
    height: 3rem;
    background-size: 300% 300%;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
    transition: 0.5s;
    animation: gradient_301 5s ease infinite;
    border: double 4px transparent;
    background-image: linear-gradient(#161a25, #161a25),
      linear-gradient(
        137.48deg,
        #a66bbf 10%, /* Purple */
        #a66bbf 45%, /* Purple */
        #000000 67%,
        #161a25 87%
      );
    background-origin: border-box;
    background-clip: content-box, border-box;
    font-family: "Orbitron", sans-serif;
  }

  #container-stars {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
  }

  strong {
    z-index: 2;
    font-family: "Orbitron", sans-serif;
    font-size: 12px;
    letter-spacing: 5px;
    color: #ffffff;
    text-shadow: 0 0 4px white;
  }

  #glow {
    position: absolute;
    display: flex;
    width: 12rem;
  }

  .circle {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    filter: blur(2rem);
  }

  .circle:nth-of-type(1) {
    background: rgba(166, 107, 191, 0.636); /* Purple */
    animation: orbit 8s linear infinite;
  }

  .circle:nth-of-type(2) {
    background: rgba(166, 107, 191, 0.704); /* Purple */
    animation: orbit 10s linear infinite;
  }

  .btn:active {
    border: double 4px #631e29;
    background-origin: border-box;
    background-clip: content-box, border-box;
    animation: none;
  }

  .btn:active .circle {
    background: #631e29;
  }

  @keyframes orbit {
    from {
      transform: rotate(0deg) translateX(100px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(100px) rotate(-360deg);
    }
  }

  #stars {
    position: relative;
    background: transparent;
    width: 200rem;
    height: 200rem;
  }

  #stars::after {
    content: "";
    position: absolute;
    top: -10rem;
    left: -100rem;
    width: 100%;
    height: 100%;
    animation: animStarRotate 90s linear infinite;
  }

  #stars::after {
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
  }

  #stars::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 170%;
    height: 500%;
    animation: animStar 60s linear infinite;
  }

  #stars::before {
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
    opacity: 0.5;
  }

  @keyframes animStar {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-135rem);
    }
  }

  @keyframes animStarRotate {
    from {
      transform: rotate(360deg);
    }

    to {
      transform: rotate(0);
    }
  }

  @keyframes gradient_301 {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes pulse_3011 {
    0% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;

export default Button;
