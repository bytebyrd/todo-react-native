import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const TodoInput = ({ onAddTodo }) => {
    const [enteredTodo, setEnteredTodo] = useState("");
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                value={enteredTodo}
                onChangeText={setEnteredTodo}
                placeholder='Add a todo' />
            <Pressable
                style={({ pressed }) => {
                    return [
                        styles.button,
                        {
                            backgroundColor: pressed ? '#736C00' : '#C6BB00'
                        }

                    ]
                }}
                onPress={ () => {
                    onAddTodo(enteredTodo);
                    setEnteredTodo('');
                } }
            >
                <Text style={styles.buttonText}>Add Todo</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        flex: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        backgroundColor: "white",
        borderRadius: 20,
        marginRight: 8,
        padding: 12,
        width: "70%"
    },
    button: {
        backgroundColor: "C6BB00",
        borderRadius: 20,
        flexGrow: 1,
        

    },
    buttonText: {
        color: "white",
        textAlign: "center",
        padding: 12,
        fontWeight: "bold",

    }
});
export default TodoInput;