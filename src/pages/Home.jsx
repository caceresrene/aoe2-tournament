import { useState } from 'react';
import Forms from '../components/Forms';
import RegisterList from '../components/RegisterList';

const Home = () => {
	const [participants, setParticipants] = useState([]);
	return (
		<>
			<h1 className='text-2xl font-extrabold text-center text-teal-900 dark:text-teal-400'>Age of Empires 2 Tournament</h1>
			<Forms setParticipants={setParticipants} />
			<RegisterList participants={participants} />
		</>
	);
};

export default Home;
