angular
  .module("phoneServices", ["ngResource"])
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
  .service("Cart", function() {
    this.purchases = [];
    this.calcTotalPrice = function() {
      let total = 0;
     if(this.purchases)
        for (let i of this.purchases) {
          total += i.item.price * i.count;
        }
      
      return total?total:0;
    };
    this.push = function(item, count) {
      if(this.purchases)
      for (let index in this.purchases) {
        let temp=this.purchases[index];
        if (temp.item.id == item.id) {
          this.purchases[index].count+=count;
          return true;
        }
      }
      this.purchases.push({item,count});
      return true;
    };
  });
