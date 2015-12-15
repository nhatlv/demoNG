angular.module('App').controller('AppCtrl', MainController)
MainController.$inject = ['$scope', '$mdSidenav', '$mdToast', '$mdDialog', '$location'];


function MainController($scope, $mdSidenav, $mdToast, $mdDialog, $location) {
    $scope.toggleSidenav = function (menu) {
        $mdSidenav(menu).toggle();
    }
    $scope.toast = function (message) {
        var toast = $mdToast.simple().content('You clicked ' + message).position('bottom right');
        $mdToast.show(toast);
    };
    $scope.toastList = function (message) {
        var toast = $mdToast.simple().content('You clicked ' + message + ' having selected ' + $scope.selected.length + ' item(s)').position('bottom right');
        $mdToast.show(toast);
    };
    $scope.selected = [];

    $scope.loadView = function (view) {
        $location.path(view);
    };

    $scope.showAdvanced = function (ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'app/shared/dialog/dialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
    };

    $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
    };

    $scope.data = {
        title: 'Dashboard',
        user: {
            name: 'Angular',
            email: 'angular@axonactive.vn',
            icon: 'face'
        },
        toolbar: {
            buttons: [{
                name: 'Button Add',
                icon: 'add',
                link: 'Button Add'
            }]
        }, // For Navigation bar
        sidenav: {
            sections: [{
                name: 'Home',
                expand: false,
                actions: [{
                    name: 'View List',
                    icon: 'settings',
                    link: 'home'
                }]
            }]
        },
        content: {}
    }
};