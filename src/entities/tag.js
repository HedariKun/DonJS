const History = require("./history");

class Tag {
    constructor(data) {
        this.name = data.name;
        this.url = data.url;
        this.history = data.history == null ? null : data.history.map(x => new History(x));
    }
}

module.exports = Tag;
