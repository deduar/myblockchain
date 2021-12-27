const Block = require('./block');

const block = new Block('2021-12-27','0'.repeat(64),'0'.repeat(64),"Data here !!!");

console.log(block.toStging());

console.log(Block.genesis().toStging());