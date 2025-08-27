import { Stack } from 'expo-router';
import React from 'react';
import { Colors } from '../../shared/tokens';

export default function RootLayout() {
	return (
		<Stack
			screenOptions={{
				contentStyle: {
					backgroundColor: Colors.black,
				},
			}}
		>
			<Stack.Screen name="index" options={{ headerTitle: 'Мои курсы' }} />
			<Stack.Screen name="profile" options={{ headerTitle: 'Профиль' }} />
		</Stack>
	);
}
