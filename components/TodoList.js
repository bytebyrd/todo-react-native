import { FlatList, StyleSheet, View } from 'react-native'
import TodoItem from './TodoItem';
const TodoList = () => {

    return (
        <View style={styles.listContainer}>
            <FlatList
                data={todos}
                renderItem={({ item }) => { return <TodoItem ident={item.id} todo={item.text} onDeleteTodo={deleteTodo} />; }}
                keyExtractor={(item) => item.id}
            />
        </View> 
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 5,
      }
});

export default TodoList;