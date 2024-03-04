import styled from "styled-components";
import FormRow from "./FormRow"
import { useForm } from "react-hook-form";
import { useContext} from "react";
import { CVCContext, MonthContext, NameContext, NumberContext, YearContext } from "./Layout";
import { useNavigate } from "react-router-dom";


const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 400px) {
    margin-left: 70rem;
    margin-top: 28rem;
    height: 100vh;
    transform: scale(2.5);
  }
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 1.5fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 1rem;


`;

const SubmitBtn = styled.button`
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

const Input = styled.input`
  background-color: var(--color-grey-0);
  border-radius: 6px;
  padding: 0.8rem 1.2rem;
  max-width: 30rem;
  border: 1px solid
    ${({ $hasError }) =>
      $hasError ? "var(--red)" : "var(--dark-violet)"};
  background-color: var(--color-grey-0);

  &::placeholder {
    font-weight: 400;
  }
`;

const ShortInput = styled(Input)`
  max-width: 8rem;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0rem;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const CVCInput = styled.input`
  background-color: var(--color-grey-0);
  border-radius: 6px;
  padding: 0.8rem 1.2rem;
  max-width: 12rem; /* Adjust the width as needed */
  border: 1px solid
    ${({ $hasError }) => ($hasError ? "var(--red)" : "var(--dark-violet)")};
  background-color: var(--color-grey-0);

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;


function Form() {

  const {register, formState, handleSubmit, setValue} = useForm();
  const {errors} = formState;


  const formatCardNumber = (value) => {
    // Remove non-digit characters and limit to 16 digits
    const cleanedValue = value.replace(/\D/g, "").slice(0, 16);

    // Add spaces every 4 digits
    const formattedValue = cleanedValue.replace(/(\d{4})/g, "$1 ").trim();

    // Set the formatted value in the form state
    setValue("cardNumber", formattedValue);
  };


  const [, setCardName] = useContext(NameContext);
  const [, setCardNumber] = useContext(NumberContext);
  const [, setCardMonth] = useContext(MonthContext);
  const [, setCardYear] = useContext(YearContext);
  const [, setCardCVC] = useContext(CVCContext);



 const handleNameChange = (e) => {
   const uppercaseValue = e.target.value.toUpperCase();
   setCardName(uppercaseValue);
 };

  const handleNumberChange = (e) => {
    formatCardNumber(e.target.value);
    setCardNumber(e.target.value);
  };

  const handleMonthChange = (e) => {
      setCardMonth(e.target.value);
    };

  const handleYearChange = (e) => {
        setCardYear(e.target.value);
      };

  const handleCVCChange = (e) => {
        setCardCVC(e.target.value);
      };


const navigate = useNavigate();

 function onSubmit() {
    console.log("Form submitted successfully");
    navigate("/completed");
 }


  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="CARDHOLDER NAME" error={errors?.fullName?.message}>
        <Input
          placeholder="e.g. Jane Appleseed"
          type="text"
          id="fullName"
          $hasError={errors?.fullName}
          {...register("fullName", {
            required: "Required Field!",
            pattern: {
              value: /^[A-Za-z]+ [A-Za-z]+$/i,
              message: "Not a Valid Name",
            },
            maxLength: { value: 28, message: "Name too long" },
            onChange: (e) => handleNameChange(e),
          })}
        />
      </FormRow>

      <FormRow label="CARD NUMBER" error={errors?.cardNumber?.message}>
        <Input
          placeholder="e.g. 1234 5678 9123 0000"
          id="cardNumber"
          $hasError={errors?.cardNumber}
          {...register("cardNumber", {
            required: "Required Field!",
            pattern: {
              value: /^\d{4} \d{4} \d{4} \d{4}$/,
              message: "Invalid Number",
            },
            onChange: (e) => handleNumberChange(e),
          })}
        />
      </FormRow>

      <InputContainer>
        <FormRow label="EXP. DATE" error={errors?.MM?.message}>
          <ShortInput
            placeholder="MM"
            id="MM"
            type="number"
            $hasError={errors?.MM}
            {...register("MM", {
              required: "Required Field!",
              maxLength: { value: 2, message: "Must be MM" },
              minLength: { value: 2, message: "Must be MM" },
              max: { value: 12, message: "Invalid Month" },
              min: { value: 1, message: "Invalid Month" },
              onChange: (e) => handleMonthChange(e),
            })}
          />
        </FormRow>
        <FormRow label="(MM/YY)" error={errors?.YY?.message} $isMMYYLabel={true}>
          <ShortInput
            placeholder="YY"
            id="YY"
            type="number"
            $hasError={errors?.YY}
            {...register("YY", {
              required: "Required Field!",
              maxLength: { value: 2, message: "Must be YY" },
              minLength: { value: 2, message: "Must be YY" },
              max: { value: 99, message: "Invalid Format!" },
              min: { value: 23, message: "Expired!" },
              onChange: (e) => handleYearChange(e),
            })}
          />
        </FormRow>
        <FormRow label="CVC" error={errors?.CVC?.message}>
          <CVCInput
            placeholder="e.g. 123"
            id="CVC"
            $hasError={errors?.CVC}
            type="number"
            {...register("CVC", {
              required: "Required Field!",
              maxLength: { value: 3, message: "Invalid CVC" },
              minLength: { value: 3, message: "Invalid CVC" },

              onChange: (e) => handleCVCChange(e),
            })}
          />
        </FormRow>
      </InputContainer>
      <SubmitBtn type="submit">Confirm</SubmitBtn>
    </FormContainer>
  );
}

export default Form;
