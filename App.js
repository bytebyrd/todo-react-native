import { useState } from 'react';
import { 
  Text, 
  View, 
  FlatList, 
  Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import globalStyles from './globalStyles';
export default function App() {
  const [todos, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)


  function addTodo(todo) {
      setTodos((prevState) => [...prevState, { text: todo, id: Math.random().toString() }]);
      toggleModal()
    }
  

  function toggleModal() {
    setModalVisible((prevState) => !prevState)
  }
  function deleteTodo(id) {
    const filtered = todos.filter(todo => todo.id !== id);
    setTodos(filtered);
  }
  return (
    <>  
      <StatusBar style='light' />
      <View style={globalStyles.appContainer}>
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
          <Pressable style={({ pressed }) => {
            return [
              globalStyles.buttonPrimary,
              {
                width: 200,
                backgroundColor: pressed ? '#350576' : "#5e0acc"
              }
            ]
          }}
            onPress={toggleModal}>
            <Text style={globalStyles.buttonText}>Create New Todo</Text>
          </Pressable>
          <TodoInput visible={modalVisible} onClose={toggleModal} onAddTodo={addTodo} />
        </View>


        <View style={globalStyles.listContainer}>
          <FlatList
            data={todos}
            renderItem={({ item }) => { return <TodoItem ident={item.id} todo={item.text} onDeleteTodo={deleteTodo} />; }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}