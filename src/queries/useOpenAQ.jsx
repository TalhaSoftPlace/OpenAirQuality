import { useQuery } from 'react-query';
import { service } from '../services';
import { queryKeys } from '../constant';

const getAirQuality = async (city) => {
  const url = `/v2/latest`;
    const { data } = await service.get(url,{
    params: {
        limit:1,
        page:1,
        offset:0,
        city: city,
        sort: 'asc',
        radius: 1000,
        order_by: 'city',
        dumpRaw: false
        }
    });
    return data?.results.length > 0 ? data?.results : '';
}

export const useOpenAQ = (city) => {
    const keys = [queryKeys.AirQuality, city];
    return useQuery(
        keys, () => getAirQuality(city),
        {
            enabled: !!city,
            staleTime: 0,
            retry: 1,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            onError: () => {},
        }
    )
}