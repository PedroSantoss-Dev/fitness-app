import { TextInput, View } from "react-native";
import colors from "../constants/colors";
import Spacing from "../constants/Spacing";
import { Ionicons } from "@expo/vector-icons";
const Search = () => {
    return (
        <View
            style={{
                backgroundColor: colors.primary,
                paddingVertical: Spacing.padding.sm,
                paddingHorizontal: Spacing.padding.base,
                borderRadius: Spacing.borderRadius.base,
                marginVertical: Spacing.margin.xl,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
            <Ionicons name='search-outline' size={24} color={colors.text} />
            <TextInput
                placeholder="Pesquisar"
                placeholderTextColor={colors.text }
                style={{
                    flex: 1,
                    marginLeft: Spacing.margin.lg,
                    color: colors.accent
                }} />
        </View>
    );
}

export default Search;