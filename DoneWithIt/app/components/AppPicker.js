import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";

import defaultStyles from "../config/defaultStyles";
import AppText from "./AppText";
import AppIcons from "./AppIcons";
import Screen from "./Screen";
import AppPickerItem from "./AppPickerItem";

function AppPicker({
  data,
  iconColor = defaultStyles.colors.mediumGray,
  IconComponent,
  onSelectItem,
  placeholder,
  selectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  let icon;
  if (IconComponent) {
    icon = { ...IconComponent };
    icon.props = {
      ...IconComponent.props,
      color: iconColor,
      style: styles.icon,
    };
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <AppIcons.chevronDown color={iconColor} size={20} />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={data}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <AppPickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  icon: {
    marginRight: 15,
    fontSize: 25,
  },
  text: {
    flex: 1,
    marginRight: 15,
  },
});

export default AppPicker;
