import { Dimensions, ImageBackground, StyleSheet, Text } from "react-native";
import Fontsize from "../constants/Fontsize";
import Colors from "../constants/colors";
import Font from "../constants/Font";
import Spacing from "../constants/Spacing";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
const image = 'https://img.freepik.com/fotos-gratis/mulher-treinando-com-barra-nos-ombros_651396-1619.jpg?t=st=1715905289~exp=1715908889~hmac=eecc8592a452f71e3db8cea05561d771fea08fd2c07121d61e28b1080e79f243&w=360'


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