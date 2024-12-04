import { CalculatorScreen } from "@/screens/Calculator";
import { globalStyles } from "@/theme/global.style";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={globalStyles.background}>
      <CalculatorScreen />
    </View>
  );
}
