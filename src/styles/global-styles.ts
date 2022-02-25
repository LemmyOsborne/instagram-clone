import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    background: #fafafa;
    font-family: "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", 
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif";
    font-size: 16px;
  }
 
  button {
    border: 0;
    outline: none;
    display: inline-block;
    padding: 8px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
  }

  a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

  input {
  outline: none;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
export { GlobalStyles }
