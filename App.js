import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import DrawerNavigator from "./src/Navigation/DrawerNavigator";
import TodoItem from "./src/Todo/TodoItem";
import ToDoInput from './src/ToDoBody/ToDoInput';

function ListScreen() {
  const [toDos, setToDos] = useState([]);

  function addToDoHandler(toDoTitle) {
    setToDos(currentToDos => [
      ...currentToDos,
      {id: Math.random().toString(), value: toDoTitle}
    ]);
  }

  function removeToDoHandler(toDoId) {
    setToDos(currentToDos => {
      return currentToDos.filter((toDo) => toDo.id !== toDoId);
    });
  }

  return (
    <View style = {styles.screen}>
      <FlatList
        keyExtractor = {(item, index) => item.id}
        data = {toDos}
        renderItem = {itemData =>
          <TodoItem
            id = {itemData.item.id}
            onDelete = {removeToDoHandler}
            title = {itemData.item.value}
          />
        }
      />
      <ToDoInput onAddToDo = {addToDoHandler}/>
    </View>
  );
}

export default function App() {
  return (
    <DrawerNavigator screenOptions={{headerShown: true}}>
      <ListScreen title="List 1" />
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
  screen: {
    padding: 50
  },
});
