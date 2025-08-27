import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';
import { Input } from '../shared/Input/Input';
import { Colors, Gaps } from '../shared/tokens';
import Button from '../shared/Button/Button';
import ErrorNotification from '../shared/ErrorNotification/ErrorNotification';
import { useState } from 'react';
import Logo from '../assets/logo.png';
import Link from '../shared/Link/Link';

export default function Login() {
	const [error, setError] = useState<string | undefined>();

	const alert = () => {
		setError('Неправильный логин или пароль');
		setTimeout(() => setError(undefined), 4000);
	};

	return (
		<View style={styles.container}>
			<ErrorNotification error={error} />
			<StatusBar style="light" />
			<View style={styles.content}>
				<Image source={Logo} style={styles.logo} resizeMode="contain" />
				<View style={styles.form}>
					<Input placeholder="Email" />
					<Input placeholder="Пароль" isPassword={true} />
					<Button title="Войти" onPress={() => alert()} />
				</View>
				<Link href={'/restore'} text={'Восстановить пароль'} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: Colors.black,
		padding: 55,
	},
	content: {
		alignItems: 'center',
		gap: Gaps.g50,
	},
	form: {
		gap: Gaps.g16,
		alignSelf: 'stretch',
	},
	logo: {
		width: '70%',
	},
});
