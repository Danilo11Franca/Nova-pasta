const readFile = require('fs').readFileSync;
const writeFile = require('fs').writeFileSync;

const data = readFile('input.js', 'utf8');

writeFile('input.js', 'utf8', { flag: 'a+' })

console.log(data)