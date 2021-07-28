import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const TodoTrash = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onDelete}>
      <Image
        style={styles.image}
        source={require("./../../assets/images/trashCan.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "40%",
  },
  image: {
    height: "100%",
    aspectRatio: 1,
  },
});

export default TodoTrash;
