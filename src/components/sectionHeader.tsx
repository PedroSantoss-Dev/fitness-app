import { ComponentProps } from "react";
import { Text, View } from "react-native";
import Spacing from "../constants/Spacing";

const SectionHeader = ({children}:ComponentProps<"p">) => {
    return ( 
        <View style={{marginBottom: Spacing.margin.lg}}>
            <Text style={{color: "white", fontSize: 20}}>{children}</Text>
        </View>
     );
}
 
export default SectionHeader;