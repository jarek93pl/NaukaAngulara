angular.module("sportsStore").constant("dataUrl", "http://localhost:5500/products").controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {
    $scope.data = {};
    $http({
        method: 'GET',
        url: dataUrl
    }).then(function successCallback(response) {
        $scope.data.products = response.data;
    }, function errorCallback(response) {
    });
});