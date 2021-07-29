import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const TodoTrash = forwardRef((props, ref) => {
  const [hidden, setHidden] = useState(true);

  function hideTrash() {
    setHidden(true);
  }

  function showTrash() {
    setHidden(false);
  }

  useImperativeHandle(ref, () => ({
    hide: hideTrash,
    show: showTrash,
  }));

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={hidden ? () => {} : props.onDelete}
      touchSoundDisabled={hidden}
    >
      <Image
        style={hidden ? styles.hiddenImage : styles.image}
        source={require("./../../assets/images/trashCan.png")}
      />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    height: "20%",
  },
  image: {
    height: "100%",
    aspectRatio: 1,
    opacity: 1
  },
  hiddenImage: {
    height: "100%",
    aspectRatio: 1,
    opacity: 0
  }
});

export default TodoTrash;
