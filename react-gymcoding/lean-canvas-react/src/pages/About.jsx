import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function About() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['canvases'],
    queryFn: () =>
      axios.get('http://localhost:8000/canvases').then(res => res.data),
  });
  return (
    <div>
      <h2 className="text-3xl">useQuery</h2>
      {isLoading && <p>isLoading</p>}
      {error && <p className="text-red-700">{error.message}</p>}
      {data && data.map(item => <li key={item.id}>{item.name}</li>)}
    </div>
  );
}

export default About;
