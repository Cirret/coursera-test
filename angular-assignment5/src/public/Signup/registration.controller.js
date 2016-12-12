(function () {

  angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['RegistrationService', 'MenuService'];
function RegistrationController(RegistrationService, MenuService) {
  var reg = this;

  reg.user = {};
  reg.fave_valid = true;

  reg.submit = function () {

    MenuService.getMenuItem(reg.user.fave)
    .then(function (valid) {
      reg.fave_valid = valid;

      if (reg.fave_valid) {
        reg.completed = true;
        RegistrationService.setMyInfo(reg.user);
      }
    });

    // reg.completed = true;
    // RegistrationService.setMyInfo(reg.user);
  };
}

})();
