import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '../../apis/api';

export const SUMMARY_QUERY_KEY = ['FAQ_TITLE_DATA'];

export const fetchFAQTitle = async () => {
    const response = await get('/api/faq/list');
    return response.data;
};

const useGetFAQTitle = ()=>{
    const { data, isLoading, isError } = useSuspenseQuery({
        queryKey: SUMMARY_QUERY_KEY,
        queryFn: () => fetchFAQTitle(),
    });
    return  { data, isLoading, isError };
};

export default useGetFAQTitle;