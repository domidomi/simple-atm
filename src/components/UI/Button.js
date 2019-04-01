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
`;

const Button = props => {
  return <StyledButton onClick={props.clicked}>{props.children}</StyledButton>;
};

export default Button;
