import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';
import { Input } from '../shared/Input/Input';
import { Colors, Gaps } from '../shared/tokens';
import Button from '../shared/Button/Button';
import ErrorNotification from '../shared/ErrorNotification/ErrorNotification';
import { useState } from 'react';
import Logo from '../assets/logo.png';
import Link from '../shared/Link/Link';
import { useAtom } from 'jotai';
import { loginAtom } from '../entities/auth/model/auth.state';

export default function Login() {
	const [localError, setLocalError] = useState<string | undefined>();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [{ isLoading, error }, login] = useAtom(loginAtom);

	const alert = (msg: string) => {
		setLocalError(msg);
		setTimeout(() => setLocalError(undefined), 3000);
	};

	const attemptLogin = () => {
		if (!email) {
			alert('Введите почту');
			return;
		}
		if (!password) {
			alert('Введите пароль');
			return;
		}
		login({ email: email, password: password });
	};

	useEffect(() => {
		if (error) {
			alert(error);
		}
	}, [error]);

	return (
		<View style={styles.container}>
			<ErrorNotification error={localError} />
			<StatusBar style="light" />
			<View style={styles.content}>
				<Image source={Logo} style={styles.logo} resizeMode="contain" />
				<View style={styles.form}>
					<Input placeholder="Email" onChangeText={setEmail} />
					<Input placeholder="Пароль" isPassword={true} onChangeText={setPassword} />
					<Button title="Войти" onPress={attemptLogin} disabled={isLoading} loading={isLoading} />
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
