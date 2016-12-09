(function () {
  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['cats']
  function CategoriesController(cats) {
    var controller = this;
    controller.cats = cats;
  }
})();
