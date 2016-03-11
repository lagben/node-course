var stockRepository = require("./lib/stockRepository");
var app = require("./app")(stockRepository);

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("When this callback is invoked our server is listening on port: " + 3000);
});