import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { Button } from "./UI";

const StyledMoneyWithdraw = styled.div``;

const AVAILABLE_NOTES = [
  { id: 0, value: 10.0, name: "tens" },
  { id: 1, value: 20.0, name: "twenties" },
  { id: 2, value: 50.0, name: "fifties" },
  { id: 3, value: 100.0, name: "hundreds" }
];

const initialStatus = {
  error: null,
  success: false,
  waitingForWithdraw: false
};

const MoneyWithdraw = () => {
  const [amount, setAmount] = useState(0);
  const [banknotes, setBanknotes] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const getBanknotes = e => {
    e.preventDefault();
    setIsSubmitting(true);

    countBanknotes().then(
      response => {
        setIsSubmitting(false);
        setBanknotes(response);
        setStatus({
          ...status,
          success: true,
          error: null,
          waitingForWithdraw: true
        });
      },
      error => {
        setIsSubmitting(false);
        setStatus({
          ...status,
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
    setIsSubmitting(false);
    setAmount(null);
    setBanknotes({});
    setStatus({
      ...initialStatus
    });
  };

  return (
    <StyledMoneyWithdraw>
      <form onSubmit={e => getBanknotes(e)}>
        <input
          disabled={isSubmitting || status.waitingForWithdraw}
          value={amount === null ? 0 : amount}
          onChange={e => setAmount(e.target.value)}
          placeholder={amount}
          type="number"
          name="amount"
          required
        />
        <Button
          type="submit"
          disabled={isSubmitting || status.waitingForWithdraw}
        >
          Withdraw
        </Button>
      </form>
      {isSubmitting && <h2>Submitting</h2>}

      {status.waitingForWithdraw && (
        <div>
          Please take your banknotes:
          {banknotes.map(note => (
            <div key={note.id}>
              {note.name}: {note.howMany}
            </div>
          ))}
          <Button clicked={() => withdrawMoney()}>Withdraw</Button>
        </div>
      )}

      {status.error && (
        <div>
          Something went wrong. Please try again.{" "}
          <span>Error code: {status.error.message}</span>
        </div>
      )}
    </StyledMoneyWithdraw>
  );
};

export default MoneyWithdraw;
