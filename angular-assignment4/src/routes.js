(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/home.state.html'
    });

    $stateProvider
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/categories.state.html',
        controller: 'CategoriesController as controller',
        resolve: {
          cats: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      });

      $stateProvider
      .state('categories.items', {
          url: '/items/{categoryShortName}',
          templateUrl: 'src/items.state.html',
          controller: 'ItemsController as controller',
          resolve: {
            menuItems: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
          }
          
        });
      }
    //

})();
