import * as Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account-list`;

export const getAccount = () => {
    return Axios.get(`${url}`).then(({ data }) => data);
}

export const insertTransfer = () => {
    return Axios.post(`${url}`).then(({ data }) => data);
}