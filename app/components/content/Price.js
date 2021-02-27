import React from 'react';
import { Text } from 'react-native';

const Price = ({ children, numberOfLines = 1, size = 16 }) => {
	return (
		<Text
			numberOfLines={numberOfLines}
			style={{ fontWeight: 'bold', color: 'purple', fontSize: size }}
		>
			{children}
		</Text>
	);
};

export default Price;
