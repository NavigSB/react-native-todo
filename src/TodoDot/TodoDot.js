import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const TodoDot = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={require("./../../assets/images/TodoDotEmpty.png")}
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

export default TodoDot;
