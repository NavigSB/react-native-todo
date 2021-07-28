import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ToDoInput(props) {
    const [enteredToDo, setEnteredToDo] = useState('');

    function toDoInputHandler(enteredText) {
        setEnteredToDo(enteredText);
    }

    function addToDoHandler() {
        props.onAddToDo(enteredToDo);
        setEnteredToDo('');
    }

    return (
        <View style = {styles.inputContainer}>
            <TextInput 
                placeholder = "Enter ToDo" 
                style = {styles.input} 
                onChangeText = {toDoInputHandler}
                value = {enteredToDo}
            />
            <Button 
                title = 'ADD'
                onPress = {addToDoHandler}
            />
        </View>
);
}

const styles = StyleSheet.create({
    inputContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10
    }
  });

export default ToDoInput;