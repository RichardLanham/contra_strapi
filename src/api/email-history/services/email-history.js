'use strict';

/**
 * email-history service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-history.email-history');
