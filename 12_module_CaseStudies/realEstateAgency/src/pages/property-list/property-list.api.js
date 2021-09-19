import Axios from 'axios';

const propertyListUrl = `${process.env.BASE_API_URL}/properties`;

export const getPropertyList = () => Axios.get(propertyListUrl).then(({ data }) => data);

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getsaleTypeList = () => Axios.get(saleTypeListUrl).then(({ data }) => data);

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvinceList = () => Axios.get(provinceListUrl).then(({ data }) => data);
