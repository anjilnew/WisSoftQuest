angular.module("cartPage").component("cartPage", {
  templateUrl: "template/cart.page.template.html",
  controller: ["Phone", "Cart", function(Phone, Cart) {
      this.purchases=Cart.purchases;
  }]
});
