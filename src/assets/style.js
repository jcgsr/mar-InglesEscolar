import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  containerExemplos: {
    backgroundColor: "transparent",
    alignItems: "center",
    marginBottom: 20,
  },
  img: {
    width: "70%",
    height: "30%",
  },
  txt: {
    color: "white",
    fontSize: 20,
  },
  txtBold: {
    fontWeight: "bold",
  },
  txtColdHeader: {
    fontWeight: "bold",
    color: "white",
  },
  txtCol: {
    color: "white",
    fontSize: 13,
    marginTop: 15,
  },
  txtRed: {
    color: "red",
    fontWeight: "bold",
  },
  txtH1: {
    fontSize: 27,
    color: "red",
    textShadowColor: "rgba(0, 0, 255, 0.75)",
    textShadowOffset: { width: 3, height: 3 },
    fontWeight: "bold",
    textShadowRadius: 4,
    margin: 20,
  },
  txtH2: {
    fontSize: 20,
    color: "red",
    textShadowColor: "rgba(0, 0, 255, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    fontStyle: "italic",
    textShadowRadius: 4,
    textAlign: "center",
  },
  txtBody: {
    padding: 25,
    fontSize: 18,
    justifyContent: "center",
    lineHeight: 25,
    color: "#333",
    backgroundColor: "#fff",
  },
  txtExemplos: {
    color: "blue",
    padding: 20,
    fontSize: 16,
    justifyContent: "center",
    lineHeight: 21,
  },
  btn: {
    backgroundColor: "#f00",
    width: "70%",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  table: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "blue",
    alignItems: "flex-start",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
  },
  tableCol: {
    width: "50%",
    padding: 10,
    // alignItems: "flex-start",
    // justifyContent: "center",
    // textAlign: "center",
  },
  txtHR: {
    height: 1,
    width: "100%",
    backgroundColor: "red",
    padding: 1,
  },
});
