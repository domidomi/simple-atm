import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: ${props =>
    props.success ? props.theme.successColor : props.theme.primaryColor};
  border-radius: 4px;
  border: 1px solid #888;
  color: ${props => props.theme.buttonTextColor};
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
  const { disabled, children, clicked, success } = props;
  return (
    <StyledButton disabled={disabled} onClick={clicked} success={success}>
      {children}
    </StyledButton>
  );
};

export default Button;
