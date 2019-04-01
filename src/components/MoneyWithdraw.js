import React from "react";

import styled from "styled-components";

import { Button } from "./UI";

const StyledMoneyWithdraw = styled.div``;

const MoneyWithdraw = props => {
  return (
    <StyledMoneyWithdraw onClick={props.clicked}>
      <Button>Withdraw</Button>
    </StyledMoneyWithdraw>
  );
};

export default MoneyWithdraw;
