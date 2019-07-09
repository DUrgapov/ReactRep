const fl = require('FileReader');
let reader = new FileReader();
let text = reader.readAsText('input.txt');
console.log(text);
