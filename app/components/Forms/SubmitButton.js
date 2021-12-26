import { useFormikContext } from "formik";
import React from "react";
import AppButton from "../AppButton";

function SubmitButton({ title, ...props }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} {...props} onPress={handleSubmit} />;
}

export default SubmitButton;
