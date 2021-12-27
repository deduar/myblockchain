class Block {

    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    };

    toStging() {
        return `Block =
            Timestamp: ${this.timestamp}
            LastHash: ${this.lastHash}
            Hash: ${this.hash}
            Data: ${this.data}`;
    }

}

module.exports = Block