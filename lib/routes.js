var stockRepository = require("./../lib/stockRepository");


function getCount(req, res,next) {
    var isbn = req.params.isbn;
    stockRepository.getCount(isbn).then(function(count){
        res.json(count);
    });
}

 function stock(req, res, next) {
    var isbn = req.body.isbn;
    var count = req.body.count;

    stockRepository.insert(isbn, count).catch(next);

    res.json({isbn: isbn, count: count});
}

function getAll(req, res,next) {
    stockRepository.readAll().then(function(data) {
        res.json(data);
    });
}

function notFound(req, res, next) {
    res.status(404).send('Not found!');
}

function error(err, req, res, next) {
    console.log("Error handler one");
    next(err, req, res);

}


function error2(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
}

module.exports = {
    stock:stock,
    error:error,
    error2:error2,
    notFound:notFound,
    getAll:getAll,
    getCount:getCount
};