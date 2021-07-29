import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const [dot, setDot] = useState([]);

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

// how do I make it so that it changes between the filled and the empty one?

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
