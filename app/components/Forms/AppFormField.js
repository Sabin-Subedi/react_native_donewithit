import { useFormikContext } from "formik";
import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, ...props }) {
  const { handleBlur, setFieldValue, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={handleBlur(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        {...props}
      />
      {errors[name] && touched[name] && <ErrorMessage error={errors[name]} />}
    </>
  );
}

export default AppFormField;
