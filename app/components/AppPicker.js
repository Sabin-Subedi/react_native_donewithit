import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  Platform,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import ListItem from "./ListItem";
import PickerItem from "./PickerItem";
import Screen from "./Screen";

function AppPicker({
  icon,
  placeholder,
  items,
  onSelectItem,
  selectedItem,
  width = "100%",
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <Feather
              name={icon}
              size={24}
              color={colors.medium}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <Feather name="chevron-down" size={24} color={colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visible} animationType="slide">
        <Screen>
          <Button onPress={() => setVisible(false)} title={"Close"} />
          {items && (
            <FlatList
              data={items}
              keyExtractor={(item) => item.value}
              numColumns={numberOfColumns}
              renderItem={({ item }) => (
                <PickerItemComponent
                  item={item}
                  onPress={() => {
                    setVisible(false);
                    onSelectItem(item);
                  }}
                />
              )}
            />
          )}
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.light,
    borderRadius: 25,
    alignItems: "center",

    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
});

export default AppPicker;
