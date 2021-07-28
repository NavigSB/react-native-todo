import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ToDoInput from './src/ToDoBody/ToDoInput';
import ToDoItem from './src/ToDoBody/ToDoItem';

export default function App() {
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
          <ToDoItem 
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

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
