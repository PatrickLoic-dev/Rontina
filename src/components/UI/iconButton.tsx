import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { BodyText } from "./text";

export default function IconButton({ title, onPress }: { title: string; onPress: () => void }) { 
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <BodyText text={title} customstyle={undefined} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ebebec",
        flex : 1,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginVertical: 8,
    },
});