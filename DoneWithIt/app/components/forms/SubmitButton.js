import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({ title, ...otherProps }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      style={styles.submitButton}
      title={title}
      onPress={handleSubmit}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  submitButton: {
    marginTop: 20,
  },
});

export default SubmitButton;
