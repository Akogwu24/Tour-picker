import React from 'react';
import { SpinnerCircular } from 'spinners-react';

const Spinner = () => {
  return (
    <div className='flex flex-col pt-20 justify-center items-center'>
      <SpinnerCircular size='20%' thickness='200' color='#0f0' />
      <p className='text-2xl'>Loading Destinations</p>
    </div>
  );
};

export default Spinner;
