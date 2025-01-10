/**
 * film router
 */

import { factories } from '@strapi/strapi';



const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::film.film');
