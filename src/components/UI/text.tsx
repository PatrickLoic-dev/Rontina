import { StyleSheet, Text } from "react-native";

function HeadTitle({ title, customstyle }: { title: string; customstyle: any }) {
    return (
        <Text style={[styles.title, customstyle]}>{title}</Text>
    );
}

function SubTitle({ title, customstyle }: { title: string; customstyle: any }) {
    return (
        <Text style={[styles.subtitle, customstyle]}>{title}</Text>
    );
}

function BodyText({ text, customstyle }: { text: string; customstyle: any }) {
    return (
        <Text style={[styles.body, customstyle]}>{text}</Text>
    );
}

function AmountText({ amount, customstyle }: { amount: number; customstyle: any }) {
    return (
        <Text style={[styles.amount, customstyle]}>{amount.toFixed(2)} XAF</Text>
    );
}

function CaptionText({ caption, customstyle }: { caption: string; customstyle: any }) {
    return (
        <Text style={[styles.caption, customstyle]}>{caption}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,   
        fontFamily: "GeistSemiBold",
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 20,   
        fontFamily: "GeistRegular",
        marginBottom: 8,
    },
    body: {
        fontSize: 16,
        fontFamily: "GeistMedium",
    },
    amount: {
        fontSize: 48,
        fontFamily: "GeistSemiBold",
        marginBottom: 16,
    },
    caption: {
        fontSize: 12,
        fontFamily: "GeistRegular",
        color: "#888",
    },
});

export { AmountText, BodyText, CaptionText, HeadTitle, SubTitle };

