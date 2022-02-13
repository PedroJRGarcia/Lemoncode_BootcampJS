import * as Axios from 'axios';

const propertiesUrl = `${process.env.BASE_API_URL}/properties`;

export const getPropertyDetail = id =>
    Axios.get(`${propertiesUrl}/${id}`).then(({ data }) => data);

const equipmentsUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentDetail = () =>
    Axios.get(equipmentsUrl).then(({ data }) => data);

const contactUrl = `${process.env.BASE_API_URL}/contact`;

export const insertMessage = message =>
    Axios.post(`${contactUrl}`, message).then(({ data }) => data);