angular
  .module("phoneServices", ["ngResource", "LocalStorageModule"])
  .factory("Phone", function($resource) {
    return $resource(
      "phones-resource/:id.json",
      {},
      {
        query: {
          method: "GET",
          params: { id: "phones" },
          isArray: true
        }
      }
    ); // Note the full endpoint address
  })
  .service("Cart", function(localStorageService) {
    let storage = localStorageService.get("purchases");
    this.purchases = storage ? storage : [];
    this.saveStorage = function() {
      localStorageService.set("purchases", this.purchases);
    };
    this.calcTotalPrice = function() {
      let total = 0;
      if (this.purchases)
        for (let i of this.purchases) {
          total += i.item.price * i.count;
        }

      return total;
    };
    this.calcTotalCount = function() {
      let total = 0;
      if (this.purchases)
        for (let i of this.purchases) {
          total += i.count;
        }
      return total ? total : 0;
    };
    this.push = function(item, count) {
      if (count > 0) {
        if (this.purchases)
          for (let index in this.purchases) {
            let temp = this.purchases[index];
            if (temp.item.id == item.id) {
              this.purchases[index].count += count;
              this.saveStorage();
              return true;
            }
          }
        this.purchases.push({ item, count });
        this.saveStorage();
        return true;
      }
    };
    this.edit = function(item, newCount) {
      if (newCount == 0) {
        return this.remove(item);
      } else {
        
        let index = this.purchases.indexOf(item);
        if (index != -1) {
          this.purchases[index].count = newCount;
        }
        this.saveStorage()
        return true;
      }
    };
    this.remove = function(item) {
      let index = this.purchases.indexOf(item);
      if (index != -1) {
        this.purchases.splice(index, 1);
      }
      this.saveStorage();
      return true;
    };
  });
