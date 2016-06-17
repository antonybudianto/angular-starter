var argv = require('yargs').argv;

var ENVS = {
    DEV: 'development',
    PROD: 'production',
    TEST: 'testing'
};

var ENV = argv.env || process.env.NODE_ENV || ENVS.DEV;

module.exports = {
    ENV: ENV,
    ENVS: ENVS
};
