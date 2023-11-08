import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    marginVertical: 4,
    borderRadius: 8,
    backgroundColor: "#00205B",
  },
  label: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 16,
  },
  textContainer: {
    maxWidth: "80%",
  },
  iconContainer: {
    maxWidth: "100%",
    marginRight: 8,
  },
});
