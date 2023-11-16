'use strict';

/**
 * demo-collection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-collection.demo-collection');
