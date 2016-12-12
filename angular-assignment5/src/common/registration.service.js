(function () {
"use strict";

angular.module('common')
.service('RegistrationService', RegistrationService);

RegistrationService.$inject = [];
function RegistrationService() {
  var service = this;

  service.myInfo = {};

  // console.log("RegistrationService: setting test values for registration data");
  // service.myInfo = {
  //   first_name: "Isaac",
  //   last_name: "Hayes",
  //   email: "isaac.hayes@erewhon.co.dk",
  //   phone: "000-000-0000",
  //   fave: "SP4"
  // }

  service.setMyInfo = function(info) {
    service.myInfo = {
      first_name: info.first_name,
      last_name: info.last_name,
      email: info.email,
      phone: info.phone,
      fave: info.fave
    }
  };

  service.getMyInfo = function() {
    return service.myInfo;
  };
}



})();
