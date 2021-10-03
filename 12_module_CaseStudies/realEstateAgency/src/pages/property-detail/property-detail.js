import { getPropertyDetail } from './property-detail.api';
import { mapPropertyDetailApiToVm } from './property-detail.mappers';
import { formValidation } from './property-detail.validations';
import { setPropertyValues } from './property-detail.helpers';
import { history } from '../../core/router';
import { onUpdateField, onSetError, onSetFormErrors, onSubmitForm } from '../../common/helpers';

let contact = {
    email: '',
    message: '',
};

const params = history.getParams();

Promise.all([getPropertyDetail(params.id)]).then(([propertyDetail]) => {
    loadPropertyDetail(propertyDetail);
});

const loadPropertyDetail = propertyList => {
    const vmPropertyDetailList = mapPropertyDetailApiToVm(propertyList);
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
    formValidation.validateForm(contact).then(result => {
        onSetFormErrors(result);
        if (result.succeeded) {

        }
    });
});
