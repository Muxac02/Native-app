import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Input } from "./shared/Input/Input";
import { Colors, Gaps, Radius, Typography } from "./shared/tokens";
import Button from "./shared/Button/Button";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.form}>
          <Input placeholder="Email" />
          <Input placeholder="Пароль" isPassword={true} />
          <Button title="Войти" onPress={() => {}} />
        </View>
        <View>
          <Text style={styles.link}>Восстановить пароль</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.black,
    padding: 55,
  },
  content: {
    alignItems: "center",
    gap: Gaps.g50,
  },
  form: {
    gap: Gaps.g16,
    alignSelf: "stretch",
  },
  logo: {
    width: "70%",
  },
  link: {
    color: Colors.links,
    ...Typography.body18,
  },
});
