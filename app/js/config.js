'use strict'

angular.module("phonesApp").config(
    function($stateProvider,localStorageServiceProvider) {
      localStorageServiceProvider
      .setPrefix('phonesApp')
      .setStorageType('sessionStorage')
      .setNotify(true, true)
        var showcaseState = {
          name: 'showcase',
          url: '/showcase',
          template: '<phone-list></phone-list>'
        }
        var defaultUrl = {
          name: 'default',
          url: '',
          template: '<phone-list></phone-list>'
        }
      
        var cartState = {
          name: 'cart',
          url: '/cart',
          template: '<cart-page></cart-page>'
        }
      
        $stateProvider.state(showcaseState);
        $stateProvider.state(cartState);
        $stateProvider.state(defaultUrl)
       
      }
)