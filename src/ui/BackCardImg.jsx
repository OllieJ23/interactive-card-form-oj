import { useContext } from "react";
import styled from "styled-components";
import { CVCContext } from "./Layout";



const BackCardImg = styled.img`
  position: absolute;
  left: 30rem;
  top: 45rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (max-width: 400px) {
    width: 100vh;
    left: 40rem;
    top: 15rem;
    transform: scale(1.8);
  }
`;

const OverlayCVC = styled.p`
  position: absolute;
  left: 65rem;
  top: 56rem;
  color: var(--white);
  font-size: 1.6rem /* Adjust as needed */;
  letter-spacing: 1.5px;
  z-index: 99;

  animation: 0.5s ease-out FadeLeft;

  @keyframes FadeLeft {
    0% {
      opacity: 0;
      transform: translateX(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 400px) {
   
    font-size: 2.8rem;
    left: 80rem;
    top: 23rem;
  }
`;


function BackCard() {
const [cardCVC] = useContext(CVCContext);

  return (
    <>
      <BackCardImg
        src="../../public/bg-card-back.png"
        alt="Picture of Back Credit Card (Empty)"
      />

      <OverlayCVC>{cardCVC}</OverlayCVC>
    </>
  );
}

export default BackCard;
