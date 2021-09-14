import * as Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;
const url2 = `${process.env.BASE_API_URL}/account-list`;

export const getMovementsList = id => {
    return Axios.get(`${url}/?accountId=${id}`).then(({ data }) => data);
}

export const getAccount = id => {
    return Axios.get(`${url2}/${id}`).then(({data}) => data);
}