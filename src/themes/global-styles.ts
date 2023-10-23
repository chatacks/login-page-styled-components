import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Ubuntu', sans-serif;
}

html {
  font-size: 1rem;
  height: 100%
}

body {
  display: grid;
  color: #fff;
  place-items: center;
  margin: 0;
  padding: 0 1.5rem; 
  height: 100%;
  background-color: #221f2f;
}

body::after {
  content: "";
  position: absolute;
  background-color: #ed2ff0;
  width: 120px;
  height: 120px;
  left: 75%;
  top: 20%;
  filter: blur(90px);
}

body::before {
  content: "";
  position: absolute;
  background-color: #22a8cd;
  width: 120px;
  height: 120px;
  left: 20%;
  top: 75%;
  filter: blur(90px);
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

p {
  margin: 0 0 1rem;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
}

input, button {
  outline: none;
}
`;

export default GlobalStyles;
