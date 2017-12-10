angular.module("phonesApp")
.controller("phoneAppCtrl",function($scope,Cart){
    
    $scope.totalPrice=function(){
        return Cart.calcTotalPrice()
    };
    $scope.totalCount=function(){
        return Cart.calcTotalCount()
    };
    
})