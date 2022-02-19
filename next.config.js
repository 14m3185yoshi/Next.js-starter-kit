/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  reactStrictMode: true,
  env: {
    // firebase
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DATABASE_URL: process.env.DATABASE_URL,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
  }
};
