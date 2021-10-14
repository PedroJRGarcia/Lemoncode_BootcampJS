import { Validators, createFormValidation } from '@lemoncode/fonk';

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
        
    }
}