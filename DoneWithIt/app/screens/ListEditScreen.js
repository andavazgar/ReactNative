import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  FormImagePicker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "Please select at least one image"),
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    iconInfo: {
      icon: <MaterialCommunityIcons name="floor-lamp" />,
      backgroundColor: "#fc5c65",
    },
  },
  {
    label: "Cars",
    value: 2,
    iconInfo: {
      icon: <MaterialCommunityIcons name="car" />,
      backgroundColor: "#fd9644",
    },
  },
  {
    label: "Cameras",
    value: 3,
    iconInfo: {
      icon: <MaterialCommunityIcons name="camera" />,
      backgroundColor: "#fed330",
    },
  },
  {
    label: "Games",
    value: 4,
    iconInfo: {
      icon: <MaterialCommunityIcons name="cards" />,
      backgroundColor: "#26de81",
    },
  },
  {
    label: "Clothing",
    value: 5,
    iconInfo: {
      icon: <MaterialCommunityIcons name="shoe-heel" />,
      backgroundColor: "#2bcbba",
    },
  },
  {
    label: "Sports",
    value: 6,
    iconInfo: {
      icon: <MaterialCommunityIcons name="basketball" />,
      backgroundColor: "#45aaf2",
    },
  },
  {
    label: "Movies & Music",
    value: 7,
    iconInfo: {
      icon: <MaterialCommunityIcons name="headphones" />,
      backgroundColor: "#4b7bec",
    },
  },
  {
    label: "Books",
    value: 8,
    iconInfo: {
      icon: <MaterialCommunityIcons name="book-open-variant" />,
      backgroundColor: "#a55eea",
    },
  },
  {
    label: "Other",
    value: 9,
    iconInfo: {
      icon: <MaterialCommunityIcons name="application" />,
      backgroundColor: "#778ca3",
    },
  },
];

function ListEditScreen(props) {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          images: [],
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />

        <AppFormField name="title" placeholder="Title" maxLength={255} />
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
          width="30%"
        />
        <AppFormPicker
          name="category"
          placeholder="Category"
          data={categories}
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          width="50%"
        />
        <AppFormField
          name="description"
          placeholder="Description"
          maxLength={255}
          multiline
          numberOfLines={3}
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListEditScreen;
