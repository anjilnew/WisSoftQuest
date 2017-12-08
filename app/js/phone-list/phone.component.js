angular.module("phoneList").component("phoneList", {
  templateUrl: "template/phone.list.template.html",
  controller: [
    "Phone",
    "Cart",
    function(Phone, Cart) {
     
      this.Cart = Cart;
      this.total=0;
      this.calcTotal=function (){
        this.total=Cart.calcTotalPrice();
      }
      this.phones = Phone.query();
      this.buy=function(item,count){
        Cart.push(item,count)
        this.calcTotal()
 
      }
      
    }
  ]
});
