import { serverInstance } from "../../../apis/client"
import { useMutation } from '@tanstack/react-query';

export const postReservForm = async (body) => {
    const response =  await serverInstance.post('/api/reservation/register', body);
    return response.data;
};

const usePostReservForm = () => {
    const mutation = useMutation({
        mutationFn: postReservForm,
        onSuccess: (data) => {
            console.log('요청에 성공했습니다.', data)
        }
    })
    return mutation;
};
export default usePostReservForm