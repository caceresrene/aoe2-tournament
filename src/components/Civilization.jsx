import { v4 as uuidv4 } from 'uuid';
import UniqueTech from '../components/UniqueTech';

const Civilization = ({
	name,
	army_type,
	unique_unit,
	unique_tech,
	team_bonus,
	civilization_bonus,
}) => {
	return (
		<section className='bg-gray-100 dark:bg-slate-700 dark:text-slate-200 rounded m-2 p-4'>
			<h1 className='font-semibold text-xl text-center'>{name}</h1>
			<p>
				<strong>Type of civilization:</strong> {army_type}
			</p>
			<div className='flex flex-col'>
				<strong>Unique</strong>

				{unique_unit.length ? (
					<UniqueTech urlUnique={unique_unit}></UniqueTech>
				) : (
					<p className='text-gray-500'>No unique unit</p>
				)}

				{unique_tech.length ? (
					<UniqueTech urlUnique={unique_tech}></UniqueTech>
				) : (
					<p className='text-gray-500'>No unique tech</p>
				)}
			</div>
			<div className='flex flex-col'>
				<strong>Bonus</strong>
				<ul className='text-green-600'>
					{civilization_bonus.map((bonus) => (
						<li key={uuidv4()}>— {bonus}</li>
					))}
					<li>
						— {team_bonus}{' '}
						<small className='inline-block bg-green-500 p-0.5 text-xs md:text-sm rounded text-white'>
							Team Bonus
						</small>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Civilization;
