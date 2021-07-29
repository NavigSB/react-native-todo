import React, { useState, useImperativeHandle, forwardRef } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const TodoDot = forwardRef((props, ref) => {
  const [filled, setFilled] = useState(false);

  function fillDot() {
    setFilled(true);
  }

  function emptyDot() {
    setFilled(false);
  }

  useImperativeHandle(ref, () => ({
    fill: fillDot,
    empty: emptyDot
  }));

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={
          filled
            ? require("./../../assets/images/TodoDotFilled.png")
            : require("./../../assets/images/TodoDotEmpty.png")
        }
      />
    </TouchableOpacity>
  );
});

// how do I make it so that it changes between the filled and the empty one?

const styles = StyleSheet.create({
  container: {
    height: "10%",
  },
  image: {
    height: "100%",
    aspectRatio: 1,
  },
});

export default TodoDot;
