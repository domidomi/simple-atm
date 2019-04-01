import React from "react";

import { MoneyWithdraw } from "../../components";

import { ThemeProvider } from "styled-components";

import DefaultTheme from "../../utils/Themes";

const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <div className="app">
        <h1>Welcome to the Simple ATM!</h1>
        <MoneyWithdraw />
      </div>
    </ThemeProvider>
  );
};

export default App;
