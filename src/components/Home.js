import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Home = () => {
    const quizes = useLoaderData()
    const quZis = quizes.data

    return (
        <div className='w-9/12 m-auto'>
            <h2 className='text-2xl text-center'>Quiz: {quZis.length}</h2>
            <div className='grid grid-cols-4 gap-5 p-4'>
                {
                    quZis.map(quz => <Course clas='true' key={quz.id} quz={quz}></Course>)
                }
            </div>

        </div>
    );
};

export default Home;