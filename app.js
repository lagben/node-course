var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./lib/routes');



module.exports = function(stockRepository) {

    var app = express();
    app.use(function(req, res, next){
        console.log("incoming request  " + new Date().getTime());
        next();
    });


    app.use(bodyParser.json());
    app.post('/stockUp', routes.stock);

//GET /stock/1617291781 {“count”: 10}

    app.get("/stock/:isbn", routes.getCount);

    app.get("/getAll", routes.getAll);

    app.use(routes.notFound);
    app.use(routes.error);
    app.use(routes.error2);
    return app;
};
