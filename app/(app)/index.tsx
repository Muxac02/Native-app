import React from 'react';
import { Text, View } from 'react-native';
import { useAtomValue, useSetAtom } from 'jotai';
import { authAtom, logoutAtom } from '../../entities/auth/model/auth.state';
import Button from '../../shared/Button/Button';
//import { StyleSheet } from 'react-native'

export default function Course() {
	const logout = useSetAtom(logoutAtom);
	const { isLoading } = useAtomValue(authAtom);

	return (
		<View>
			<Text>Курсы</Text>
			<Button title="Выйти" onPress={logout} loading={isLoading} />
		</View>
	);
}

//const styles = StyleSheet.create({});
