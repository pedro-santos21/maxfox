import React from 'react';

const QuoteBox = (props:any) => {
  return (
    <div className='flex text-black italic py-4'>
        <p className='text-right'>
            &quot;{props.text}&quot;<br/>
        </p>
        
        <p className='text-left justify-start justify-items-start'>
            <br/><b>{`⸺ ${props.author}`}</b>
        </p>
    </div>
  );
};

export default QuoteBox;
