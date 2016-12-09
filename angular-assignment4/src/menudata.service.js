(function () {

angular.module('data')
.constant('ApiCategoriesPath', 'https://davids-restaurant.herokuapp.com/categories.json')
.constant('ApiItemsForCategoryPath', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$q','$http', 'ApiCategoriesPath', 'ApiItemsForCategoryPath'];
function MenuDataService($q, $http, ApiCategoriesPath, ApiItemsForCategoryPath) {
  var service = this;
    service.getAllCategories = function () {
        var deferred = $q.defer();

        $http({
          method: "GET",
          url: (ApiCategoriesPath)
        })
        .then(function (result) {
          deferred.resolve(result.data);
        })

        .catch(function (error) {
          console.log("Something went wrong in getAllCategories().");
          console.log("Error object:", error);
          deferred.reject("getAllCategories failed");
        });
        return deferred.promise;
      }

      // Get all menu categories - returns a promise
      service.getItemsForCategory = function (category) {
          var deferred = $q.defer();

          $http({
            method: "GET",
            url: (ApiItemsForCategoryPath),
            params: {
              category: category
            }
          })
          .then(function (result) {
            deferred.resolve(result.data.menu_items);
          })
          .catch(function (error) {
            console.log("getItemsForCategory(), catch - category: ", category);
            console.log("Error object:", error);
            deferred.reject("getItemsForCategory failed");
          });
          return deferred.promise;
        }
  }
})();
