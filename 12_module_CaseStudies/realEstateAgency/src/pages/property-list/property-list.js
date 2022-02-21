import { getPropertyList, getSaleTypeList, getProvinceList } from './property-list.api';
import { mapPropertyListFromApiToViewModel, mapFilterToQueryParams } from './property-list.mappers'; 
import { addPropertyRows, setOptions, clearPropertyRows } from './property-list.helpers';
import { roomOptions, bathroomOptions, minPriceOptions, maxPriceOptions } from './property-list.constants';
import { onUpdateField, onSubmitForm } from '../../common/helpers';

Promise.all([
    getPropertyList(),
    getSaleTypeList(),
    getProvinceList(),
]).then(([propertyList, saleTypeList, provinceList]) => {
    loadPropertyList(propertyList);
    setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
    setOptions(provinceList, 'select-province', '¿Dónde?');
    setOptions(roomOptions, 'select-room', '¿Habitaciones?');
    setOptions(bathroomOptions, 'select-bathroom', '¿Cuartos de baño?');
    setOptions(minPriceOptions, 'select-min-price', 'Min (EUR)');
    setOptions(maxPriceOptions, 'select-max-price', 'Max (EUR)');
});

const loadPropertyList = (propertyList => {
    const viewModelPropertyList = mapPropertyListFromApiToViewModel(propertyList);
    addPropertyRows(viewModelPropertyList);
});

let filter = {
    saleTypeId: '',
    provinceId: '',
    minRooms: '',
    minBathRooms: '',
    minPrice: '',
    maxPrice: '',
};

// const filterValues = [
//     {id: 'select-sale-type', name: saleTypeId},
//     {id: 'select-province', name: provinceId},
//     {id: 'select-room', name: minRooms},
//     {id: 'select-bathroom', name: minBathRooms},
//     {id: 'select-min-price', name: minPrice},
//     {id: 'select-max-price', name: maxPrice}
// ];

// for (let param of filterValues) {
//     onUpdateField(param.id, event => {
//         const value = event.target.value;
//         filter = {
//             ...filter,
//             [param.name]: value,
//         }
//     });
// }

onUpdateField('select-sale-type', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        saleTypeId: value,
    };
});

onUpdateField('select-province', event => {
    const value = event.target.value;
    filter = {
        ...filter,
        provinceId: value,
    };
});

onUpdateField('select-room', event => {
    const value = event.target.value;
    filter = {
        ...filter,
        minRooms: value,
    };
});

onUpdateField('select-bathroom', event => {
    const value = event.target.value;
    filter = {
        ...filter,
        minBathRooms: value,
    };
});

onUpdateField('select-min-price', event => {
    const value = event.target.value;
    filter = {
        ...filter,
        minPrice: value,
    };
});

onUpdateField('select-max-price', event => {
    const value = event.target.value;
    filter = {
        ...filter,
        maxPrice: value,
    };
});

onSubmitForm('search-button', () => {
    const queryParams = mapFilterToQueryParams(filter);
    clearPropertyRows();
    
    getPropertyList(queryParams).then(propertyList => {
        loadPropertyList(propertyList);
    });
});