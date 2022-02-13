import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
    field: {
        email: [{
            validator: Validators.required,
            message: 'Required field',
        },
        {
            validator: Validators.email,
            message: 'No valid email',
        }],
        message: [{
            validator: Validators.required,
            message: 'Required field',
        }],
    }
};

export const formValidation = createFormValidation(validationSchema);