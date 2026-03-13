import { Text, View } from "react-native";
import { styles } from "./Header.style";

export const Header = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Your Task App</Text>
            <Text style={styles.subtitle}>Capture and track your tasks</Text>
        </View>
    )
}