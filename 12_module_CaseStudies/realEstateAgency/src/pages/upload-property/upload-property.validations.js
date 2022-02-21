import { Validators, createFormValidation } from '@lemoncode/fonk';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator'; 

const validationSchema = {
    field: {
        title: [{
            validator: Validators.required,
            message: 'Required field',
        }, {
            validator: Validators.minLength,
            customArgs: { length: 20 },
            message: 'Please, type at least 20 characters',
        }],
        notes: [{
            validator: Validators.required,
            message: 'Required field',
        }, {
            validator: Validators.minLength,
            customArgs: { length: 200 },
            message: 'Please, type at least 200 characters',
        }],
        email: [{
            validator: Validators.required,
            message: 'Required field',
        }, {
            validator: Validators.email,
            message: 'Enter a valid email',
        }],
        phone: [{
            validator: Validators.required,
            message: 'Required field',
        },{
            validator: Validators.pattern,
            customArgs: { pattern: /^(6|7|8|9)\d{8}$/ },
            message: 'Please, type a valid phone number',
        }],
        price: [{
            validator: positiveNumber.validator,
            message: 'Please, type a valid number',
        },{
            validator: Validators.required,
            message: 'Required field',
        }],
        saleTypes: [{
            validator: arrayRequired.validator,
            customArgs: { minLength: 1, maxLength: 4 },
            message: 'Enter at least one type',
        }],
        address: [{
            validator: Validators.required,
            message: 'Required field',
        },{
            validator: Validators.minLength,
            customArgs: { length: 7 },
            message: 'Enter a valid address',
        }],
        city: [{
            validator: Validators.required,
            message: 'Required field',
        },{
            validator: Validators.minLength,
            customArgs: { length: 3 },
            message: 'Enter a valid city',
        }],
        province: [{
            validator: Validators.required,
            message: 'Please, select an option',
        }],
        squareMeter: [{
            validator: positiveNumber.validator,
            message: 'Please, type a valid number'
        },{
            validator: Validators.required,
            message: 'Required field',
        }],
        rooms: [{
            validator: positiveNumber.validator,
            message: 'Please, type a valid number'
        },{
            validator: Validators.required,
            message: 'Required field',
        }],
        bathrooms: [{
            validator: positiveNumber.validator,
            message: 'Please, type a valid number'
        },{
            validator: Validators.required,
            message: 'Required field',
        }],
        mainFeatures: [{
            validator: arrayRequired.validator,
            customArgs: { minLength: 1, maxLength: 20 },
            message: 'Please, type at least one feature',
        }],
        locationUrl: [{
            validator: Validators.required,
            message: 'Required field',
        },{
            validator: Validators.pattern,
            customArgs: { pattern: /^(http|https)\:\/\/www\.google\.com\/maps\// },
        }],
        equipments: [{
            validator: arrayRequired.validator,
            customArgs: { minLength: 1, maxLength: 6 },
            message: 'Enter at least one type',
        }],
    },
};

export const formValidation = createFormValidation(validationSchema);