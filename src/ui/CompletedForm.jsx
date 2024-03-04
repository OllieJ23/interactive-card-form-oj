import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import Loading from "./Loading";
import { CVCContext, MonthContext, NameContext, NumberContext, YearContext } from "./Layout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;

  @media (max-width: 400px) {
    margin-left: 65rem;
    margin-top: 35rem;
    transform: scale(2.5);
  }
`;

const IMG = styled.img`
  animation: 1.5s ease-out FadeUp;

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
`;

const ThankYou = styled.span`
  font-size: 2.6rem;
  color: var(--very-dark-violet);
  letter-spacing: 0.4rem;
  font-weight: 600;
  transition: all 0.2s ease-in;
  animation: 1.6s ease-out FadeUp;

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
`;

const Message = styled.span`
  font-size: 1.4rem;
  color: var(--dark-violet);
  letter-spacing: 1.5;
  font-weight: 400;
`;


const ContinueButton = styled.button`
  background-color: var(--very-dark-violet);
  color: var(--white);
  padding: 0.8rem 1.8rem;
  border-radius: 6px;
  width: 30rem;
  border: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: hsl(277.5, 68.08510638297872%, 18.43137254901961%);
  }

  &:active {
    transform: scale(0.95);
  }
`;




function CompletedForm() {

    const [, setCardName] = useContext(NameContext);
    const [, setCardNumber] = useContext(NumberContext);
    const [, setCardMonth] = useContext(MonthContext);
    const [, setCardYear] = useContext(YearContext);
    const [, setCardCVC] = useContext(CVCContext);

const [loading, setLoading] = useState(true);
const navigate =useNavigate();

function handleReset() {  
    setCardName("JANE APPLESEED");
    setCardNumber("0000 0000 0000 0000");
    setCardMonth("00");
    setCardYear("00");
    setCardCVC("000");
    


    navigate("/");
}

  useEffect(() => {

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    fetchData();
  }, []);



    return (
      <Container>
        {loading ? <Loading /> : null}
        <IMG src="public\images\icon-complete.svg" alt="" />
        <ThankYou>THANK YOU!</ThankYou>
        <Message>We&apos;ve Added Your Card Details.</Message>
        <ContinueButton onClick={handleReset}>Continue</ContinueButton>
      </Container>
    );
}

export default CompletedForm
