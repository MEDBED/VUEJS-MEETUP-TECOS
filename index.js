var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Guys!",
    hello: "I am gonna show you guys the power of Vue !",
    life: ["Life", "Is", "Short", "You", "Have to learn how to code :)"],
    ApiLife: []
  },
  created() {
    fetch("http://api.myjson.com/bins/74l63")
      .then(Response => Response.json())
      .then(json => {
        this.ApiLife = json.products;
      });
  }
});
