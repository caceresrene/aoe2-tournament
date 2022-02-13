import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const UniqueTech = ({ urlUnique }) => {
	const [infoUnique, setInfoUnique] = useState([]);

	useEffect(() => {
		getData(urlUnique);
	}, []);

	const getData = (urlUnique) => {
		urlUnique.forEach(async (value) => {
			// por cada URL en urlUnique
			const { data } = await axios.get(value);
			setInfoUnique((prev) => [...prev, data]);
		});
	};

	return (
		<>
			{infoUnique.map((item) => (
				<p key={uuidv4()}>
					{item.name} ({item.cost.Food && `🥩${item.cost.Food}`}{' '}
					{item.cost.Gold && `🌕${item.cost.Gold}`}
					{item.cost.Stone && `🌑${item.cost.Stone}`})
				</p>
			))}
		</>
	);
};

export default UniqueTech;
