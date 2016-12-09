(function () {

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/items.component.html',
    bindings: {
      meals: '<'
    }
  });
})();
