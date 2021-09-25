import { Validators, createFormValidation } from '@lemoncode/fonk';
import { rangeNumber } from '@lemoncode/fonk-range-number-validator';

const validationSchema = {
    field: {
        iban: [{
            validator: Validators.required,
            message: 'Required field',
        }, {
            validator: Validators.pattern,
            customArgs: { pattern: /^[A-Z]{2}\d{2}(\s?\d{4}){5}$/ },
            message: 'Please, provide a valid IBAN format',
        }],
        name: [{
            validator: Validators.required,
            message: 'Required field',
        }],
        amount: [{
            validator: Validators.required,
            message: 'Required field',
        }, {
            validator: rangeNumber.validator,
            customArgs: {
                strictTypes: '',
                min: {
                    value: 4,
                    inclusive: false,
                },
                max: {
                    value: 100001,
                    inclusive: false,
                },
            },
        }],
        concept: [{
            validator: Validators.required,
            mmessage: 'Required field',
        }],
        day: [{
            validator: Validators.required,
            message: 'Required field',
        }, {
            validator: rangeNumber.validator,
            customArgs: {
                strictTypes: '',
                min: {
                    value: 0,
                    inclusive: false,
                }, 
                max: {
                    value: 32,
                    inclusive: false,
                },
            },
        }],
        month: [{
            validator: Validators.required,
            message: 'Required field',
        }, {
            validator: rangeNumber.validator,
            customArgs: {
                strictTypes: '',
                min: {
                    value: 0,
                    inclusive: false,
                }, 
                max: {
                    value: 12,
                    inclusive: true,
                },
            },
        }],
        year: [{
            validator: Validators.required,
            message: 'Required field',
        }, {
            validator: rangeNumber.validator,
            customArgs: {
                strictTypes: '',
                min: {
                    value: 2020,
                    inclusive: false,
                }, 
                max: {
                    value: 2023,
                    inclusive: false,
                },
            },
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