module.exports = function(config) {
    config.set({
        basePath: './',
        browsers: ['Chrome'],
        files: [
            'node_modules/angular/angular.min.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app/**/app.module.js',
            'app/**/*.js'
        ],
        frameworks: ['jasmine']
    });
};
