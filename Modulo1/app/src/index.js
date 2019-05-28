import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import Todo from "./components/Todo";
import "./config/ReactotronConfig";

//console.tron.log("bla");

export default class App extends Component {
  state = {
    todos: ["Estudar", "Jogar"]
  };

  addTodo = () => {
    this.setState({ todos: [...this.state.todos, "bla"] });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.todos.map((todo, index) => (
          <Todo key={index} title={todo} />
        ))}
        <Button title="Add Novo item" onPress={() => this.addTodo()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
