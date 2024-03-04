
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  border: 4px solid var(--light-violet);
  border-radius: 50%;
  border-top: 4px solid var(--very-dark-violet);
  width: 6rem;
  height: 6rem;
  animation: ${spinAnimation} 1s linear infinite;
`;

const Loading = () => (
  <SpinnerContainer>
    <Spinner />
  </SpinnerContainer>
);

export default Loading;
