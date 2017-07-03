const combinations = require('../src/lib/combinations');

if (process.argv.length < 4) {
  console.log('Usage: npm run sample <n> <k>');
  return;
}

const n = process.argv[2];
const k = process.argv[3];

const max = combinations.getMaxCombinations(n, k);

console.log('Possible combinations:', max, '\r\n');

// template is just to zero-pad the binary representation
let template = '';
for (let i = 0; i < n; i++) {
  template += '0';
}

let i = 0;
let next = combinations.getFirst(k);

do {
  let bin = (next >>> 0).toString(2); // convert to binary
  let str = template.substr(bin.length)+bin; // apply n-bit 0-filled template

  i++;
  console.log(str + ' - ' + i);
  
  next = combinations.getNext(next);
  
} while (i < max);
