import React from "react";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
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
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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

export default ListEditScreen;
