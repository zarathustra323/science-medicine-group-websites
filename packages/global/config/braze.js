const Joi = require('@parameter1/joi');
const { validate } = require('@parameter1/joi/utils');

module.exports = (params = {}) => {
  const {
    siteName,
  } = validate(Joi.object({
    siteName: Joi.string().required().description('The Braze site membership identifier.'),
  }), params);

  return {
    apiHost: 'https://rest.iad-05.braze.com',
    apiKey: process.env.BRAZE_API_KEY,
    tenant: 'smg',
    fieldMap: {
      id: 'external_id',
      givenName: 'first_name',
      familyName: 'last_name',
      email: 'email',
      city: 'home_city',
      countryCode: 'country',
      phoneNumber: 'phone',
      organization: 'org_name',
    },
    onUserProfileUpdateFormatter: async ({ payload = [] }) => ({
      ...payload,
      site_membership: { add: siteName },
    }),
  };
};