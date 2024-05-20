import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
    return ( 
        <View style={[{flex: 1, justifyContent: "center", alignItems: "center"}]}>
            <Text>Home</Text>
            <Link  href="/" style={{marginTop: 20}}>Go to Home</Link>
        </View>
     );
}
 
export default HomeScreen;

const styles = StyleSheet.create({});