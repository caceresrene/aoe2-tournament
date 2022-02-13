import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
	// Manejar navegaciones
	const navigate = useNavigate();

	return (
		<div className='flex flex-col items-center'>
			<p className='text-xl m-4 text-red-500 font-extrabold'>
				This page doesn't exist
			</p>
			<button
				onClick={() => navigate('/')}
				className='p-2 bg-teal-500 hover:bg-teal-400 text-white rounded'
			>
				Go back to home page
			</button>
		</div>
	);
};
