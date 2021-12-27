const Blockchain = require('../blockchain');
const Block = require('../block');

describe('blockchain',()=>{
    let bc;
    beforeEach(()=>{
        bc = new Blockchain();
    });

    test('start the genesis block',()=>{
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    test('addthe new block', ()=>{
        const data = "what ever";
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length-1].data).toEqual(data);
    });
    
});