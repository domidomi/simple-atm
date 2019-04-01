import React from "react";

import styled from "styled-components";

import { Button } from "./UI";

const StyledMoneyWithdraw = styled.div``;

const AVAILABLE_NOTES = [
  { id: 0, value: 10, name: "tens" },
  { id: 1, value: 20, name: "twenties" },
  { id: 2, value: 50, name: "fifties" },
  { id: 3, value: 100, name: "hundreds" }
];

const MoneyWithdraw = () => {
  const [amount, setAmount] = useState("");
  const [banknotes, setBanknotes] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const availableNotes = AVAILABLE_NOTES;
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

        {isSubmitting && <h2>Submitting</h2>}

        {banknotes && success && (
          <div>
            We have following banknotes:
            {banknotes.map(note => (
              <div>{note.name}: {note.value}</div>
            ))}
          </div>
        )}
      </form>
    </StyledMoneyWithdraw>
  );
};

export default MoneyWithdraw;
