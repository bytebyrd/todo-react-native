import { useState } from 'react';
import {
    Image,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import globalStyles from '../globalStyles';

const TodoInput = ({ visible, onClose, onAddTodo }) => {
    const [enteredTodo, setEnteredTodo] = useState("");
    const [error, setError] = useState("");
    return (
        <Modal
            style={styles.overlay}
            visible={visible}
            animationType='slide'>

            <View style={styles.inputContainer}>
                <Image source={require("../assets/goal.png")} style={styles.image} />
                <TextInput
                    style={styles.textInput}
                    value={enteredTodo}
                    onChangeText={setEnteredTodo}
                    placeholder='Add a todo' />
                <View style={styles.actionArea}>
                    <Pressable style={({ pressed }) => {
                        return [globalStyles.buttonDanger,
                        {
                            backgroundColor: pressed ? '#C50080' : '#f312a2'
                        }]
                    }}
                        onPress={() => {
                            setError("");
                            onClose();
                            }}>
                        <Text style={globalStyles.buttonText}>Cancel</Text>
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => {
                            return [globalStyles.buttonPrimary,
                            {
                                backgroundColor: pressed ? '#350576' : "#5e0acc"
                            }]
                        }}
                        onPress={() => {
                            if (!enteredTodo) {
                                setError("Please enter a todo!")
                            } else {
                                onAddTodo(enteredTodo);
                                setError("");
                                setEnteredTodo('');
                            }

                        }}>
                        <Text style={globalStyles.buttonText}>Add Todo</Text>

                    </Pressable>
                </View>
                {error ? <Text style={styles.error}>{error}</Text> : null}
            </View>

        </Modal>

    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 6,
        backgroundColor: '#232225',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    actionArea: {
        marginTop: 8,
        flexDirection: "row",
        alignItems: "flex-start"
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        padding: 16,
        width: "100%"
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    overlay: {
    },
    errorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        height: 300
    },
    error: {
        color: "red"
    }
});
export default TodoInput;