import { StyleSheet } from 'react-native'
import Costants from "expo-constants";
import Colors from "./Colors";

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundSecondary,
    paddingTop: Costants.statusBarHeight,
    paddingHorizontal: 20,
  },
  headerCard: {
    flex: 1,
    width: "100%",
    height: "auto",
    maxHeight: 200,
    borderRadius: 20,
    overflow: "hidden",
  },
  headerCardContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 20,
  },
  headerCardContentTextCity: {
    fontSize: 18,
    fontWeight: "normal",
    color: Colors.text,
    marginBottom: -15,
  },
  headerCardContentTextTemperature: {
    fontSize: 75,
    fontWeight: "900",
    color: Colors.text,
  },
  backgroundCardImage: {
    position: "relative",
    flex: 1,
    resizeMode: 'cover',
    width: "100%",
    height: "100%",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.textBlack,
    marginTop: 20,
    marginBottom: 20,
  },
})

export default AppStyles;