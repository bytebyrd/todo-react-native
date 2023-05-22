import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
export default function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  function addTodo(todo) {
    if (!todo) {
      setError("Please enter a todo!")
    } else {
      setTodos((prevState) => [...prevState, { text: todo, id: Math.random().toString() }]);
      setError("");
    }
  }

  function deleteTodo(id) {
    const filtered = todos.filter(todo => todo.id !== id);
    setTodos(filtered);
  }
  return (
    <View style={styles.appContainer}>
      <TodoInput onAddTodo={addTodo} />

      <View style={styles.listContainer}>
        <FlatList
          data={todos}
          renderItem={({ item }) => { return <TodoItem ident={item.id} todo={item.text} onDeleteTodo={deleteTodo} />; }}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.errorContainer}>
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#232225'

  },
  listContainer: {
    flex: 5,
  },
  errorContainer: {
    flex: 1,
    alignItems: "center"
  },
  error: {
    color: "red"
  }
});
