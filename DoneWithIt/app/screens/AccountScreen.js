import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Screen from "../components/Screen";
import DecoratedIcon from "../components/DecoratedIcon";
import AppIcons from "../components/AppIcons";
import colors from "../config/colors";
import { ListItem, ListItemSeparator } from "../components/lists";

const menuItems = [
  {
    title: "My Listings",
    iconDetails: {
      icon: AppIcons.list,
      backgroundColor: colors.primary,
      color: colors.light,
    },
  },
  {
    title: "My Messages",
    iconDetails: {
      icon: AppIcons.messages,
      backgroundColor: colors.secondary,
      color: colors.light,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <ScrollView>
        <View style={styles.container}>
          <ListItem
            title="Andrés Vazquez"
            subTitle="andavazgar.dev@gmail.com"
            image={require("../assets/andavazgar.jpg")}
          />
        </View>

        <View style={styles.groupedContainer}>
          {menuItems.map((menuItem, index) => (
            <View key={index}>
              {index > 0 && <ListItemSeparator />}
              <ListItem
                style={styles.listItem}
                title={menuItem.title}
                IconComponent={
                  <DecoratedIcon
                    IconComponent={menuItem.iconDetails.icon}
                    backgroundColor={menuItem.iconDetails.backgroundColor}
                    color={menuItem.iconDetails.color}
                  />
                }
              />
            </View>
          ))}
        </View>

        <View style={[styles.container, { marginTop: 0 }]}>
          <ListItem
            title="Logout"
            IconComponent={
              <DecoratedIcon
                IconComponent={AppIcons.logout}
                backgroundColor={colors.yellow}
              />
            }
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: colors.light,
  },
  groupedContainer: {
    marginVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: colors.light,
  },
  listItem: {
    paddingVertical: 15,
  },
  listSeparator: {
    marginVertical: 15,
  },
  screen: {
    backgroundColor: colors.lightGray,
  },
});

export default AccountScreen;
