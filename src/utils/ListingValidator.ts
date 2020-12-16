import * as joi from 'joi';

export const ListingschemaValidator = joi.object({
    state: joi.string().required(),
    address: joi.string().required(),
    zip_code: joi.string().required(),
    service_type: joi.string().required(),
    email: joi.string().email().required(),
    phone: joi.string().required(),
    website: joi.string(),
})