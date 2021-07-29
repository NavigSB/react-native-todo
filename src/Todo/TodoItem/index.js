import * as React from "react";

import { StyleSheet, Text, View } from "react-native";
import TodoTrash from "./../../TodoTrash/TodoTrash";
import TodoDot from "./../../TodoDot/TodoDot";

export default ({ id, title, onDelete, style }) => {
  let containerStyles;
  if (style) {
    containerStyles = { ...styles.container, ...style };
  } else {
    containerStyles = { ...styles.container };
  }
  return (
    <View style={containerStyles}>
      <TodoDot />
      <Text>{title}</Text>{" "}
      {
        /use state on this one to change the title and making sure that the text is crossed off/
      }
      <TodoTrash onDelete={() => onDelete(id)} />
    </View>
  );
};

// bellow is for the text style when it is crossed out, do need to figure out state

// <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
// Solid line-through
// </Text>

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 75,
    alignItems: "center",
  },
});
