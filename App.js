import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DrawerNavigator from "./src/Navigation/DrawerNavigator";
import TodoItem from "./src/Todo/TodoItem";

function ListScreen() {
  return (
    <View style={styles.container}>
      <TodoItem>
        <Text>First item!</Text>
      </TodoItem>
    </View>
  );
}

export default function App() {
  return (
    <DrawerNavigator screenOptions={{headerShown: true}}>
      <ListScreen name="List 1" title="List 1" />
    </DrawerNavigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
