angular.module("phoneList").component("phoneList", {
  templateUrl: "template/phone.list.template.html",
  controller: [
    "Phone",
    "Cart",
    function(Phone, Cart) {
      this.Cart = Cart;
      this.show = false;
      this.currentPhone={};
      this.toggleShow = function(phone={}) {
        this.show = !this.show;
        this.currentPhone=phone;
      }
      this.phones = Phone.query();
      this.buy = function(item, count) {
        Cart.push(item, count);
        this.toggleShow();
        return true;
      };
    }
  ]
});
