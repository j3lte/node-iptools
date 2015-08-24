/*!
 * node-iptools <https://github.com/j3lte/ip-tools>
 *
 * Copyright (c) 2015-2015, J.W. Lagendijk.
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('lodash');

module.exports = function iptools(val) {

    function toIp () {
        if (typeof val !== 'number') {
            return null;
        }

        var address = val % 256;
        for (var i = 3; i > 0; i--)
        {
            val = Math.floor(val/256);
            address = val % 256 + '.' + address;
        }
        return address;
    }

    function toInt () {
        if (typeof val !== 'string' && !_.isArray(val)) {
            return null;
        }
        var addrArr = _.isArray(val) ? val : val.split('.');
        if (addrArr.length !== 4 || _.min(addrArr) < 0 || _.max(addrArr) > 255) {
            return null;
        }
        return ((((((+addrArr[0])*256)+(+addrArr[1]))*256)+(+addrArr[2]))*256)+(+addrArr[3]);
    }

    return {
        toIp: toIp,
        toInt: toInt
    };
};
