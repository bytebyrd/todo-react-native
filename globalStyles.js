import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: "#1e085a"
    },
    listContainer: {
        flex: 5,
    },
    buttonPrimary: {
        // backgroundColor: "C6BB00",
        backgroundColor: "#5e0acc",
        width: 100,
        margin: 8,
    },
    buttonDanger: {
        backgroundColor: 'red',
        width: 100,
        margin: 8
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        padding: 12,
        fontWeight: "bold",

    }
});

export default styles;
