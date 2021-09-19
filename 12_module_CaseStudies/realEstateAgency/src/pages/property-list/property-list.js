import { getPropertyList, getsaleTypeList, getProvinceList } from './property-list.api';
import { mapPropertyListFromApiToVm } from './property-list.mappers';
import { addPropertyRows, setOptions } from './property-list.helpers';

Promise.all([
    getPropertyList(),
    getsaleTypeList(),
    getProvinceList(),
]).then(([propertyList, saleTypeList, provinceList]) => {
    loadPropertyList(propertyList);
    setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
    setOptions(provinceList, 'select-province', '¿Dónde?');
    }
);

const loadPropertyList = propertyList => {
    const vmPropertyList = mapPropertyListFromApiToVm(propertyList);
    addPropertyRows(vmPropertyList);
};