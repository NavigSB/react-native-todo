import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function ToDoItem(props) {
    return (
        <TouchableOpacity onPress = {() => props.onDelete(props.id)}>
            <View style = {styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      marginVertical: 10,
      borderColor: 'black',
      borderWidth: 1
    }
  });

export default ToDoItem;
