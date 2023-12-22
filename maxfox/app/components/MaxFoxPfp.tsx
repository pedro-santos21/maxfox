import React from 'react';
import Image from 'next/image';

const MaxFoxPfp = () => {
  return (
    <div>
        <Image className='scroll-py-8 p-8' src="/maxfox.png" alt="max fox" width={400} height={400} />
    </div>
  );
};

export default MaxFoxPfp;
