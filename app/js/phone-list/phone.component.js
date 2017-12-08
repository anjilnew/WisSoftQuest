
let phones=[];
for(let i=0; i<20;i++){
    phones.push({
        id:i,
        name: "Galaxy s3",
        price:200,
        description:"Galaxy s3 descrition",
        imgUrl:"https://images-na.ssl-images-amazon.com/images/I/41Vei2caylL._SL500_AC_SS350_.jpg"
      })
}
console.log(phones)
angular.module("phoneList").component("phoneList", {
  templateUrl: "template/phone.list.template.html",
  controller: function() {
      this.phones=phones;
  }
});
