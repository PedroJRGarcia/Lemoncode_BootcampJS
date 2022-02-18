import { insertNewProperty, getProvincesList, getEquipments, getSaleTypes } from './upload-property.api';
import { mapNewPropertyVmToApi } from './upload-property.mappers';
import { formValidation } from './upload-property.validations';
import { 
formatCheckboxId, 
setCheckboxList, 
setOptionList, 
formatDeleteFeatureButtonId, 
onAddFeature,
onRemoveFeature,
onAddImage } from './upload-property.helpers';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers';

let newProperty = {
    id: '',
    title: '',
    notes: '',
    email: '',
    phone: '',
    saleTypes: [],
    address: '',
    city: '',
    province: '',
    squareMeter: '',
    rooms: '',
    bathrooms: '',
    locationUrl: '',
    mainFeatures: [],
    equipmentIds: [],
    images: [],
};

const onUpdateValues = ['title', 'notes', 'email', 'phone', 'saleTypes', 'price',
'address', 'city', 'province', 'squareMeter', 'rooms', 'bathrooms', 'locationUrl',
'mainFeatures'];

Promise.all([getProvincesList(), getEquipments(), getSaleTypes()]).then(
    ([provinceList, equipmentList, saleTypesList]) => {
        setOptionList(provinceList, 'province');
        setCheckboxList(equipmentList, 'equipments');
        setCheckboxList(saleTypesList, 'saleTypes');
    }
);

for (let param of onUpdateValues) {
    onUpdateField (param, event => {
        const value = event.target.value;
        newProperty  = {
            ...newProperty,
            [param]: value,
        };

        formValidation.validateField(param, newProperty[param]).then(
            result => {
                onSetError(param, result);
            });
    });
}

onSubmitForm ('save-button', () => {
    formValidation.validateForm(newProperty).then((result) => {
        onSetFormErrors(result);
        const apiNewProperty = mapNewPropertyVmToApi(newProperty);

        if(result.succeeded) {
            insertNewProperty(apiNewProperty).then(() => {
                history.back();
            })
        }
    });
});