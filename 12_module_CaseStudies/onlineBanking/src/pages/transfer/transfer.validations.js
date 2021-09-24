import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
    field: {
        iban: [{
            validator: Validators.required,
            message: 'Required field',
        }, {
            validator: Validators.pattern,
            customArgs: { pattern: '/^[A-Z]{2}[0-9A-Z]*$/' },
        }],
        name: [{
            validator: Validators.required,
            message: 'Required field',
        }],
        amount: [{
            validator: Validators.required,
            message: 'Required field',
        }],
        concept: [{
            validator: Validators.required,
            mmessage: 'Required field',
        }],
        day: [{
            validator: Validators.required,
            message: 'Required field',
        }],
        month: [{
            validator: Validators.required,
            message: 'Required field',
        }],
        year: [{
            validator: Validators.required,
            message: 'Required field',
        }],
        email: [{
            validator: Validators.email,
            message: 'No Valid Email',
        }, {
            validator: Validators.required,
            message: 'Required field',
        }],
    }
};

export const formValidation = createFormValidation(validationSchema);