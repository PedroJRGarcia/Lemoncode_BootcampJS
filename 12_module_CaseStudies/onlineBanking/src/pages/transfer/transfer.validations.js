import { Validators, createFormValidation } from '@lemoncode/fonk';
// import { ibanValidator } from '.@lemoncode/fonk/custom-validator';

const validationSchema = {
    field: {
        iban: [{
            validator: Validators.required,
            message: 'Required field',
        }, {
            validator: ibanValidator,
            message: 'Incorrect IBAN',
        }],
        name: [{
            validator: Validators.required,
            message: 'Required field',
        }],
        amount: [{
            validator: Validators.required,
            message: 'Required field',
        }, {}],
        concept: [{
            validator: Validators.required,
            mmessage: 'Required field',
        }],
        day: [{
            validator: Validators.required,
            message: 'Required field',
        }, {}],
        month: [{
            validator: Validators.required,
            message: 'Required field',
        }, {}],
        year: [{
            validator: Validators.required,
            message: 'Required field',
        }, {}],
        email: [{
            validator: Validators.email,
            message: 'No Valid Email',
        }],
    }
};

export const formValidation = createFormValidation(validationSchema);