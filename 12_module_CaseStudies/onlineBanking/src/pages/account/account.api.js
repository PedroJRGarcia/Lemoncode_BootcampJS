import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account`;

export const insertAccount = account => {
    return Axios.post(`${url}/${account.id}`, account).then(({ data }) => data);
};

export const getAccount = id => {
    return Axios.get(`${url}/${id}`).then(({ data }) => data);
};

export const updateAccount = account => {
    return Axios.put(`${url}/${account.id}`, account).then(({ data }) => data);
};