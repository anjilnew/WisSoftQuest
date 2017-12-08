

angular.module("phoneList").component("phoneList", {
  templateUrl: "template/phone.list.template.html",
  controller: [
    "Phone",
    function(Phone) {
        this.phones = Phone.query();
      
    }
  ]
});
