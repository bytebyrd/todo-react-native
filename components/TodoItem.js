import { StyleSheet, Text, View, Pressable } from "react-native"
const TodoItem = ({ ident: id, todo, onDeleteTodo }) => {
    {/* IOS does not provide rounded Corners on the native UI Element, so we have to wrap the items into views
              with views we can add rounded corners to IOS as well */}
    return (
        <Pressable
            style={({ pressed }) => {
                return [
                    styles.todo,
                    {
                        backgroundColor: pressed ? '#350576' : '#5e0acc'
                    }

                ]
            }}
            onPress={() => onDeleteTodo(id)}>
            <View>
                <Text style={styles.todoText}>
                    {todo}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    todo: {
        margin: 8,
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontSize: 20,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderBottomColor: '#350576',
        borderRightColor: '#350576  '

    },
    todoText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        padding: 8
    }
});

export default TodoItem;