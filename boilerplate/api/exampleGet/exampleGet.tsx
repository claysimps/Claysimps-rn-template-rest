import { axiosInstance, getApiEndpoints, QUERY_KEYS } from '@myApp/common';
import { useQuery } from 'react-query';

export type Something = {
  someValue: string;
};

const getSomething = async (value: string) => {
  const { data } = await axiosInstance.get(
    /** @Remarks - Add endpoint here */
    getApiEndpoints().GET_SOMETHING(value),
  );
  console.log('DATA:', data);
  return data;
};

export const useGetSomething = (value: string) =>
  useQuery<Something>({
    queryKey: [QUERY_KEYS.SOMETHING, value],
    queryFn: () => getSomething(value),
  });
