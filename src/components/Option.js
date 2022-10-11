import React from 'react';

const Option = ({ optt, handlerAns }) => {
    
    return (
        <div className='border py-3 px-4 border-gray-700 flex gap-3 justify-center items-center'>
         <input onClick={()=> handlerAns(optt)} type="radio" name="vfx" id="" />
         <p htmlFor='vfx'>{optt}</p>
          
        </div>
    );
};

export default Option;