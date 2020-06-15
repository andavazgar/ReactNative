import React from "react";
import { StyleSheet, Image, View } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { ListItem } from "../components/lists";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale!</AppText>
        <AppText style={styles.price}>$100</AppText>

        <ListItem
          style={styles.userInfo}
          image={require("../assets/andavazgar.jpg")}
          title="Andrés Vazquez"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
