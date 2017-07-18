angular.module("sportsStore").constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 3)
    .controller("productListCtrl",
    function ($scope, $filter, productListActiveClass, productListPageCount) {


        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount; 

        var selectedCategory = null;
        $scope.selectCategory = function (newCategory) {
            $scope.selectedPage = 1;
            selectedCategory = newCategory;
        }
        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null || product.category == selectedCategory;
        }
        $scope.getCategoryClass = function (category)
        { return selectedCategory == category ? productListActiveClass : ""; } 

        $scope.selectPage = function (newPage) { $scope.selectedPage = newPage; }

        $scope.getPageClass = function (page) { return $scope.selectedPage == page ? productListActiveClass : ""; }    
    });