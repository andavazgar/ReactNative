import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";

import listingsApi from "../api/listings";
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={getListingsApi.request} />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("ListingDetails", item)}
          >
            <Card
              title={item.title}
              subTitle={`$${item.price}`}
              imageURL={item.images[0].url}
              thumbnailURL={item.images[0].thumbnailUrl}
            />
          </TouchableOpacity>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGray,
  },
});

export default ListingsScreen;
