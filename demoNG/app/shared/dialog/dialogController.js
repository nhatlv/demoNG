function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
      //  $mdDialog.hide(answer);
        alert( $scope.project.description);
    };
    $scope.project = {

        rate: 500
    };

}