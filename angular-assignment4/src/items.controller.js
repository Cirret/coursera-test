(function () {
  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['menuItems'];
  function ItemsController(menuItems) {
    var controller = this;
    controller.items = menuItems;
  }

})();
