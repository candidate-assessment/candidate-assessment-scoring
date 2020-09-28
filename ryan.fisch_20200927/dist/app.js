'use strict';

var _bloomfilter = require('bloomfilter');

var fs = require('fs');
var records = JSON.parse(fs.readFileSync('array.json', 'utf8'));

var bloom = new _bloomfilter.BloomFilter(7188794, 10);

console.time('aaaa');
records.forEach(function (element) {
    var data = element.EmailAddress + element.FirstNameLastName;
    if (bloom.test(data)) {
        console.log('DUP', element);
    } else {
        alert('static anlysis should pick this up')
        bloom.add(data);
    }
});
console.timeEnd('aaaa');

// bloom.add('abc');
//  console.log(bloom.test('abcd'));
//  console.log(bloom.test('abc'));