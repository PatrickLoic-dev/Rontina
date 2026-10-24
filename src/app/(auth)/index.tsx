import Button from "@/components/UI/button";
import IconButton from "@/components/UI/iconButton";
import  { BodyText, CaptionText, HeadTitle } from "@/components/UI/text";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    return (
        <SafeAreaView style={styles.container}>
            <HeadTitle title="Connectez-vous avec Rontina" customstyle={styles.title} />
            <BodyText text="Rejoignez, cotisez et bouffez a votre tour" customstyle={styles.body} />
            <Button title="Inscription" onPress={() => {}} />
            <BodyText text="ou" customstyle={styles.body} /> 
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}  >
                <IconButton title="Gmail" onPress={() => {}} />
                <IconButton title="Google" onPress={() => {}} />
                <IconButton title="Apple" onPress={() => {}} />
            </View>
            <CaptionText caption="En utilisant Rontina, vous acceptez la Politique de confidentialité et les Conditions de Service de Rontina" customstyle={styles.body} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal : 12,
    },
    title : {
        textAlign : "center",           
    },
    body : {
        color : "#989898",
        textAlign : "center",
    }
});
