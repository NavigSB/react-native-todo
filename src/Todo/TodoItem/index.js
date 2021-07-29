import * as React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TodoTrash from "./../../TodoTrash/TodoTrash";
import TodoDot from "./../../TodoDot/TodoDot";
import { useState, useRef } from "react";

export default ({ id, title, onDelete, style }) => {
  const [done, setDone] = useState(false);
  const trashRef = useRef();
  const dotRef = useRef();

  function onToggleDone() {
    if(done) {
      //Item clicked when in striked-out mode
      dotRef.current.empty();
      trashRef.current.hide();
      setDone(false);
    }else{
      //Item clicked when in normal mode
      dotRef.current.fill();
      trashRef.current.show();
      setDone(true);
    }
  }

  let containerStyles;
  if (style) {
    containerStyles = { ...styles.container, ...style };
  } else {
    containerStyles = { ...styles.container };
  }
  return (
    <View style={containerStyles}>
      <TodoDot ref={dotRef} />
      <TouchableOpacity onPress={onToggleDone} style={styles.textContainer}>
        <Text style={done ? styles.textStrikout : styles.text}>{title}</Text>
      </TouchableOpacity>
      <TodoTrash ref={trashRef} onDelete={() => onDelete(id)} />
    </View>
  );
};

// bellow is for the text style when it is crossed out, do need to figure out state
//not really sure on how to implement this part of the program so i am just going to
//leave it as it is

// <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
// Solid line-through
// </Text>

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 75,
    alignItems: "center",
    width: "100%"
  },
  textContainer: {
    width: "75%",
    marginLeft: 0
  },
  text: {
    fontSize: 18,
    textAlign: "left",
  },
  textStrikout: {
    fontSize: 18,
    textAlign: "left",
    width: "75%",
    marginLeft: 0,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid"
  }
});
