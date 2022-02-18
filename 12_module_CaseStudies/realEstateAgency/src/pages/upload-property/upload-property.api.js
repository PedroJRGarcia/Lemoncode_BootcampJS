import * as Axios from 'axios';

const provincesUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvincesList = () =>
    Axios.get(`${provincesUrl}`).then(({ data }) => data);

const equipmentsUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipments = () => 
    Axios.get(equipmentsUrl).then(({ data }) => data);

const saleTypesUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypes = () => 
    Axios.get(saleTypesUrl).then(({ data }) => data);

const newPropertyUrl = `${process.env.BASE_API_URL}/properties`;

export const insertNewProperty = newProperty =>
    Axios.post(`${newPropertyUrl}`, newProperty).then(({ data }) => data);