import { Dimensions, ImageBackground, StyleSheet, Text } from "react-native";
import Fontsize from "../constants/Fontsize";
import Colors from "../constants/colors";
import Font from "../constants/Font";
import Spacing from "../constants/Spacing";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";


const OnBoardingScreen = () => {
    const { height } = Dimensions.get("window");
    return (
        <ImageBackground
            source={require("../assets/images/onBoarding.jpg")}
            style={{
                width: "100%",
                height: "100%",
                flex: 1,
                justifyContent: "flex-end",
            }}>
            <LinearGradient
                style={{
                    height: height / 3.1,
                    paddingHorizontal: Spacing.padding.lg,
                }}
                colors={[`rgba(0,0,0,0.1)`, "#000"]}
            >
                <Text
                    style={{
                        fontSize: Fontsize.xl,
                        color: Colors.text,
                        fontFamily: Font["poppins-regular"],
                        textAlign: "center",
                        marginTop: Spacing.margin.base,
                        marginBottom: Spacing.margin.xxl,
                    }}
                >
                    Comece sua jornada fitness
                </Text>

                <Link
                    style={{
                        backgroundColor: Colors.accent,
                        fontSize: Fontsize.lg,
                        fontWeight: "bold",
                        paddingHorizontal: Spacing.padding.xl,
                        paddingVertical: Spacing.padding.base,
                        borderRadius: Spacing.borderRadius.base,
                        textAlign: "center",
                        alignItems: "center",
                    }}
                    href="/homeScreen" >
                    Get started
                </Link>

            </LinearGradient>
        </ImageBackground>
    );
}


export default OnBoardingScreen;

const styles = StyleSheet.create({})