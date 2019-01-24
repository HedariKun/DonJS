const {Status} = require("./status")

class Context {
    constructor(data) {
        this.ancestors = data.ancestors.map(x => new Status(x));
        this.descendants = data.descendants.map(x => new Status(x));
    }
}

module.exports = {
    Context
}