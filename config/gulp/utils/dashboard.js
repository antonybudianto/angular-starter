var envVars = require('../utils/env-vars'),
    envConfig = require('../utils/env'),
    util = require('gulp-util'),
    _ = require('lodash'),
    envStatusMessage;

var color;
var colorMap = {
    'development': 'bgGreen',
    'production': 'bgCyan'
};
color = colorMap[envConfig.ENV] || 'bgMagenta';

var StarterDashboard = {
    show: function() {
        if (envVars) {
            envStatusMessage = '- env.json is detected. ' + _.toArray(envVars).length +
                ' values loaded.';
        } else {
            envStatusMessage = '- env.json is not detected. You can create one on project root';
        }

        console.log('============ Angular 2 Starter ============');
        console.log('Current environment: ' + util.colors[color](envConfig.ENV));
        console.log('- Change environment via --env or NODE_ENV');
        console.log(envStatusMessage);
        console.log('===========================================');
    }
};

module.exports = StarterDashboard;
