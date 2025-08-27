import React from 'react';
import { Link as ExpoLink, LinkProps } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { Colors, Typography } from '../tokens';

export default function Link({ text, ...props }: LinkProps & { text: string }) {
	return (
		<ExpoLink {...props}>
			<Text style={styles.link}>{text}</Text>
		</ExpoLink>
	);
}

const styles = StyleSheet.create({
	link: {
		color: Colors.links,
		...Typography.body18,
	},
});
