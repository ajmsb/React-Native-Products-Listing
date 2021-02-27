import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import Screen from './app/components/screen/Screen';
import SearchBar from './app/components/global/SearchBar';
import ClothingAndShoes from './app/components/ClothingAndShoes';
import ElectronicsAndMultimedia from './app/components/ElectronicsAndMultimedia';
import HobbiesAndSports from './app/components/HobbiesaAndSports';
import HomeAndGarden from './app/components/HomeAndGarden';
import Housing from './app/components/Housing';
import PetsAndFood from './app/components/PetsAndFood';
import VehiclesAndBikes from './app/components/VehiclesAndBikes';

// import data from './fakeData';

export default function App() {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const clothingAndShoes = data.filter(
		(item) => item.category === 'ClothingAndShoes'
	);
	const electronicsAndMultimedia = data.filter(
		(item) => item.category === 'ElectronicsAndMultimedia'
	);
	const hobbiesAndSports = data.filter(
		(item) => item.category === 'HobbiesAndSports'
	);
	const homeAndGarden = data.filter(
		(item) => item.category === 'HomeAndGarden'
	);
	const housing = data.filter((item) => item.category === 'Housing');
	const petsAndFood = data.filter((item) => item.category === 'PetsAndFood');
	const vehiclesAndBikes = data.filter(
		(item) => item.category === 'VehiclesAndBikes'
	);

	useEffect(() => {
		fetch('http://192.168.1.104:3000/ads/count')
			.then((response) => response.json())
			.then((json) => setData(json.advertisements))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	}, []);

	return (
		<Screen>
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<>
					<SearchBar />
					<ClothingAndShoes
						data={clothingAndShoes}
						keyExtractor={({ id }, index) => id}
					/>
					<ElectronicsAndMultimedia
						data={electronicsAndMultimedia}
						keyExtractor={({ id }, index) => id}
					/>
					<HobbiesAndSports
						data={hobbiesAndSports}
						keyExtractor={({ id }, index) => id}
					/>
					<HomeAndGarden
						data={homeAndGarden}
						keyExtractor={({ id }, index) => id}
					/>
					<Housing data={housing} keyExtractor={({ id }, index) => id} />
					<PetsAndFood
						data={petsAndFood}
						keyExtractor={({ id }, index) => id}
					/>
					<VehiclesAndBikes
						data={vehiclesAndBikes}
						keyExtractor={({ id }, index) => id}
					/>
				</>
			)}
		</Screen>
	);
}
