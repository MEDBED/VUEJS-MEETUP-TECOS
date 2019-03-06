var app = new Vue({
  el: "#app",
  data: {
    header: "Building your first quick app with VUE JS",
    copyRight: "VUE JS MeetUp By Mohamed BOUHAMED !",
    life: ["Life", "Is", "Short", "You", "Have to learn how to code :)"],
    products: []
  },
  created() {
    fetch("http://api.myjson.com/bins/74l63")
      .then(Response => Response.json())
      .then(json => {
        this.products = json.products;
      });
  }
});
