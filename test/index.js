'use strict';

var assert = require('assert');

var glob = require('glob');

describe('eslint-config-simbo', function() {

  it('should return a plain object with every export', function(done) {
    glob('**/*.js', {
      ignore: [
        'node_modules/**/*',
        'test/**/*',
        'coverage/**/*'
      ]
    }, function(err, files) {
      if (err) throw new Error(err);
      files.forEach(function(file) {
        var mod = require('../' + file);
        assert.equal(mod.constructor.name, 'Object');
        assert.deepEqual(JSON.parse(JSON.stringify(mod)), mod);
      });
      done();
    });
  });

});
