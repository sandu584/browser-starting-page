import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addLink } from '../features/allLinks'
const Footer = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [link, setLink] = useState('');
	const [logo, setLogo] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !link || !logo) {
			alert('Every field is needed!');
			return;
		}

		dispatch(addLink({ name, link: `https://www.${link}`, logo }));
		setLink('');
		setName('');
		setLogo('');
	}

	return (
		<div className='h-24 w-full relative'>
			<div className='h-full w-full bg-black opacity-80 absolute z-10 left-0 top-0'></div>
			<form onSubmit={handleSubmit} className='h-full w-full px-4 absolute z-40 left-0 top-0 flex justify-end items-center gap-4 transition-all ease-in-out duration-300'>
				<input
					type="text"
					placeholder='Website Name'
					className='bg-black border border-white capitalize text-white p-2 rounded-sm w-64 focus:shadow-md shadow-stone-300 transition-all ease-in-out duration-300 outline-none'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<input
					type="text"
					placeholder='Website Link'
					className='bg-black border border-white text-white p-2 rounded-sm w-64 focus:shadow-md shadow-stone-300 outline-none'
					value={link}
					onChange={e => setLink(e.target.value)}
				/>
				<input
					type="text"
					placeholder='Website Logo'
					className='bg-black border border-white capitalize text-white p-2 rounded-sm w-64 focus:shadow-md shadow-stone-300  transition-all ease-in-out duration-300 outline-none'
					value={logo}
					onChange={e => setLogo(e.target.value)}
				/>
				<button className='py-2 px-5 border border-white capitalize text-white bg-black rounded-sm hover:cursor-pointer hover:bg-gray-800 focus:bg-gray-800'>Add Link</button>
			</form>
		</div>
	)
}

export default Footer