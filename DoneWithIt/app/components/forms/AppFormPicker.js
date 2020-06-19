import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ data, icon, name, placeholder, ...otherProps }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        data={data}
        icon={icon}
        onSelectItem={(value) => setFieldValue(name, value)}
        placeholder={placeholder}
        selectedItem={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} isVisible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
