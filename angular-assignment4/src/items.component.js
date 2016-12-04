(function () {

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'items.template.html',
    controller: ItemsComponentController,
    bindings: {
      items: '<'
      // myTitle: '@title',
      // onRemove: '&'
    }
  });

  ItemsComponentController.$inject = ['$q', '$timeout']
  function ItemsComponentController($q, $timeout) {
    var component = this;
  }


})();
