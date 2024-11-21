import { useMutation } from '@tanstack/react-query';
import { post } from '../../apis/api';

export const postReservation = async (body) => {
    const response =  await post('/api/reservation/register', body);
    return response.data;
};

const usePostReservation = () => {
    const mutation = useMutation({
        mutationFn: postReservation,
        onSuccess: (data) => {
            console.log('요청에 성공했습니다.', data)
        }
    })
    return mutation;
};
export default usePostReservation