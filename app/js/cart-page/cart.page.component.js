angular.module("cartPage").component("cartPage", {
  templateUrl: "template/cart.page.template.html",
  controller: ["Phone", "Cart", function(Phone, Cart) {
      this.purchases=Cart.purchases;
      
      this.show = false;
      this.currentPurchase={};
      this.toggleShow = function(purchase={}) {
        this.show = !this.show;
        this.currentPurchase=purchase;
      }
      this.edit=(i,c)=>{
        console.log(i,c)
        Cart.edit(i,c)};
 
      this.remove=function(){
        Cart.remove(this.currentPurchase)
        this.toggleShow();
      }
  }]
});
