import { StyleSheet } from "react-native";

export const colors = {
  darkGray: "#2D2D2D",
  lightGray: "#9B9B9B",
  orange: "#FF9427",

  textPrimary: "#FFFFFF",
  textSecondary: "#666666",
  blackText: "#000000",
  background: "#000000",
};

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-end",
  },
  mainResult: {
    color: colors.textPrimary,
    fontSize: 70,
    textAlign: "right",
    marginBottom: 10,
    fontWeight: "300",
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    textAlign: "right",
    fontWeight: "300",
  },
  row: {
    flexDirection: "row",
    // justifyContent: "center",
    // paddingHorizontal: 10,
    justifyContent: "space-between",
    marginBottom: 18,
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: colors.darkGray,
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    color: colors.textPrimary,
    fontSize: 35,
    // fontWeight: "400",
  },
});
