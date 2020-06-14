import React from "react";
import { StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import DecoratedIcon from "../components/DecoratedIcon";
import AppIcons from "../components/AppIcons";
import Colors from "../config/Colors";
import ListItem from "../components/ListItem";
import { FlatList } from "react-native-gesture-handler";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    iconDetails: {
      icon: <AppIcons.list />,
      backgroundColor: Colors.primary,
      color: Colors.light,
    },
  },
  {
    title: "My Messages",
    iconDetails: {
      icon: <AppIcons.messages />,
      backgroundColor: Colors.secondary,
      color: Colors.light,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Andrés Vazquez"
          subTitle="andavazgar.dev@gmail.com"
          image={require("../assets/andavazgar.jpg")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={() => (
            <ListItemSeparator style={styles.listSeparator} />
          )}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <DecoratedIcon
                  IconComponent={item.iconDetails.icon}
                  backgroundColor={item.iconDetails.backgroundColor}
                  color={item.iconDetails.color}
                />
              }
            />
          )}
        />
      </View>

      <View style={[styles.container, { marginTop: 0 }]}>
        <ListItem
          title="Logout"
          IconComponent={
            <DecoratedIcon
              IconComponent={<AppIcons.logout />}
              backgroundColor={Colors.yellow}
            />
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: Colors.light,
  },
  listSeparator: {
    marginVertical: 15,
  },
  screen: {
    backgroundColor: Colors.lightGray,
  },
});

export default AccountScreen;
