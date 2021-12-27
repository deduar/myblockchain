const Block = require('./block');

/*
* Test unitario one block
*
const block = new Block('2021-12-27','0'.repeat(64),'0'.repeat(64),"Data here !!!");
console.log(block.toStging());
*/

/*
* Test unitario block genesis
console.log(Block.genesis().toStging());
*/

/*
* Test unitario cadebna 10 bloques
for (let i = 1; i <= 10; i++){
    block = new Block(Date.now(),'0'.repeat(64),'0'.repeat(64),`Data_${i}`);
    console.log(block.toStging())
}
*/

const fooBlock = Block.mineBlock(Block.genesis().hash,'foobar data');
console.log(Block.genesis().toStging());
console.log(fooBlock.toStging());