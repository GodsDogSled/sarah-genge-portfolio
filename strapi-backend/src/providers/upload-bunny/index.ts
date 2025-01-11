// plugins/upload/bunny-provider.js
const axios = require('axios');

module.exports = {
  init(config) {
    const storageZoneName = config.storageZoneName;
    const apiKey = config.apiKey;
    const region = config.region || 'la'; // Default to Los Angeles
    const baseUrl = `https://${region}.storage.bunnycdn.com/${storageZoneName}/`;

    return {
      upload(file) {
        return new Promise(async (resolve, reject) => {
          try {
            const path = `${file.hash}${file.ext}`;

            // Upload to Bunny.net Storage
            await axios.put(
              `${baseUrl}${path}`,
              file.buffer,
              {
                headers: {
                  'AccessKey': apiKey,
                  'Content-Type': file.mime,
                },
              }
            );

            // Set the url to the Bunny.net CDN URL
            file.url = `https://${storageZoneName}.b-cdn.net/${path}`;

            resolve(file);
          } catch (error) {
            reject(error);
          }
        });
      },

      delete(file) {
        return new Promise(async (resolve, reject) => {
          try {
            const path = file.url.split('.b-cdn.net/')[1];

            await axios.delete(
              `${baseUrl}${path}`,
              {
                headers: {
                  'AccessKey': apiKey,
                },
              }
            );

            resolve(true);
          } catch (error) {
            reject(error);
          }
        });
      },
    };
  },
};