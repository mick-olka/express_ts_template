const pkg = require('../../package.json');

require('dotenv').config();

const CONFIG = {
  APP: {
    NAME: pkg.name,
    VERSION: pkg.version,
    DESCRIPTION: pkg.description,
    AUTHORS: pkg.authors,
    //HOST: process.env.APP_HOST,
    //BASE_URL: process.env.API_BASE_URL,
    PORT: process.env.PORT || 5000,
    ENV: process.env.NODE_ENV || 'dev',
    CORS_LIST: [
      'http://localhost:' + process.env.PORT || 5000,
      'http://192.168.0.103:'+ process.env.PORT || 5000,
      'http://192.168.0.113:'+ process.env.PORT || 5000,
    ]
  }
};

export default CONFIG;
