var mocha = require("mocha");
var stockRepository = require("./../lib/stockRepository");
var app = require("./../app")(stockRepository);
var request = require("supertest");
var assert = require("assert");

describe("server test",function() {
    context("calling routes",function() {
        it("json route", function(done) {
            request(app)
                .post('/stockUp')
                .send({"isbn": "1234567890","count":200})
                .set('content-type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res) {
                    assert.ok(res.body.isbn === "1234567890");
                    done();
                });
        });
    });
});