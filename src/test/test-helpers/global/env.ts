// This lets systemjs.conf.js knows how to load the module during testing
((global) => {
    global.ENV = 'testing';
})(this);
