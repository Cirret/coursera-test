(function () {
  'use strict'
  angular.module('public')
  .controller('MyInformationController', MyInformationController);

  MyInformationController.$inject = ['RegistrationService', 'MenuService', 'faveItem'];
  function MyInformationController(RegistrationService, MenuService, faveItem) {
    var myInfoCtrl = this;
    myInfoCtrl.faveItem = faveItem;
    myInfoCtrl.user = RegistrationService.getMyInfo();
  };
})();
