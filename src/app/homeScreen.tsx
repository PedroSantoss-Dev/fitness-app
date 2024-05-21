import { Link } from "expo-router";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import Spacing from "../constants/Spacing";
import Screen from "../components/screen";
import Search from "../components/search";
import SectionHeader from "../components/sectionHeader";
import Slider from "../components/slider";

const HomeScreen = () => {
    const { height } = Dimensions.get("window");

    return (
        <Screen style={{ backgroundColor: "black", height:"100%",  }}>
            <ScrollView
                style={{
                    paddingHorizontal: Spacing.padding.base,
                }}
            >
                <Search />
                <SectionHeader>Recomendados</SectionHeader>
                <Slider/>
            </ScrollView>
        </Screen>
    );
}

export default HomeScreen;


const styles = StyleSheet.create({});