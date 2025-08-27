import React from 'react';
import Link from '../shared/Link/Link';
import { Image, StyleSheet, Text, View } from 'react-native';
import NotFound from '../assets/unmatched-photo.png';
import { Colors, Gaps, Typography } from '../shared/tokens';

export default function UnmatchedCustom() {
	return (
		<View style={styles.container}>
			<Image source={NotFound} style={styles.image} resizeMode="contain" />
			<View>
				<Text style={styles.text}>
					Ооо... что-то пошло не так.{'\n'}Попробуйте вернуться на главный экран приложения
				</Text>
			</View>
			<Link text="На главный экран" href={'/'} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 35,
		gap: Gaps.g50,
	},
	image: {
		width: '80%',
		height: '40%',
	},
	text: {
		...Typography.body18,
		color: Colors.white,
	},
});
