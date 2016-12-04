(function () {

  angular.module('MenuApp',['ui.router']);

  angular.module('MenuApp',['ui.router'])
  .controller('MenuAppTemporaryController', MenuAppTemporaryController);

  MenuAppTemporaryController.$inject = ['MenuDataService'];
  function MenuAppTemporaryController(MenuDataService)
  {
    controller = this;
    var promise = MenuDataService.getAllCategories();
    promise.then(function (result) {
      console.log("Promise resolved");
      console.dir(result);
    });

  }

})();
