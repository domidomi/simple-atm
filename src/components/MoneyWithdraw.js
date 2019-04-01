import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { Button } from "./UI";

import { Banknotes, ErrorWrapper } from "./";

const StyledMoneyWithdraw = styled.div``;

const AVAILABLE_NOTES = [
  { id: 0, value: 10.0, name: "tens" },
  { id: 1, value: 20.0, name: "twenties" },
  { id: 2, value: 50.0, name: "fifties" },
  { id: 3, value: 100.0, name: "hundreds" }
];

const initialStatus = {
  isSubmitting: false,
  error: null,
  success: false,
  waitingForWithdraw: false
};

const MoneyWithdraw = () => {
  const [amount, setAmount] = useState(0);
  const [banknotes, setBanknotes] = useState({});

  const [status, setStatus] = useState(initialStatus);

  const availableNotes = AVAILABLE_NOTES;

  const countBanknotes = () =>
    new Promise((resolve, reject) => {
      if (amount <= 0) reject(new Error("InvalidArgumentException"));

      let banknotesToWithdraw = [];
      let amountToWithdraw = amount;

      banknotesToWithdraw = availableNotes
        .sort((a, b) => b.value - a.value)
        .map(note => {
          const howMany = parseInt(amountToWithdraw / note.value);
          amountToWithdraw = amountToWithdraw % note.value;
          return { ...note, howMany };
        });

      // If the amount requested is not possible
      // to be withdrawn with available notes - throw error
      if (amountToWithdraw !== 0) {
        reject(new Error("NoteUnavailableException"));
      }

      resolve(banknotesToWithdraw);

      reject(new Error("Unknown exception."));
    });

  const handleFormSubmit = e => {
    e.preventDefault();
    setStatus({ ...status, isSubmitting: true });

    countBanknotes().then(
      response => {
        setBanknotes(response);
        setStatus({
          ...status,
          isSubmitting: false,
          success: true,
          error: null,
          waitingForWithdraw: true
        });
      },
      error => {
        setStatus({
          ...status,
          isSubmitting: false,
          success: false,
          error,
          waitingForWithdraw: false
        });
      }
    );
  };

  const withdrawMoney = () => {
    resetState();
  };

  const resetState = () => {
    setAmount(null);
    setBanknotes({});
    setStatus({
      ...initialStatus
    });
  };

  return (
    <StyledMoneyWithdraw>
      <form onSubmit={e => handleFormSubmit(e)}>
        <input
          disabled={status.isSubmitting || status.waitingForWithdraw}
          value={amount === 0 || amount === null ? "" : amount}
          onChange={e => setAmount(e.target.value)}
          placeholder=""
          type="number"
          name="amount"
          required
        />
        <Button
          type="submit"
          disabled={status.isSubmitting || status.waitingForWithdraw}
        >
          Withdraw
        </Button>
      </form>
      {status.isSubmitting && <p>Please wait...</p>}

      {status.waitingForWithdraw && (
        <Banknotes
          banknotes={banknotes}
          withdrawMoney={() => withdrawMoney()}
        />
      )}

      {status.error && <ErrorWrapper message={status.error.message} />}
    </StyledMoneyWithdraw>
  );
};

export default MoneyWithdraw;
