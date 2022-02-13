import axios from 'axios';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Civilization from '../components/Civilization';

const Civilizations = () => {
	const [civsData, setCivsData] = useState([]);

	useEffect(() => {
		// cuando se cargue el componente guarda los datos de la api en civsData
		getCivilizations();
	}, []);

	const getCivilizations = async () => {
		const { data } = await axios.get(
			'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'
		);
		setCivsData(data.civilizations);
	};

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
			{civsData.map((civ) => (
				<Civilization
					key={uuidv4()}
					name={civ.name}
					army_type={civ.army_type}
					unique_unit={civ.unique_unit}
					unique_tech={civ.unique_tech}
					team_bonus={civ.team_bonus}
					civilization_bonus={civ.civilization_bonus}
				></Civilization>
			))}
		</div>
	);
};

export default Civilizations;
