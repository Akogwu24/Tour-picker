import React, { useState } from 'react';

const Destination = ({
  handleNotInterested,
  image,
  destination,
  cost,
  description,
  id,
}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className='container mx-auto max-w-md py-10 md:px-10 text-center md: px-5 lg:px-3 xl:px-7'>
      <div>
        <img src={image} alt='eiffel tower' className='rounded h-80 w-full' />
      </div>
      <div className='flex justify-between text-left text-lg font-bold mt-3'>
        <p>{destination}</p>
        <p className='text-green-400 pl-6 w-1/2 flex-1'>NGN{cost}</p>
      </div>

      <p className='my-5 text-justify'>
        {readMore ? description : `${description.substring(0, 100)}...`}
        <button
          className=' ml-5 text-blue-400'
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? 'show less' : 'read more'}
        </button>
      </p>
      <button
        onClick={() => handleNotInterested(id)}
        className='bg-red-300 hover:bg-red-400 px-5 py-2 font-semibold focus:outline-none rounded'
      >
        Not interetsted
      </button>
    </div>
  );
};

export default Destination;
