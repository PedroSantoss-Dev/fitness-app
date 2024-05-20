import { Link } from "expo-router";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import Spacing from "../constants/Spacing";
import Screen from "../components/screen";
import Search from "../components/search";

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
            </ScrollView>
        </Screen>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({});