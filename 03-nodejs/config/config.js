'use stric';

const path = require('path');
const dotenv = require('dotenv');

console.log('load node process env', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'prod') {
    dotenv.config({ path: path.join(__dirname, './.env.prod') });
    // ###########  BD Config
    process.env.URL_DB = process.env.MONGO_URI ? process.env.MONGO_URI : `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
} else if (process.env.NODE_ENV === 'staging') {
    dotenv.config({ path: path.join(__dirname, './.env.staging') });
    // ###########  BD Config
    process.env.URL_DB = process.env.MONGO_URI ? process.env.MONGO_URI : `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
} else {
    dotenv.config({ path: path.join(__dirname, './.env') });
    // ###########  BD Config
    process.env.URL_DB = process.env.MONGO_URI ? process.env.MONGO_URI : `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
}