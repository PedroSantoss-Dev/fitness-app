import { Dimensions, ImageBackground, StyleSheet, Text } from "react-native";
import Button from "../../components/button";
import Fontsize from "../../constants/Fontsize";
import colors from "../../constants/colors";
import Font from "../../constants/Font";
import Spacing from "../../constants/Spacing";
import { LinearGradient } from "expo-linear-gradient";
const image = 'https://img.freepik.com/fotos-gratis/mulher-treinando-com-barra-nos-ombros_651396-1619.jpg?t=st=1715905289~exp=1715908889~hmac=eecc8592a452f71e3db8cea05561d771fea08fd2c07121d61e28b1080e79f243&w=360'


const OnBoardingScreen = () => {
    const { height } = Dimensions.get("window");
    const handlePress = () => console.log("Pressed");
    return (
        <ImageBackground
            source={{ uri: image }}
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
                    color: colors.text,
                    fontFamily: Font["poppins-regular"],
                    textAlign: "center",
                    marginTop: Spacing.margin.base,
                    marginBottom: Spacing.margin.xxl,
                }}
                >
                Comece sua jornada de fitness
            </Text>
            <Button style={{ marginBottom: 50, marginHorizontal: 20 }} onPress={handlePress}>Get started</Button>
            </LinearGradient>
        </ImageBackground>
    );
}

export default OnBoardingScreen;

const styles = StyleSheet.create({})