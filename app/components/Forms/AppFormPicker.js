import { useFormikContext } from "formik";
import React from "react";
import { ErrorMessage } from ".";
import AppPicker from "../AppPicker";

function AppFormPicker({
  items,
  name,
  placeholder,
  numberOfColumns,
  ...props
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        name={name}
        placeholder={placeholder}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        numberOfColumns={numberOfColumns}
        {...props}
      ></AppPicker>
      {errors[name] && <ErrorMessage error={errors[name]} />}
    </>
  );
}

export default AppFormPicker;
