import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Screen from './app/components/screen/Screen';
import SearchBar from './app/components/global/SearchBar';
import ClothingAndShoes from './app/components/ClothingAndShoes';
import ElectronicsAndMultimedia from './app/components/ElectronicsAndMultimedia';
import HobbiesAndSports from './app/components/HobbiesaAndSports';
import HomeAndGarden from './app/components/HomeAndGarden';
import Housing from './app/components/Housing';
import PetsAndFood from './app/components/PetsAndFood';
import VehiclesAndBikes from './app/components/VehiclesAndBikes';

export default function App() {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://gradedexerciseapi.herokuapp.com/ads/count')
			.then((response) => response.json())
			.then((json) => setData(json.advertisements))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	}, []);

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

	return (
		<Screen>
			<SearchBar />
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<>
					<ClothingAndShoes data={clothingAndShoes} />
					<ElectronicsAndMultimedia data={electronicsAndMultimedia} />
					<HobbiesAndSports data={hobbiesAndSports} />
					<HomeAndGarden data={homeAndGarden} />
					<Housing data={housing} />
					<PetsAndFood data={petsAndFood} />
					<VehiclesAndBikes data={vehiclesAndBikes} />
				</>
			)}
		</Screen>
	);
}
