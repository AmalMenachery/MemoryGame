import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 120,
    backgroundColor: "#6c757d",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#495057",
  },
  cardVisible: {
    backgroundColor: "white",
  },
  cardImg: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  resetView: { marginBottom: 24, width: "30%" },
  textStyle: { fontSize: 48, color: "#e9ecef" },
});
