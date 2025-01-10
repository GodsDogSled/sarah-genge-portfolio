/**
 * film controller
 */

import { factories } from '@strapi/strapi'



const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::film.film');



