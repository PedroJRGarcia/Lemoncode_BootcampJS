import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
    field: {
        user: [{
            validator: Validators.required,
            message: 'Required Field',
        }, {
            validator: Validators.email,
            message: 'No Valid Email',
        }],
        password: [{
            validator: Validators.required,
            message: 'Required Field',
        }]
    },
};

export const formValidation = createFormValidation(validationSchema);
