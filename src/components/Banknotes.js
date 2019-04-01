import React from "react";

import styled from "styled-components";

import { Button } from "./UI";

const StyledBanknotes = styled.div`
  display: block;
  margin: 20px 0;
`;

const NotesList = styled.div`
  margin-bottom: 10px;
`;

const Banknotes = ({ banknotes, withdrawMoney }) => {
  return (
    <StyledBanknotes>
      <NotesList>
        Please take your banknotes:
        {banknotes.map(note => {
          if (note.howMany <= 0) return null;
          return (
            <div key={note.id}>
              {note.value}$ x {note.howMany}
            </div>
          );
        })}
      </NotesList>
      <Button clicked={withdrawMoney} success>
        Collect
      </Button>
    </StyledBanknotes>
  );
};

export default Banknotes;
