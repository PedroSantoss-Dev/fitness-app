import { LinearGradient } from "expo-linear-gradient";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Spacing from "../constants/Spacing";

export interface Props {
    id: number;
    name: string;
    image: string;
    nivel?: number;
    categoria?: string;
    periodo?: string;
    exercicios?: [{}]
}
const BodyPartCard = ({ id, name, image }: Props) => {
    return (
        <View key={id}>
            <TouchableOpacity
                style={styles.container}

            >
                <ImageBackground
                    source={{ uri: image }}
                    imageStyle={{ borderRadius: Spacing.borderRadius.lg }}
                    style={{
                        width: "100%",
                        height: "100%",
                        flex: 1,
                        position: "absolute",
                        justifyContent: "center",
                    }}

                >
                    <LinearGradient
                        colors={["rgba(0,0,0,0.5)", "transparent"]}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}

                    />
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", position: "absolute", top: 10, left: 10 }}>{name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}

export default BodyPartCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Spacing.borderRadius.lg,
        margin: Spacing.margin.lg,
        width: 130,
        height: 180,
    }
})