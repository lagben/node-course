var MongoClient = require('mongodb').MongoClient;

// Connection URL

var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/myproject';


var collectionPromise = MongoClient.connect(url).then(function(db) {
    return db.collection("douments");
}).catch(function(err){
    console.log("ERror here",err);
    return err;
} );

function getCount(isbn) {
    return collectionPromise.then(function (collection) {
        return collection.find({"isbn": isbn}).limit(1).next();
    }).then(function (result) {
        if (result) {
            return result.count;
        }
        return null;
    });
}

function insert(isbn, count) {

        return collectionPromise.
        then(function (collection) {
            collection.updateOne({isbn: isbn}, {
                isbn: isbn,
                count: count
            }, {upsert: true});
        });



}

function readAll() {
    return collectionPromise.then(function(collection) {
        return collection.find({}).toArray();
    });

}

module.exports.insert = insert;
module.exports.getCount = getCount;
module.exports.readAll = readAll;



