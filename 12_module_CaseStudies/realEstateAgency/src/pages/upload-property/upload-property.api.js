import * as Axios from 'axios';

const provincesUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvincesList = () => {
    Axios.get(`${provincesUrl}`).then(({ data }) => data);
}

const urlNewProperty = `${process.env.BASE_API_URL}/properties`;

export const insertNewProperty = newProperty => {
    Axios.post(`${urlNewProperty}`, newProperty).then(({ data }) => data);
};