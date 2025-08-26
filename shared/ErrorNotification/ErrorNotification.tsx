import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import { Colors, Typography } from '../tokens';
import { ErrorNotificationProps } from './ErrorNotification.props';

export default function ErrorNotification({ error }: ErrorNotificationProps) {
	const [show, setShow] = useState<boolean>(false);
	const animatedValue = new Animated.Value(-100);

	const FadeIn = () => {
		Animated.timing(animatedValue, {
			useNativeDriver: true,
			toValue: 0,
			duration: 300,
		}).start();
	};

	useEffect(() => {
		if (!error) {
			return;
		}
		setShow(true);
		const timerId = setTimeout(() => setShow(false), 3000);
		return () => {
			clearTimeout(timerId);
			setShow(false);
		};
	}, [error]);

	if (!show) {
		return <></>;
	}

	return (
		<Animated.View style={{ ...styles.error, transform: [{ translateY: animatedValue }] }} onLayout={FadeIn}>
			<Text style={styles.errorText}>{error}</Text>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	error: {
		backgroundColor: Colors.red,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		padding: 24,
		paddingTop: 58,
	},
	errorText: {
		...Typography.body18,
		color: Colors.white,
	},
});
