import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";

import AppPickerItem from "./AppPickerItem";
import AppText from "./AppText";
import defaultStyles, { colors } from "../config/defaultStyles";
import icons from "../config/icons";
import Screen from "./Screen";
import Wrapper from "./Wrapper";

function AppPicker({
  data,
  icon,
  iconColor = colors.mediumGray,
  numberOfColumns = 1,
  onSelectItem,
  placeholder,
  PickerItemComponent = AppPickerItem,
  selectedItem,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <Wrapper element={icon} style={styles.icon} color={iconColor} />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <Wrapper element={icons.chevronDown} color={iconColor} size={20} />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={data}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                numberOfColumns={numberOfColumns}
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
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  icon: {
    marginRight: 15,
    fontSize: 25,
  },
  placeholder: {
    flex: 1,
    marginRight: 15,
    color: colors.mediumGray,
  },
  text: {
    flex: 1,
    marginRight: 15,
  },
});

export default AppPicker;
