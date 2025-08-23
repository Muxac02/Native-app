import React from "react";
import {
  View,
  Text,
  PressableProps,
  StyleSheet,
  Pressable,
} from "react-native";
import {} from "react-native";
import { Colors, Radius, Typography } from "../tokens";

export default function Button({
  title,
  ...props
}: PressableProps & { title: string }) {
  return (
    <Pressable {...props}>
      {({ pressed }) => (
        <View style={[styles.button, pressed && styles.active]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 58,
    backgroundColor: Colors.primary,
    borderRadius: Radius.r10,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: Colors.primaryHover,
  },
  text: {
    ...Typography.btn,
    color: Colors.white,
  },
});
