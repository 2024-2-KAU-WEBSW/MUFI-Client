import { useSuspenseQuery } from '@tanstack/react-query';
import { aiInstance } from "../../../apis/client";

export const GALLERY_QUERY_KEY = ['GALLERY_IMAGE_DATA'];

export const fetchGalleryImg = async () => {
    const response = await aiInstance.get('/api/gallery/image');
    return response.data;
};

const useGetGalleryImg = ()=>{
    const { data, isLoading, isError } = useSuspenseQuery({
        queryKey: GALLERY_QUERY_KEY,
        queryFn: () => fetchGalleryImg(),
    });
    return  { data, isLoading, isError };
};

export default useGetGalleryImg;