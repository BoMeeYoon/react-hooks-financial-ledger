import React from "react";
import { createGlobalStyle } from "styled-components";
import { liteGrayBlue } from "./constants/color";
import ExpensesTemplate from "./components/ExpensesTemplate.js"


const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh; 

    margin: 0;
    padding: 0;

    background-color: ${liteGrayBlue};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ExpensesTemplate/>
    </>
  );
}

export default App;
