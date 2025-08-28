import { Stack } from 'expo-router';
import React from 'react';
import { Colors } from '../shared/tokens';
import { StatusBar } from 'expo-status-bar';
import { useAtomValue } from 'jotai';
import { authAtom } from '../entities/auth/model/auth.state';

export default function RootLayout() {
	const { access_token } = useAtomValue(authAtom);

	return (
		<>
			<StatusBar style="light" />
			<Stack
				screenOptions={{
					headerShown: false,
					contentStyle: {
						backgroundColor: Colors.black,
					},
				}}
			>
				<Stack.Protected guard={access_token != null}>
					<Stack.Screen name="(app)" />
				</Stack.Protected>
				<Stack.Protected guard={access_token == null}>
					<Stack.Screen name="login" />
					<Stack.Screen name="restore" />
				</Stack.Protected>
			</Stack>
		</>
	);
}
