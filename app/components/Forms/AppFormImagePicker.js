import { useFormikContext } from "formik";
import React from "react";
import ImageInputLists from "../ImageInputLists";
import ErrorMessage from "./ErrorMessage";

function AppFormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const handleAdd = (value) => {
    setFieldValue(name, [...values[name], value]);
  };

  const handleRemove = (value) => {
    setFieldValue(
      name,
      values[name].filter((v) => v !== value)
    );
  };

  return (
    <>
      <ImageInputLists
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      {errors[name] && touched[name] && <ErrorMessage error={errors[name]} />}
    </>
  );
}

export default AppFormImagePicker;
