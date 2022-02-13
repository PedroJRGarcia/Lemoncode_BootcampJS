import { getPropertyDetail, getEquipmentDetail, insertMessage } from './property-detail.api';
import { mapPropertyDetailApiToVm, mapContactVmToApi } from './property-detail.mappers';
import { formValidation } from './property-detail.validations';
import { setPropertyValues } from './property-detail.helpers';
import { history } from '../../core/router';
import { onUpdateField, onSetError, onSetFormErrors, onSubmitForm } from '../../common/helpers';

let contact = {
    email: '',
    message: '',
};

const params = history.getParams();

Promise.all([
    getPropertyDetail(params.id), 
    getEquipmentDetail(),
]).then(([propertyDetail, equipmentList]) => {
    loadPropertyDetail(propertyDetail, equipmentList);
});

const loadPropertyDetail = (propertyList, equipmentList) => {
    console.log(propertyList);
    const vmPropertyDetailList = mapPropertyDetailApiToVm(propertyList, equipmentList);
    setPropertyValues(vmPropertyDetailList);
};

onUpdateField('email', event => {
    const value = event.target.value;
    contact = {
        ...contact,
        email: value,
    };

    formValidation.validateField('email', contact.email).then(result => {
        onSetError('email', result);
    });
});

onUpdateField('message', event => {
    const value = event.target.value;
    contact = {
        ...contact,
        message: value,
    };

    formValidation.validateField('message', contact.message).then(result => {
        onSetError('message', result);
    });
});

onSubmitForm('contact-button', () => {
    formValidation.validateField(contact).then(result => {
        onSetFormErrors(result);
        const apiContact = mapContactVmToApi({contact});
        
        if(result.succeeded) {
            insertMessage(apiContact).then(() => {
                history.back();
            });
        }
    });
});