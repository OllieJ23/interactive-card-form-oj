import { useContext } from "react";
import styled from "styled-components";
import { MonthContext, NameContext, NumberContext, YearContext } from "./Layout.jsx";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: absolute;
  left: 0rem;
  top: 0rem;
  cursor: pointer;

  @media (max-width: 400px) {
    width: 100vh;
    left: -30%;
    top: 20%;
    z-index: 1;
  }
`;


const FrontCardImg = styled(motion.img)`
  position: relative;
  left: 20rem;
  top: 15rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (max-width: 400px) {
    width: 100vh;
  }
`;

const FrontCardLogo = styled.img`
  position: absolute;
  left: 23rem;
  top: 17rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  animation: 1s ease-out Rotate;

  @keyframes Rotate {
    0% {
      opacity: 0;
      transform: rotate(-90deg);
    }
    85% {
      opacity: 0.5;

    }
    100% {
      opacity: 1;
      transform: rotate(0deg);
    
    }
  }
`;

const OverlayCardNumber = styled.p`
  position: relative;
  left: 22.5rem;
  top: 2rem;
  color: var(--white);
  font-size: 2.4rem /* Adjust as needed */;
  letter-spacing: 0.6rem;
  font-weight: 600;
  animation: 1s ease-out FadeDown;

  @keyframes FadeDown {
    0% {
      opacity: 0;
      transform: translateY(-20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 400px) {
    font-size: 4rem;
    top: -4rem;
  }
`;

const OverlayName = styled.p`
  position: relative;
  left: 22.5rem;
  top: 5rem;
  color: var(--white);
  font-size: 1.6rem /* Adjust as needed */;
  letter-spacing: 0.4rem;

  animation: 1s ease-out FadeUp;

  @keyframes FadeUp {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 400px) {
    font-size: 2.8rem;
    top: 0rem;
  }
`;

const OverlayExpDate = styled.p`
  position: relative;
  left: 55rem;
  top: 3rem;
  color: var(--white);
  font-size: 1.2rem /* Adjust as needed */;
  letter-spacing: 0.2rem;
  animation: 1s ease-out FadeLeft;

  @keyframes FadeLeft {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 400px) {
    font-size: 2.8rem;
    top: -4.5rem;
    left: 70rem;
  }
`;

function FrontCard() {
const [cardName] = useContext(NameContext);
const [cardNumber,] = useContext(NumberContext);
const [cardMonth] = useContext(MonthContext);
const [cardYear] = useContext(YearContext);

  return (
    <Container whileHover={{ rotate: -2.5 }}>
      <FrontCardImg
        src="././public\images\bg-card-front.png"
        alt="Picture of Front Credit Card (Empty)"
      />
      <FrontCardLogo src="../../public/card-logo.svg" alt="Logo of fake card image" />
      <OverlayCardNumber>{cardNumber}</OverlayCardNumber>
      <OverlayName>{cardName}</OverlayName>
      <OverlayExpDate>{`${cardMonth} / ${cardYear}`}</OverlayExpDate>
    </Container>
  );
}

export default FrontCard;
