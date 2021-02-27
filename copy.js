import React from 'react';
import Screen from './app/components/screen/Screen';
import SearchBar from './app/components/global/SearchBar';
import ClothingAndShoes from './app/components/ClothingAndShoes';
import ElectronicsAndMultimedia from './app/components/ElectronicsAndMultimedia';

import data from './fakeData';

export default function App() {
	const clothingAndShoes = data.filter((item) => item.category === 'tech');
	const electronicsAndMultimedia = data.filter(
		(item) => item.category === 'entertainment'
	);
	return (
		<Screen>
			<SearchBar />
			<ClothingAndShoes data={clothingAndShoes} />
			<ElectronicsAndMultimedia data={electronicsAndMultimedia} />
		</Screen>
	);
}
