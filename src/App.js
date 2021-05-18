import { useState, useEffect } from 'react';
import './App.css';
import Destination from './component/Destination';

import Spinner from './Spinner';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const handleNotInterested = (id) => {
    const remainingTours = tours.filter((tour) => tour.id !== id);
    setTours(remainingTours);
  };

  const fetchTours = async () => {
    try {
      const response = await fetch(
        'https://course-api.com/react-tours-project'
      );
      const tours = await response.json();
      console.log(tours);
      setTours(tours);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div className='container mx-auto px-5 lg:px-12 md'>
      <h1 className='text-6xl font-bold text-center py-10'>
        Our Tour Destinations
      </h1>
      {isLoading && <Spinner />}
      <main className='grid sm:grid-cols-2 lg:grid-cols-3'>
        {tours?.map((tour) => (
          <div className=''>
            <Destination
              key={tour.id}
              image={tour.image}
              cost={tour.price}
              description={tour.info}
              destination={tour.name}
              handleNotInterested={() => handleNotInterested(tour.id)}
            />
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
