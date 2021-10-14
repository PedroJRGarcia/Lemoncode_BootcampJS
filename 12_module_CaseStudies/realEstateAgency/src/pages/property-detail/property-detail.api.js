import * as Axios from 'axios';

const urlProperties = `${process.env.BASE_API_URL}/properties`;

export const getPropertyDetail = id => {
    Axios.get(`${urlProperties}/${id}`).then(({ data }) => data);
}

const urlEquipments = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentDetail = () => {
    Axios.get(urlEquipments).then(({ data }) => data);
}

const urlContact = `${process.env.BASE_API_URL}/contact`;

export const insertMessage = message => {
    Axios.post(`${urlContact}`, message).then(({ data }) => data);
}