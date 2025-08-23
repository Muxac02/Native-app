import {
  TextInput,
  StyleSheet,
  TextInputProps,
  Pressable,
  View,
} from "react-native";
import { Colors, Radius } from "../tokens";
import EyeOpenedIcon from "../../assets/icons/eye-opened";
import EyeClosedIcon from "../../assets/icons/eye-closed";
import { useState } from "react";

export function Input(props: TextInputProps & { isPassword?: boolean }) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View>
      <TextInput
        style={styles.textInput}
        secureTextEntry={props.isPassword && !showPassword}
        placeholderTextColor={Colors.gray}
        {...props}
      />
      {props.isPassword && (
        <Pressable
          style={styles.showIcon}
          onPress={() => setShowPassword((state) => !state)}
        >
          {showPassword ? <EyeClosedIcon /> : <EyeOpenedIcon />}
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 58,
    paddingHorizontal: 26,
    paddingRight: 26 + 16,
    borderRadius: Radius.r10,
    color: Colors.gray,
    backgroundColor: Colors.violetDark,
    fontSize: 16,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 32,
    shadowOpacity: 1,
  },
  showIcon: {
    position: "absolute",
    right: 12,
    top: 58 / 2 - 24 / 2,
  },
});
