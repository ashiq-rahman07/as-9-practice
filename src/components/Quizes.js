import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuixDetails from './QuixDetails';

const Quizes = () => {
    const {data}= useLoaderData();
    const {total,id,name,questions} = data;
    console.log(name)
    
    return (
        <div className='text-center'>
            <h2 className='text-purple-700 text-xl font-medium '> Quiz of: {name}</h2>
           <h3>This is quiz {questions.length}</h3> 
           {
            questions.map(quz=> <QuixDetails key={quz.id} quz={quz}></QuixDetails>)
           }
        </div>
    );
};

export default Quizes;