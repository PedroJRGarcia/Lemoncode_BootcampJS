import { getAccount, insertTransfer } from './transfer.api';
import { setAccountOptions } from './transfer.helpers';
import { onUpdateField, onSetError, onSetFormErrors, onSubmitForm } from '../../common/helpers';
import { history } from '../../core/router';
import { formValidation } from './transfer.validations';

const params = history.getParams();

let transfer = {
    selectAccount: '',
    iban: '',
    name: '',
    amount: '',
    concept: '',
    notes: '',
    day: '',
    month: '',
    year: '',
    date: '',
    email: '',
};

getAccount().then(account => {
    console.log(account);
    setAccountOptions(account, params.id);
});

onUpdateField('select-account', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        selectAccount: value,
    }
});

onUpdateField('iban', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        iban: value,
    }

    formValidation.validateField('iban', transfer.iban).then(result => {
        onSetError('iban', result);
    });
});

onUpdateField('name', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        name: value,
    }

    formValidation.validateField('name', transfer.name).then(result => {
        onSetError('name', result);
    });
});

onUpdateField('amount', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        amount: value,
    }

    formValidation.validateField('amount', transfer.amount).then(result => {
        onSetError('amount', result);
    });
});

onUpdateField('concept', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        concept: value,
    }

    formValidation.validateField('concept', transfer.concept).then(result => {
        onSetError('concept', result);
    });
});

onUpdateField('notes', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        notes: value,
    }
});

onUpdateField('day', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        day: value,
    }

    formValidation.validateField('day', transfer.day).then(result => {
        onSetError('day', result);
    });
});

onUpdateField('month', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        month: value,
    }

    formValidation.validateField('month', transfer.month).then(result => {
        onSetError('month', result);
    });
});

onUpdateField('year', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        year: value,
    }

    formValidation.validateField('year', transfer.year).then(result => {
        onSetError('year', result);
    });
});

const getDate = () => {
    const setDate = `${transfer.day}/${transfer.month}/${transfer.year}`;
    transfer = {
        ...transfer,
        date: setDate,
    };

    formValidation.validateField('date-error', transfer.date).then(result => {
        onSetError('date-error', result);
    });
}

onUpdateField('email', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        email: value,
    }

    formValidation.validateField('email', transfer.email).then(result => {
        onSetError('email', result);
    });
});

onSubmitForm('transfer-button', () => {
    getDate();
    formValidation.validateForm(transfer).then(result => {
        onSetFormErrors(result);
        if (result.succeeded) {
            insertTransfer(transfer);
            console.log(transfer)
            alert('Successful Transfer')
        }
    });
});