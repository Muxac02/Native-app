import React from 'react';
import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
//import { StyleSheet } from 'react-native'

export default function Course() {
	const { id } = useLocalSearchParams();
	return (
		<View>
			<Text>Курс №{id}</Text>
		</View>
	);
}

//const styles = StyleSheet.create({});
