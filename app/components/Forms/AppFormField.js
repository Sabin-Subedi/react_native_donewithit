import { useFormikContext } from "formik";
import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, ...props }) {
  const { handleBlur, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={handleBlur(name)}
        onChangeText={handleChange(name)}
        {...props}
      />
      {errors[name] && touched[name] && <ErrorMessage error={errors[name]} />}
    </>
  );
}

export default AppFormField;
