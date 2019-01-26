class Mention {
    constructor(data) {
        this.url = data.url;
        this.username = data.username;
        this.acct = data.acct;
        this.id = data.id;
    }
}

module.exports = Mention;
