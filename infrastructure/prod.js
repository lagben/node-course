var _ = require('lodash');
var heroin = require('heroin-js');

var prod = {
    name: 'node-course',
    domains: ['node-course.herokuapp.com'],
    config_vars: {
    }
};

var config = _.merge({}, require('./base'), prod);

var configurator = heroin(process.env.HEROKU_API_TOKEN);
configurator(config);
