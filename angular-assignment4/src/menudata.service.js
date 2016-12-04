(function () {

  console.log("menudata.service.js");

//
angular.module('MenuApp')
.constant('ApiCategoriesPath', 'https://davids-restaurant.herokuapp.com/categories.json')
.constant('ApiItemsForCategoryPath', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$q','$http', 'ApiCategoriesPath', 'ApiItemsForCategoryPath'];
function MenuDataService($q, $http, ApiCategoriesPath, ApiItemsForCategoryPath) {
  var service = this;
  console.log("menudata.service.js - MenuDataService");

    // Get all menu categories - returns a promise
    // service.getAllCategories = function () {
    //   console.log("getAllCategories() stub version");
    //   var deferred = $q.defer();
    //   deferred.resolve("resolve for test purposes");
    //   return deferred.promise;
    // }

    service.getAllCategories = function () {
      console.log("getAllCategories()");
        var deferred = $q.defer();
        console.log("getAllCategories() 2");

        console.log("getAllCategories() 3");
        // deferred.resolve("resolve for test purposes");
        // return deferred.promise;

        $http({
          method: "GET",
          url: (ApiCategoriesPath)
        })
        .then(function (result) {
          console.log("getAllCategories() then");
          console.dir(result);

          deferred.resolve(result.data);
        })

        .catch(function (error) {
          console.log("Something went wrong in getAllCategories().");
          console.log("Error object:", error);
          deferred.reject("getAllCategories failed");
        });
        return deferred.promise;
      }
      console.log("MenuDataService - in the middle");

      // Get all menu categories - returns a promise
      service.getItemsForCategory = function (category) {
          var deferred = $q.defer();
          console.log("getItemsForCategory(), category: ", category);

          $http({
            method: "GET",
            url: (ApiItemsForCategoryPath),
            params: {
              category: category
            }
          })
          .then(function (result) {
            console.log("getItemsForCategory(), then");
            console.dir(result);
            deferred.resolve(result.data);
          })
          .catch(function (error) {
            console.log("Something went wrong in getItemsForCategory().");
            console.log("Error object:", error);
            deferred.reject("getItemsForCategory failed");
          });
          return deferred.promise;
        }
        console.log("MenuDataService - almost at the end");
  }
})();
