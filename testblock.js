const Block = require('./block');

const block = new Block('27-12-2021','0'.repeat(64),'0'.repeat(64),"Data here !!!");

console.log(block.toStging());