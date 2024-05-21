import { ScrollView, StyleSheet, Text, View } from "react-native";
import Spacing from "../constants/Spacing";
import { exercises } from "../data";

const Slider = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate='fast'
            pagingEnabled
            snapToInterval={270 + Spacing.margin.lg}
        >
            {exercises.map((exercise) => (
                <View style={styles.card} key={exercise.id}>
                    <Text style={styles.text}>{exercise.name}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

export default Slider;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginRight: Spacing.margin.lg,
        borderRadius: Spacing.borderRadius.base,
        width: 270,
        height: 180,
        backgroundColor: "grey",
    },
    text: {
        color: "white",
        fontSize: 30,
    },
});
