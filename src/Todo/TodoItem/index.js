import * as React from "react";

import { StyleSheet, Text, View } from "react-native";
import TodoTrash from "./../../TodoTrash/TodoTrash"

export default ({ id, title, onDelete, style }) => {
  let containerStyles;
  if (style) {
    containerStyles = { ...styles.container, ...style };
  } else {
    containerStyles = { ...styles.container };
  }
  return (
    <View style={containerStyles}>
      <Text>{title}</Text>
      <TodoTrash onDelete={() => onDelete(id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 75,
    alignItems: "center"
  },
});
