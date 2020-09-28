import { BloomFilter} from "bloomfilter";

var fs = require('fs');
var records = JSON.parse(fs.readFileSync('array.json', 'utf8'));

let bloom = new BloomFilter(7188794, 10);


console.time('aaaa')
records.forEach(element => {
    const data = element.EmailAddress + element.FirstNameLastName;
    if (bloom.test(data))
        console.log('DUP', element)
     else
       bloom.add(data)
    
});
console.timeEnd('aaaa')




// bloom.add('abc');
//  console.log(bloom.test('abcd'));
//  console.log(bloom.test('abc'));



