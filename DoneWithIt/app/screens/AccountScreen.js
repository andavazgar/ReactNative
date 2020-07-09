import React, { useContext } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Screen from "../components/Screen";
import DecoratedIcon from "../components/DecoratedIcon";
import icons from "../config/icons";
import colors from "../config/colors";
import { ListItem, ListItemSeparator } from "../components/lists";
import routes from "../navigation/routes";
import auth from "../api/auth";
import AuthContext from "../auth/context";

const menuItems = [
  {
    title: "My Listings",
    iconDetails: {
      icon: icons.list,
      backgroundColor: colors.primary,
      color: colors.light,
    },
    targetScreen: "",
  },
  {
    title: "My Messages",
    iconDetails: {
      icon: icons.messages,
      backgroundColor: colors.secondary,
      color: colors.light,
    },
    targetScreen: routes.MESSAGES.name,
  },
];

function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);
  return (
    <Screen style={styles.screen}>
      <ScrollView>
        <View style={styles.container}>
          <ListItem
            title={user.name}
            subTitle={user.email}
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
                icon={
                  <DecoratedIcon
                    icon={menuItem.iconDetails.icon}
                    backgroundColor={menuItem.iconDetails.backgroundColor}
                    color={menuItem.iconDetails.color}
                  />
                }
                onPress={() => navigation.navigate(menuItem.targetScreen)}
              />
            </View>
          ))}
        </View>

        <View style={[styles.container, { marginTop: 0 }]}>
          <ListItem
            title="Logout"
            icon={<DecoratedIcon icon={icons.logout} backgroundColor={colors.yellow} />}
            onPress={() => setUser(null)}
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
