import React from "react";

import { Button } from "./UI";

const Banknotes = ({ banknotes, withdrawMoney }) => {
  return (
    <div>
      Please take your banknotes:
      {banknotes.map(note => {
        if (note.howMany <= 0) return null;
        return (
          <div key={note.id}>
            {note.value}$ x {note.howMany}
          </div>
        );
      })}
      <Button clicked={withdrawMoney}>Withdraw</Button>
    </div>
  );
};

export default Banknotes;
