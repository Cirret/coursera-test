(function () {

  angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['RegistrationService', 'MenuService'];
function RegistrationController(RegistrationService, MenuService) {
  var reg = this;

  reg.user = {};
  reg.fave_valid = true;

  reg.submit = function () {
    var fave = reg.user.fave.toUpperCase();
    MenuService.getMenuItem(fave)
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
