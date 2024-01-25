import { body, validationResult } from 'express-validator';
export const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (result.errors.length > 0) {
                break;
            }
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() });
    };
};
export const userLoginValidator = [
    body('email').notEmpty().isEmail().withMessage('Email is incoorect'),
    body('password').isLength({ min: 6, max: 15 }),
];
export const userSignupValidator = [
    ...userLoginValidator,
    body('name').notEmpty().withMessage('Name is Empty '),
];
//# sourceMappingURL=data-validators.js.map