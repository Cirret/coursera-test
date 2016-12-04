(function () {

  console.log("categories.component.js");
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'categories.template.html',
    controller: 'CategoriesComponentController as categoryController',
    bindings: {
      categories: '<'
      // myTitle: '@title',
      // onRemove: '&'
    }
  });

})();
