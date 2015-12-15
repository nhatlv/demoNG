angular.module('App').controller('homeController', HomeController)

HomeController.$inject = ['$scope','$http','ENDPOINT'];

function HomeController($scope,$http,ENDPOINT) {

    $http.get('venue.json').success(function(data) {
        $scope.venues = data;
    });

    //$scope.venues = [
    //    {name: 'Mark Waugh', city: 'New York', image:"http://www.online-image-editor.com//styles/2014/images/example_image.png"},
    //    {isDisplay: true,name: 'Steve Jonathan', city: 'London', image:"http://www.online-image-editor.com//styles/2014/images/example_image.png"},
    //    {name: 'John Marcus', city: 'Paris',image:"http://www.online-image-editor.com//styles/2014/images/example_image.png"}
    //];
    $scope.showMess = showMess;

    function showMess(){
        alert('ffff')
    }
    $scope.message = "Click on the hyper link to view the venues list.";
}
