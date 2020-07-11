import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";
import icons from "../config/icons";
import Screen from "../components/Screen";
import Wrapper from "../components/Wrapper";
import { ListItem } from "../components/lists";
import ContactSellerForm from "../components/ContactSellerForm";
import listings from "../api/listings";

function ListingDetailsScreen({ navigation, route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Screen style={styles.closeIconContainer}>
        <TouchableWithoutFeedback style={styles.closeIcon} onPress={() => navigation.pop()}>
          <Wrapper element={icons.close} size={26} color={colors.mediumGray} />
        </TouchableWithoutFeedback>
      </Screen>
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        uri={listing.images[0].url}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>

        <ListItem
          style={styles.userInfo}
          image={require("../assets/andavazgar.jpg")}
          title="Andrés Vazquez"
          subTitle="5 Listings"
        />
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  closeIconContainer: {
    ...defaultStyles.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    zIndex: 100,
    position: "absolute",
    top: 5,
    right: 25,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userInfo: {
    marginTop: 40,
  },
});

export default ListingDetailsScreen;
