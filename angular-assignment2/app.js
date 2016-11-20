(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller for items to buy
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var controller = this;
  controller.itemsToBuy = ShoppingListCheckOffService.getToBuyList();
  controller.buy = function(itemIndex)
  {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }

  ShoppingListCheckOffService.addItemToBuy("Cookies", 10);
  ShoppingListCheckOffService.addItemToBuy("Fritos", 9);
  ShoppingListCheckOffService.addItemToBuy("Tab", 8);
  ShoppingListCheckOffService.addItemToBuy("Mountain Dew", 7);
  ShoppingListCheckOffService.addItemToBuy("Pepto Bismol", 6);
}

// LIST #2 - controller for bought items
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var controller = this;
  controller.itemsBought = ShoppingListCheckOffService.getBoughtList();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of items to buy
  var itemsToBuy = [];

  // List of items already bought
  var itemsBought = [];

  service.addItemToBuy = function (itemName, quantity) {
      var item = {
      name: itemName,
      quantity: quantity
    };
    itemsToBuy.push(item);
  };

  service.buyItem = function (itemIndex) {
    itemsBought.push(itemsToBuy[itemIndex]);
    itemsToBuy.splice(itemIndex, 1);
  };

  service.getToBuyList = function () {
    return itemsToBuy;
  };

  service.getBoughtList = function () {
    return itemsBought;
  };
}

})();
