import { useState, useEffect } from 'react';
const RegisterList = ({ participants }) => {
	return (
		<div className='m-4'>
			<h1 className='text-center uppercase font-bold dark:text-slate-200 '>
				Participants
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-2'>
				{participants.length ? (
					participants.map((participant) => (
						<p className='bg-slate-300 rounded m-2 p-1 text-center'>
							<span className='font-semibold'>{participant.name}</span> {''}
							is playing as {participant.civilization}
						</p>
					))
				) : (
					<p className='md:col-span-2 lg:col-span-3 text-center text-slate-500 dark:text-slate-400'>
						no participants
					</p>
				)}
			</div>
		</div>
	);
};

export default RegisterList;
