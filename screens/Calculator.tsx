import { CalculatorButton } from "@/components/Button";
import { useCalculator } from "@/hooks/useCalculator";
import { colors, globalStyles } from "@/theme/global.style";
import { Text, View } from "react-native";

export const CalculatorScreen = () => {
  const { number, buildNumber, clean, deleteOperation, toggleSign } =
    useCalculator();

  return (
    <View style={globalStyles.container}>
      <View
        style={{
          paddingHorizontal: 30,
          paddingBottom: 20,
        }}
      >
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyles.mainResult}
        >
          {number}
        </Text>
        <Text style={globalStyles.subResult}>25</Text>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => clean()}
          label="C"
          color={colors.lightGray}
          fontColor={colors.blackText}
        />
        <CalculatorButton
          onPress={() => toggleSign()}
          label="+/-"
          color={colors.lightGray}
          fontColor={colors.blackText}
        />
        <CalculatorButton
          onPress={() => deleteOperation()}
          label="del"
          color={colors.lightGray}
          fontColor={colors.blackText}
        />
        <CalculatorButton
          onPress={() => console.log("/")}
          label="/"
          color={colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber("7")} label="7" />
        <CalculatorButton onPress={() => buildNumber("8")} label="8" />
        <CalculatorButton onPress={() => buildNumber("9")} label="9" />
        <CalculatorButton
          onPress={() => console.log("÷")}
          label="÷"
          color={colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber("4")} label="4" />
        <CalculatorButton onPress={() => buildNumber("5")} label="5" />
        <CalculatorButton onPress={() => buildNumber("6")} label="6" />
        <CalculatorButton
          onPress={() => buildNumber("-")}
          label="-"
          color={colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber("1")} label="1" />
        <CalculatorButton onPress={() => buildNumber("2")} label="2" />
        <CalculatorButton onPress={() => buildNumber("3")} label="3" />
        <CalculatorButton
          onPress={() => buildNumber("+")}
          label="+"
          color={colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => buildNumber("0")}
          label="0"
          doubleSize={true}
        />
        <CalculatorButton onPress={() => buildNumber(".")} label="." />
        <CalculatorButton
          onPress={() => console.log("=")}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};
