import { Axios } from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovementsList = () => {
    return Axios.get(url).then(({ data }) => data);
}