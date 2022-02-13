import { useForm } from 'react-hook-form';

const Forms = ({ setParticipants }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }, // suscribirse a errors y atrapar su cambio de estado
	} = useForm();

	const onSubmit = (data, event) => {
		console.log(data);
		setParticipants((prev) => [...prev, data]);
		event.target.reset(); // limpiar los campos del formulario al enviar
	};

	const onErrors = (errors) => console.log(errors);

	// * Requisitos de cada campo
	// [message] es el mensaje de error al no cumplirse con el requisito
	const registerOptions = {
		name: { required: 'We need to know your name' },
		civilization: {
			required: 'You must enter what civilization you are going to play',
		},
		age: {
			required: 'We need to know your age',
			min: {
				value: 16,
				message: 'You must be over 16',
			},
		},
	};

	return (
		<>
			<h1 className='text-center uppercase font-bold dark:text-slate-200'>Register</h1>
			<form
				onSubmit={handleSubmit(onSubmit, onErrors)}
				className='flex flex-col gap-2'
			>
				<input
					className='dark:bg-slate-500 bg-gray-200 mx-auto border-2 rounded dark:border-slate-900 border-gray-400 p-1 dark:placeholder-gray-200'
					name='name'
					type='text'
					placeholder='Name...'
					// ? name tiene que ser igual en el input y en register, en este caso name='name'
					{...register('name', registerOptions.name)}
				/>
				<small className='text-center text-red-500'>
					{errors?.name && errors.name.message}
				</small>

				<input
					className='dark:bg-slate-500 bg-gray-200 mx-auto border-2 rounded dark:border-slate-900 border-gray-400 p-1 dark:placeholder-gray-200'
					name='civilization'
					type='text'
					placeholder='Civilization...'
					{...register('civilization', registerOptions.civilization)}
				/>
				<small className='text-center text-red-500'>
					{errors?.civilization && errors.civilization.message}
				</small>

				<input
					className='dark:bg-slate-500 bg-gray-200 mx-auto border-2 rounded dark:border-slate-900 border-gray-400 p-1 dark:placeholder-gray-200'
					name='age'
					type='number'
					placeholder='Age...'
					{...register('age', registerOptions.age)}
				/>
				<small className='text-center text-red-500'>
					{errors?.age && errors.age.message}
				</small>

				{/* el ultimo boton en un formulario es el boton para enviar por defecto */}
				<button className='bg-teal-500 hover:bg-teal-400 mx-auto px-4 py-2 rounded text-gray-100'>
					Submit
				</button>
			</form>
		</>
	);
};

export default Forms;
