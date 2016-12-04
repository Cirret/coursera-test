(function () {
  console.log("categories.controller.js");

  angular.module('MenuApp')
  .controller('CategoriesComponentController', CategoriesComponentController);

  CategoriesComponentController.$inject = ['categories']
  function CategoriesComponentController(categories) {
    var controller = this;

    console.log("CategoriesComponentController");
    console.dir(categories);

    controller.categories = categories;
  }


})();
