import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    addTask(taskText);
    setTaskText("");
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button
        title="Add Task"
        onPress={handleAddTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default ToDoForm;
