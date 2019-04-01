import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: ${props => props.theme.primaryColor};
  border-radius: 4px;
  border: 1px solid #888;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;

  &[disabled] {
    background-color: #ccc;
    cursor: picker;
  }
`;

const Button = props => {
  const {disabled, children, clicked} = props;
  console.log("disabled", disabled);
  return <StyledButton disabled={disabled} onClick={clicked}>{children}</StyledButton>;
};

export default Button;
