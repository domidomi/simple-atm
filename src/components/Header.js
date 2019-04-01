import React from "react";

import styled from "styled-components";

import { Button } from "./UI";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Header = ({ switchTheme }) => {
  return (
    <StyledHeader>
      <h1>Welcome to the Simple ATM!</h1>
      <Button clicked={switchTheme}> Switch theme</Button>
    </StyledHeader>
  );
};

export default Header;
