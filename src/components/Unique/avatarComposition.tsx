import { Image, StyleSheet, useWindowDimensions, View } from "react-native";

const avatars = [
    {
        source: require("../../../assets/images/avatars/man1.jpg"),
        size: 42,
        top: 20,
        left: 12,
    },
    {
        source: require("../../../assets/images/avatars/woman1.jpg"),
        size: 36,
        top: 4,
        left: 78,
    },
    {
        source: require("../../../assets/images/avatars/man2.jpg"),
        size: 38,
        top: 8,
        left: 258,
    },
    {
        source: require("../../../assets/images/avatars/woman2.jpg"),
        size: 34,
        top: 82,
        left: 260,
    },
    {
        source: require("../../../assets/images/avatars/man3.jpg"),
        size: 36,
        top: 88,
        left: 72,
    },
    {
        source: require("../../../assets/images/avatars/woman3.jpg"),
        size: 32,
        top: 52,
        left: 22,
    },
];
export default function AvatarComposition() {
    const { width: screenWidth } = useWindowDimensions();

    // Largeur maximale de la composition sur grand écran
    const compositionWidth = Math.min(screenWidth - 32, 360);

    // 360 correspond à la largeur de référence du design
    const scale = compositionWidth / 360;
    const compositionHeight = 150 * scale;

    return (
        <View
            style={[
                styles.container,
                {
                    width: compositionWidth,
                    height: compositionHeight,
                },
            ]}
        >
            {avatars.map((avatar, index) => {
                const size = avatar.size * scale;

                return (
                    <Image
                        key={index}
                        source={avatar.source}
                        resizeMode="cover"
                        style={[
                            styles.avatar,
                            {
                                width: size,
                                height: size,
                                borderRadius: size / 2,
                                top: avatar.top * scale,
                                left: avatar.left * scale,
                            },
                        ]}
                    />
                );
            })}

            <Image
                source={require("../../../assets/images/avatars/man4.jpg")}
                resizeMode="cover"
                style={[
                    styles.mainAvatar,
                    {
                        width: 88 * scale,
                        height: 88 * scale,
                        borderRadius: 44 * scale,
                        top: 30 * scale,
                        left: 136 * scale,
                    },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        position: "relative",
    },

    avatar: {
        position: "absolute",
        borderWidth: 2,
        borderColor: "#FFFFFF",
    },

    mainAvatar: {
        position: "absolute",
        borderWidth: 3,
        borderColor: "#FFFFFF",
        zIndex: 10,
    },
});