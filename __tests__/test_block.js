const Block = require('../block');

describe("block", ()=>{
    let data, lastBlock, block;
    
    beforeEach(()=>{
        data = "bar";
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock.hash,data);
    });
    
    test("Set the data in block to match the input", ()=>{
        expect(block.data).toEqual(data);       
    });

    test("Set the lastHash in Block to match the hash of the last Block", ()=>{
        expect(block.lastHash).toEqual(lastBlock.hash);
    });
})