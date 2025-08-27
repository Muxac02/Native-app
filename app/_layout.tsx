import { Stack } from 'expo-router';
import React from 'react';
import { Colors } from '../shared/tokens';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
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
				<Stack.Screen name="login" />
				<Stack.Screen name="restore/index" />
			</Stack>
		</>
	);
}
