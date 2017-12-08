angular.module("phonesApp")
.controller("phoneAppCtrl",function($scope,Cart){
    $scope.Cart=Cart;
    $scope.totalPrice=Cart.calcTotalPrice
    
})