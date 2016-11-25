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
      foundItems: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'items',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var nidc = this;
  nidc.found = [];
  nidc.searchTerm = "";

  nidc.btnNarrowIt = function() {
    console.log("btnNarrowIt()");
    nidc.found = MenuSearchService.getMatchedMenuItems(nidc.searchTerm);
  }

  nidc.onRemove = function(index) {
    console.log("onRemove(index=", index, ")");
  }
}

function FoundItemsDirectiveController() {
  var foundItems = this;
  return false;
}

MenuSearchService.$inject = ['$http', 'ApiPath'];
function MenuSearchService($http, ApiPath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    console.log("$http call, searchTerm=", searchTerm);

    var searchTermLower = searchTerm.toLowerCase();
    return $http({
      method: "GET",
      url: (ApiPath)
    })
    .then(function (result) {
      console.log("$http result");
      // process result and only keep items that match
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
      return foundItems;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
      console.log("Error object:", error);
    });
  }
}

})();
