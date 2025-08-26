import React from 'react';
import { Text, PressableProps, StyleSheet, Pressable, Animated, GestureResponderEvent } from 'react-native';
import { Colors, Radius, Typography } from '../tokens';

export default function Button({ title, ...props }: PressableProps & { title: string }) {
	const animatedValue = new Animated.Value(100);
	const color = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.primaryHover, Colors.primary],
	});
	const animDuration = 100;

	const FadeIn = (e: GestureResponderEvent) => {
		if (props.onPressIn) props.onPressIn(e);
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: animDuration,
			useNativeDriver: true,
		}).start();
	};

	const FadeOut = (e: GestureResponderEvent) => {
		if (props.onPressOut) props.onPressOut(e);
		Animated.timing(animatedValue, {
			toValue: 100,
			duration: animDuration,
			useNativeDriver: true,
		}).start();
	};

	return (
		<Pressable {...props} onPressIn={FadeIn} onPressOut={FadeOut}>
			<Animated.View style={{ ...styles.button, backgroundColor: color }}>
				<Text style={styles.text}>{title}</Text>
			</Animated.View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		height: 58,
		backgroundColor: Colors.primary,
		borderRadius: Radius.r10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		...Typography.btn,
		color: Colors.white,
	},
});
