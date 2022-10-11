import React, { useState } from 'react';
import Option from './Option';

const QuixDetails = ({quz}) => {
    const {options,id,correctAnswer,question} = quz;
    
    const handlerAns = (optt)=>{
      
        if (correctAnswer.length === optt.length) {
           alert('Right Answer')
           console.log(correctAnswer)
        }else{
            alert('wrong')
          
        }
    }
   
  
   
   
    return (
        <div className='w-3/5 m-auto'>
        
            <div className='bg-lime-200 mb-3 py-3 px-4 rounded-md shadow-xl'>
                <h2 className='text-lg font-medium '> {question}</h2>
                
                <div className='grid grid-cols-2 gap-2 mt-3 '>
                    {
                        options.map((optt, idx) => <Option optt={optt} handlerAns={handlerAns} key={idx}></Option>)
                    }
                </div>
                
            </div>
            
        </div>
    );
};

export default QuixDetails;