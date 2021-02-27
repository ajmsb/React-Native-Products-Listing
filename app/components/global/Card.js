import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Price from '../content/Price';
import Subtitle from '../content/Subtitle';
import Title from '../content/Title';

const Card = ({ item, style }) => {
	const { pictures, title, desc, price } = item;
	if (pictures == '') {
		pictures.unshift(
			'https://archive.org/download/no-photo-available/no-photo-available.png'
		);
	}
	return (
		<View style={[styles.container, style]}>
			<Image source={{ uri: pictures[0] }} style={styles.image} />
			<View style={styles.contentContainer}>
				<Title>{title}</Title>
				<Price>{price} €</Price>
				<Subtitle>{desc}</Subtitle>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 8,
		overflow: 'hidden',
		marginVertical: 5,
		height: 100
	},
	image: {
		flex: 0.35,
		height: '100%',
		width: '100%'
	},
	contentContainer: {
		flex: 0.65,
		paddingHorizontal: 5
	}
});

export default Card;
