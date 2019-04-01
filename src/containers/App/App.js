import React, { useState, useEffect } from "react";

import { MoneyWithdraw, Header } from "../../components";

import styled, { ThemeProvider } from "styled-components";
import * as themes from "../../utils/Themes";

const AppWrapper = styled.div`
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.backgroundColor};
  padding: 20px;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`;

const App = () => {
  const [defaultTheme, setDefaultTheme] = useState(true);

  return (
    <ThemeProvider
      theme={defaultTheme ? themes.DefaultTheme : themes.DarkTheme}
    >
      <AppWrapper>
        <Header switchTheme={() => setDefaultTheme(!defaultTheme)} />
        <MoneyWithdraw />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
