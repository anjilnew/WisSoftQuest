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
  });
