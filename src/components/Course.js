import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({quz}) => {
    const{name,logo,id}= quz
    return (
        <div className='bg-slate-800 flex p-4 justify-center flex-col items-center' >
            <img src={logo} alt="" />
            <p className='text-xl font-semibold text-white py-3'>Name: <span>{name}</span></p>
            <p>{id}</p>
            <Link to={`quz/${id}`}>
                <button className='bg-indigo-800 py-2 px-4 text-white font-medium text-lg rounded-md'>Start Practice
                </button>
            </Link>
            
        </div>
    );
};

export default Course;