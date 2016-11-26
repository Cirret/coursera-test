(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.constant('ApiPath', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      itemList: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'fidc',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var nidc = this;
  nidc.searchTerm = "";
  nidc.haveWeSearchedYet = false;

  nidc.btnNarrowIt = function() {
    var promise = MenuSearchService.getMatchedMenuItems(nidc.searchTerm);
    promise.then( function(result) {
      nidc.found = result.foundItems;
    })
    .catch(function (error) {
      console.log("Search failed: ", error);
    });
  }

  nidc.onRemove = function(index) {
    nidc.found.splice(index, 1);
  }
}

function FoundItemsDirectiveController() {
  var fidc = this;
  return false;
}

MenuSearchService.$inject = ['$q', '$http', 'ApiPath'];
function MenuSearchService($q, $http, ApiPath) {
  var service = this;

  // asynchronously retrieve menu items, returning a promise
  service.getMatchedMenuItems = function (searchTerm) {
    var deferred = $q.defer();
    var searchResult = {
      foundItems: []
    };

    if (! searchTerm.trim().length) {
      // return no items when search term is empty or white space
      deferred.resolve(searchResult);
    }
    else {
      $http({
        method: "GET",
        url: (ApiPath)
      })
      .then(function (result) {
        // process result and only keep items that match
        var searchTermLower = searchTerm.toLowerCase();
        var foundItems = [];

        for (var index in result.data.menu_items) {
          var item = result.data.menu_items[index];
          // description
          // id
          // large_portion_name
          // name
          // price_large
          // price_small
          // short_name
          // small_portion_name
          if (item.description.toLowerCase().indexOf(searchTermLower) != -1) {
            foundItems.push(item);
          }
        }

        // return processed items
        searchResult.foundItems = foundItems;
        deferred.resolve(searchResult);
      })
      .catch(function (error) {
        console.log("Something went wrong in search service.");
        console.log("Error object:", error);
        deferred.reject("The search failed");
      });
    }

    return deferred.promise;
  }
}

})();
