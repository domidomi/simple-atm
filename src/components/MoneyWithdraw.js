import React from "react";

import styled from "styled-components";

import { Button } from "./UI";

const StyledMoneyWithdraw = styled.div``;

const MoneyWithdraw = props => {
  return (
    <StyledMoneyWithdraw>
      <form onSubmit={e => getBanknotes(e)}>
        <input
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Amount"
          type="number"
          name="amount"
          required
        />
        <Button type="submit" disabled={isSubmitting}>
          Withdraw
        </Button>
      </form>
    </StyledMoneyWithdraw>
  );
};

export default MoneyWithdraw;
