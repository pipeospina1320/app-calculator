import { colors, globalStyles } from "@/theme/global.style";
import { Pressable, Text } from "react-native";

interface Props {
  label: string;
  color?: string;
  fontColor?: string;
  doubleSize?: boolean;
  onPress: () => void;
}
export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  fontColor = colors.textPrimary,
  doubleSize = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        ...globalStyles.button,
        width: doubleSize ? 180 : 80,
        opacity: pressed ? 0.8 : 1,
        backgroundColor: color,
      })}
    >
      <Text style={{ ...globalStyles.buttonText, color: fontColor }}>
        {label}
      </Text>
    </Pressable>
  );
};
