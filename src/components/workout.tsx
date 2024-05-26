import { Dimensions, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import Spacing from "../constants/Spacing";
import { workout } from "../data";
import { LinearGradient } from "expo-linear-gradient";
import { ComponentProps } from "react";
import BodyPartCard from "./bodyPartCard";

export interface Props {
    id: number;
    name: string;
    image: string;
    nivel?: number;
    categoria?: string;
    periodo?: string;
    exercicios?: [{}]
}
const Workout = () => {
 const height = Dimensions.get("window").height

    return (
        <FlatList
            data={workout}
            numColumns={2}
            keyExtractor={(work) => work.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom:58, paddingTop:28, alignItems: "center"}}
            columnWrapperStyle={{justifyContent: "space-between"}}
            renderItem={({ item: work }) => (
               <BodyPartCard id={work.id} name={work.name} image={work.image} />
            )}
        >
          

        </FlatList>
    );
}

export default Workout;

const styles = StyleSheet.create({
    
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: Spacing.margin.lg,
        borderRadius: Spacing.borderRadius.base,
        width: 150,
        height: 150,
    }
})