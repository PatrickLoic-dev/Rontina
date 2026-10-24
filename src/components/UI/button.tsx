import { TouchableOpacity, StyleSheet } from "react-native";
import { BodyText } from "./text";

export default function Button({ title, onPress }: { title: string; onPress: () => void }) { 
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <BodyText text={title} customstyle={styles.buttonText} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#000000",
        borderRadius: 50,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        marginVertical: 8,
    },
    buttonText: {
        color: "#FFFFFF",
    },
});