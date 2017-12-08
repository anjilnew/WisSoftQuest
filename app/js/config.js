'use strict'

angular.module("phonesApp").config(
    function($stateProvider) {
        var showcaseState = {
          name: 'showcase',
          url: '/showcase',
          template: '<phone-list></phone-list>'
        }
      
        var cartState = {
          name: 'cart',
          url: '/cart',
          template: '<h3>shopping cart</h3>'
        }
      
        $stateProvider.state(showcaseState);
        $stateProvider.state(cartState);
      }
)