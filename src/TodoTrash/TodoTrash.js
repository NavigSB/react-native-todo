import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const TodoTrash = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <Image source={require("./../../assets/images/trashCan.png")} />
    </TouchableOpacity>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default TodoTrash;
