const SHA256 = require('crypto-js/sha256')

class Block {

    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    };

    toString() {
        return `Block =
            Timestamp: ${this.timestamp}
            LastHash: ${this.lastHash}
            Hash: ${this.hash}
            Data: ${this.data}`;
    }

    static genesis(){
        return new this('Genesis Time','0'.repeat(64),'1'.repeat(64),[]);
    }

    static mineBlock(lastBlock,data){
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = this.hash(timestamp,lastHash,data);
        return new this(timestamp,lastBlock,hash,data);
    }

    static hash(timestamp, lasthash, data){
        return SHA256('${timestamp}${lastshas}${data}').toString();
    }

}

module.exports = Block