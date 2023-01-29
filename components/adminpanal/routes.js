const routes = require("next-routes")();

routes
  .add("home", "/", "index")
  .add("about", "/about", "about")
  .add("signup", "/signup", "signup")
  .add("dashboard", "/dashboard", "dashboard");

module.exports = routes;
