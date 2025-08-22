import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.topText}>PurpleSchool</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            placeholderTextColor={"#AFB2BF"}
            placeholder="Email"
          />
          <TextInput
            style={styles.textInput}
            placeholderTextColor={"#AFB2BF"}
            placeholder="Пароль"
          />
          <TouchableHighlight
            onPress={() => {}}
            underlayColor={"#452481"}
            style={styles.button}
          >
            <View>
              <Text style={styles.buttonText}>Войти</Text>
            </View>
          </TouchableHighlight>
        </View>
        <Text style={styles.link}>Восстановить пароль</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#16171D",
  },
  content: {
    marginHorizontal: 55,
  },
  form: {
    gap: 16,
    marginBottom: 50,
  },
  topText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fafafa",
    marginBottom: 50,
  },
  textInput: {
    height: 58,
    paddingLeft: 26,
    borderRadius: 10,
    backgroundColor: "#2E2D3D",
    fontSize: 16,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 32,
    shadowOpacity: 1,
  },
  button: {
    height: 58,
    backgroundColor: "#6C38CC",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Fira Sans",
    fontSize: 18,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#fafafa",
  },
  link: {
    textAlign: "center",
    color: "#A97BFF",
    fontFamily: "Fira Sans",
    fontSize: 18,
    fontWeight: "400",
    fontStyle: "normal",
  },
});
