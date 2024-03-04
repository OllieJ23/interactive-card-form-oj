
import styled from "styled-components";


const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 90rem;
  max-height: 8rem;
`;

const Label = styled.label`
  color: var(--very-dark-violet);
  font-weight: bolder;
  letter-spacing: 1.5px;
  font-size: 1.2rem;
  margin-left: ${({ $isMMYYLabel }) => ($isMMYYLabel ? "-1.2rem" : "0")};
`;


const Error = styled.span`
  font-size: 1rem;
  color: var(--red);
  font-weight: bold;
`;




function FormRow({ label, children, error, $isMMYYLabel }) {



  return (
    <RowContainer>
      <Label $isMMYYLabel={$isMMYYLabel}>{label}</Label>
      {children}
      {error && <Error>{error}</Error>}
    </RowContainer>
  );
}

export default FormRow;
