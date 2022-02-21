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
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onAddFile } from '../../common/helpers';

let newProperty = {
    id: '',
    title: '',
    notes: '',
    email: '',
    phone: '',
    price: '',
    saleTypes: [],
    address: '',
    city: '',
    province: '',
    squareMeter: '',
    rooms: '',
    bathrooms: '',
    locationUrl: '',
    mainFeatures: [],
    equipments: [],
    images: [],
};

const onUpdateValues = ['title', 'notes', 'email', 'phone', 'price',
'address', 'city', 'province', 'squareMeter', 'rooms', 'bathrooms', 'locationUrl'];

Promise.all([getProvincesList(), getEquipments(), getSaleTypes()]).then(
    ([provinceList, equipmentList, saleTypesList]) => {
        setOptionList(provinceList, 'province');
        setCheckboxList(equipmentList, 'equipments');
        setCheckboxList(saleTypesList, 'saleTypes');
        checkboxEvent(equipmentList, 'equipments');
        checkboxEvent(saleTypesList, 'saleTypes');
    }
);

const addElement = (value, id) => 
    newProperty = { ...newProperty, [id]: [...newProperty[id], value].sort() };

// const removeElement = (value, id) => { newProperty[id].pop(value) };
const removeElement = (value, id) => 
    newProperty[id].splice(newProperty[id].indexOf(value), 1);

const checkboxEvent = (list, id) => {
    list.forEach( el => {
        const checkbox = formatCheckboxId(el);
        onUpdateField(checkbox, event => {
            const value = event.target.value;
            event.target.checked ? addElement(value, id) : removeElement (value, id);
        });
    });
};

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

onAddFile('add-image', photo => {
    onAddImage(photo);
    newProperty = {
        ...newProperty,
        images: [...newProperty.images, photo],
    };
});

onSubmitForm ('insert-feature-button', () => {
    const newFeature = document.getElementById('newFeature').value;
    if (newFeature) {
        newProperty = {
            ...newProperty,
            mainFeatures: [...newProperty.mainFeatures, newFeature],
        }
        onAddFeature(newFeature);
        const buttonId = formatDeleteFeatureButtonId(newFeature);
        onSubmitForm(buttonId, () => {
            onRemoveFeature(newFeature);
            newProperty.mainFeatures.splice(newFeature);
        });
    }
});

onSubmitForm ('save-button', () => {
    console.log({ newProperty });
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