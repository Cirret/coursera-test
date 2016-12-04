(function () {

<!-- REMOVE -->

angular.module('MenuApp',['ui.router']);

angular.module('MenuApp')
.config(RoutesConfig);

angular.module('MenuApp')
.constant('ApiCategoriesPath', 'https://davids-restaurant.herokuapp.com/categories.json')
.constant('ApiItemsForCategoryPath', 'https://davids-restaurant.herokuapp.com/menu_items.json')
.service('MenuDataService', MenuDataService);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  console.log("RoutesConfig");

  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/home.template.html'
    });

    $stateProvider
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/categories.component.html',
        // controller: 'CategoriesComponentController as categoriesController',
        resolve: {
          categories: ['$q', function($q) {}]
          // categories: ['MenuDataService', function (MenuDataService) {
          //   console.log("resolve: calling MenuDataService");
          //   return MenuDataService.getAllCategories();
          // }]
        }
      });

      // Set up UI states
      $stateProvider
        .state('tab1', {
          url: '/tab1',
          templateUrl: 'src/tab1.html'
        });

        $stateProvider
        .state('tab2', {
          url: '/tab2',
          templateUrl: 'src/tab2.html'
        });

    //
    // .state('tab2', {
    //   url: '/tab2',
    //   templateUrl: 'src/tab2.html'
    // });
}


})();
