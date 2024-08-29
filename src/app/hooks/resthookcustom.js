

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useGetAllSamples() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['getAllSamples'], // Unique key for the query
    queryFn: async () => {
      const response = await axios.get('/blog/api/news'); // Replace with your API endpoint
      return response.data.data.data;
    },
  });

  return { data, isLoading, isError, error, refetch };
}

export default useGetAllSamples;