(function() {
"use strict";

angular.module('common', [])
// .constant('ApiPathYchaikin', 'https://ychaikin-course5.herokuapp.com')
// .constant('ApiPathCourse4', 'https://davids-restaurant.herokuapp.com')
.constant('ApiPath', 'https://cirret-angular.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
