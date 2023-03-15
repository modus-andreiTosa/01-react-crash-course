import { useQuery } from 'react-query';

const token = process.env.TREFLE_TOKEN?.replace(/^"(.*)"$/, '$1');

export const useGetAllPlantData = () => {
  const apiUrl = 'trefle.io/api/v1/plants';
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  const { isLoading, error, data } = useQuery(
    'openverseData',
    () => {
      return fetch(`${corsAnywhereUrl}${apiUrl}?token=${token}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Origin: 'http://localhost:5173',
        },
      }).then((res) => res.json());
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
  console.log('data', process.env.TREFLE_TOKEN);
  return {
    isLoading,
    error,
    data,
  };
};
