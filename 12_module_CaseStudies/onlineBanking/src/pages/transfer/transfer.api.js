import * as Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account-list`;

export const getAccount = id => {
    return Axios.get(`${url}/${id}`).then(({ data }) => data);
}

export const setTransfer = id => {
    return Axios.post(`${url}/${id}`).then(({ data }) => data);
}