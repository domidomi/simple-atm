import React from "react";

import { ThemeProvider } from "styled-components";

import DefaultTheme from "../../utils/Themes";

const App = () => {
  return <div className="app">
    <h1>Welcome to the Simple ATM!</h1>
  </div>;
  return (
    <ThemeProvider theme={DefaultTheme}>
      <div className="app">
        <h1>Welcome to the Simple ATM!</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
