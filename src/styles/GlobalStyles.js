import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 :root {
    --red: hsl(0, 100%, 66%);
    --white: hsl(0, 0%, 100%);
    --light-violet: hsl(270, 3%, 87%);
    --dark-violet: hsl(279, 6%, 55%);
    --very-dark-violet: hsl(278, 68%, 11%);
      --active-input-gradient: linear-gradient(
      to right,
      hsl(249, 99%, 64%),
      hsl(278, 94%, 30%)
    );
 }

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Space Grotesk";
  color: var(--very-dark-violet);
  transition: color 0.3s, background-color 0.3s;
  line-height: 1.5;
  font-size: 1.6rem;
  /*Center Stuff */
  min-height: 100vh;
  display: flex;  
  justify-content: center;
  align-items: center;
  overflow: hidden;

}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
  transition: all 0.2s ease;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,

textarea:focus,
select:focus {
  outline: 1px solid var(--very-dark-violet);

}

input::placeholder{
  color: lightgray;
  font-weight: 600;
}

input:hover{
  background-color: #f8f8f8;
  cursor: pointer;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}

`;


export default GlobalStyles;
