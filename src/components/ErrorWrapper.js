import React from "react";

const ErrorWrapper = ({ message }) => {
  return (
    <div>
      Something went wrong. Please try again. <code>Error code: {message}</code>
    </div>
  );
};

export default ErrorWrapper;
