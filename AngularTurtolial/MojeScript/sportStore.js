angular.module("sportsStore").constant("dataUrl", "/api/Resoponse/Products").controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {
    $scope.data = {};
    $http({
        method: 'GET',
        url: dataUrl
    }).then(function successCallback(response) {
        $scope.data.products = response.data;
        }, function errorCallback(response) {
            $scope.data.error = response.error;
    });
});