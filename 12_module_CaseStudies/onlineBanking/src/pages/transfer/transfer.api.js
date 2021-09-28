import * as Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account-list`;
const url2 = `${process.env.BASE_API_URL}/transfer`;

export const getAccount = () => {
    return Axios.get(`${url}`).then(({ data }) => data);
};

export const insertTransfer = transfer => {
    return Axios.post(`${url2}`, transfer).then(({ data }) => data);
};