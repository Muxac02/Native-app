import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App2() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,1)"]}
        locations={[0, 0.3]}
        style={styles.background}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Одно из самых вкусных кофе в городе!</Text>
        <Text style={styles.subtitle}>
          Свежие зёрна, настоящая арабика и бережная обжарка
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {}}
          underlayColor={"#A76237"}
        >
          <Text style={styles.buttonText}>Начать</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "center",
  },
  content: {
    marginHorizontal: 30,
    marginBottom: 48,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "60%",
    bottom: 0,
  },
  title: {
    fontSize: 38,
    textAlign: "center",
    fontWeight: 600,
    color: "#fff",
    marginBottom: 82,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#A9A9A9",
    fontWeight: "regular",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#C67C4E",
    borderRadius: 16,
    padding: 21,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 600,
    color: "#fff",
    textAlign: "center",
  },
});
