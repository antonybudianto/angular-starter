var gulp = require('gulp'),
    _ = require('lodash'),
    requireDir = require('require-dir'),
    tasks = requireDir('./config/gulp/tasks'),
    config = require('./config/gulp/config')(),
    envConfig = require('./config/gulp/env'),
    envVars = require('./config/gulp/env-vars'),
    envStatusMessage;

if (envVars) {
    envStatusMessage = '- env.json is detected. ' + _.toArray(envVars).length +
        ' values loaded.';
} else {
    envStatusMessage = '- env.json is not detected. You can create one on project root';
}

console.log('============ Angular 2 Starter ============');
console.log('Current environment: ' + envConfig.ENV);
console.log('- Change environment via --env or NODE_ENV');
console.log(envStatusMessage);
console.log('===========================================');

/* Default task */
gulp.task('default', ['serve-dev']);