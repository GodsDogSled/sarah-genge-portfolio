/**
 * film service
 */

import { factories } from '@strapi/strapi';

'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::film.film');
