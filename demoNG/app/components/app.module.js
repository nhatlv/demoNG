angular.module('App', ['ngMaterial','ngRoute','ngMessages','configApp'
]);

angular.module('App').config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default').primaryPalette('pink');
})

angular.module('configApp', [])
    .constant('ENDPOINT', {
        'NAME': 'dev',
        'URL':      'http:localhost:8080'
    });

