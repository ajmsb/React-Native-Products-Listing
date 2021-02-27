import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../content/Title';
import Card from '../global/Card';

const List = ({ title, data }) => {
	return (
		<View>
			<Title>{title}</Title>
			<View style={styles.container}>
				{data.map((item) => (
					<Card item={item} key={item.id} />
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 10
	}
});

export default List;
