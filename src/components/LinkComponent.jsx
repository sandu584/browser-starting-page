import React from 'react'
import { TbXboxX } from "react-icons/tb";
import { removeLink } from '../features/allLinks';
import { useDispatch } from 'react-redux';

const LinkComponent = ({ link }) => {
    const dispatch = useDispatch();
    const handleRemoveLink = (e) => {
        e.stopPropagation();
        dispatch(removeLink({ id: link.id }));
    }

    const handleRedirect = () => {
        window.open(link.link, '_blank');
    }

    return (
        <div className='relative rounded-lg h-24 w-64 hover:scale-105 transition-all ease-in-out duration-150'>
            <div className='rounded-lg h-full w-full absolute top-0 left-0 bg-black opacity-90'></div>
            <button onClick={handleRedirect} className='absolute rounded-lg top-0 left-0 w-full hover:bg-gray-600 h-full hover:cursor-pointer flex justify-around items-center '>
                <TbXboxX className='absolute top-2 text-2xl z-20 right-2' onClick={handleRemoveLink} />
                <img src={link.logo} className='w-16 rounded-full' alt="Logo" />
                <p className='capitalize text-2xl font-semibold'>{link.name}</p>
            </button>
        </div>
    )
}

export default LinkComponent
