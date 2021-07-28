import * as React from "react";

import { StyleSheet, View } from "react-native";

export default ({ children, style }) => {
  let containerStyles;
  if(style) {
    containerStyles = {...styles.container, ...style};
  }else{
    containerStyles = {...styles.container};
  }
  return (
    <View style={containerStyles}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 75
  }
});