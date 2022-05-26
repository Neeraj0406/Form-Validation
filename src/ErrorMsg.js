import { ErrorMessage } from "formik";
import React from "react";

const ErrorMsg = ({ name }) => {
  return (
    <span style={{ color: "red" }}>
      <ErrorMessage name={name} />
    </span>
  );
};

export default ErrorMsg;
