var ENV_VARS;

try {
    ENV_VARS = require('../../../env.json');
} catch(e) {}

module.exports = ENV_VARS;
