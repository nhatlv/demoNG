angular.module('App').config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'app/components/home/homeView.html',
            controller: 'homeController'
        })
        .otherwise({
            redirectTo: '/home'
        });
})
