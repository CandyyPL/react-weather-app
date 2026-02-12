import { useQuery } from '@tanstack/react-query';
import { getWeatherAt } from './utils/api';

const App = () => {
  const { data } = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeatherAt({ lat: 50, lon: 50 }),
  });

  return (
    <main className='p-4'>
      <div className='text-4xl font-bold'>{JSON.stringify(data)}</div>
    </main>
  );
};

export default App;
