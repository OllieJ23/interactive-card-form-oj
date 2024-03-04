import styled from "styled-components";
import Form from "./Form";
import CardLayout from "./CardLayout";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompletedForm from "./CompletedForm";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;

  @media (max-width: 400px) {

    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    width: 100vh;
  }
`;


const GradientBg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 25%;
  height: 100%;
  background: linear-gradient(
    45deg,
    #2b0c3b,
    #431451,
    #312c5a,
    #461f37,
    #21092f
  );
  background-size: 200% 200%;
  animation: gradientAnimation 15s ease-in-out infinite;

  @keyframes gradientAnimation {
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
 @media (max-width: 400px) {
    width: 200vh;
    height: 75vh;
    left: 0;
    top: 0;
  }
`;
export const NameContext = createContext();
export const NumberContext = createContext();
export const MonthContext = createContext();
export const YearContext = createContext();
export const CVCContext = createContext();

function Layout() {
  
  const [cardName, setCardName] = useState("JANE APPLESEED");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardMonth, setCardMonth] = useState("00");
  const [cardYear, setCardYear] = useState("00");
  const [cardCVC, setCardCVC] = useState("000");
  
  return (
    <Container>

      <GradientBg  />
      <NameContext.Provider value={[cardName, setCardName]}>
        <NumberContext.Provider value={[cardNumber, setCardNumber]}>
          <MonthContext.Provider value={[cardMonth, setCardMonth]}>
            <YearContext.Provider value={[cardYear, setCardYear]}>
              <CVCContext.Provider value={[cardCVC, setCardCVC]}>
                <CardLayout />
                <Router>
                  <Routes>
                    <Route path="/" element={<Form/>} />
                    <Route path="/completed" element={<CompletedForm/>} />
                  </Routes>
                </Router>
              </CVCContext.Provider>
            </YearContext.Provider>
          </MonthContext.Provider>
        </NumberContext.Provider>
      </NameContext.Provider>
    </Container>
  );
    
  }
  

export default Layout
