import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppForm from "../components/Forms/AppForm";
import AppFormField from "../components/Forms/AppFormField";
import useLocation from "../hooks/useLocation";
import listingApi from "../api/listings";
import AppFormImagePicker from "../components/Forms/AppFormImagePicker";
import AppFormPicker from "../components/Forms/AppFormPicker";
import SubmitButton from "../components/Forms/SubmitButton";
import Screen from "../components/Screen";
import colors from "../config/colors";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setUploadProgress(0);
    setUploadVisible(true);
    const result = await listingApi.addListing(
      { ...listing, location },
      (progress) => setUploadProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);

      alert("Could not save the listing.");
      return;
    }
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <AppFormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          maxLength={8}
          keyboardType="numeric"
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormField
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" color={colors.danger} />
      </AppForm>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={uploadProgress}
        visible={uploadVisible}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
