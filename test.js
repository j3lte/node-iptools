/*!
 * ip-tools <https://github.com/j3lte/ip-tools>
 *
 * Copyright (c) 2015-2015, J.W. Lagendijk.
 * Licensed under the MIT license.
 */

'use strict';

var should = require('should');
var ip = require('./');

describe('ip tools :: toInt', function () {
  it('should return null when input is not a string', function () {
    should(ip(null).toInt()).equal(null);
    should(ip(1).toInt()).equal(null);
    should(ip().toInt()).equal(null);
  });

  it('should return null when input is not a valid ip', function () {
    should(ip('0.256.1.1').toInt()).equal(null);
    should(ip('0.0.1').toInt()).equal(null);
    should(ip('1').toInt()).equal(null);
    should(ip('-1.0.0.0').toInt()).equal(null);
  });

  it('should return a number when input is a valid ip', function () {
    should(ip('5.228.221.176').toInt()).equal(98885040);
    should(ip('127.0.0.1').toInt()).equal(2130706433);
  });

  it('should return a number when input is an ip array', function () {
    should(ip([5, 228, 221, 176]).toInt()).equal(98885040);
    should(ip([127, 0, 0, 1]).toInt()).equal(2130706433);
  });

});

describe('ip tools :: toIp', function () {
  it('should return null when input is not a number', function () {
    should(ip(null).toIp()).equal(null);
    should(ip('1').toIp()).equal(null);
    should(ip().toIp()).equal(null);
  });

  it('should return an ip given a number', function () {
    should(ip(1).toIp()).equal('0.0.0.1');
    should(ip(98885040).toIp()).equal('5.228.221.176');
    should(ip(2130706433).toIp()).equal('127.0.0.1');
  });

});
