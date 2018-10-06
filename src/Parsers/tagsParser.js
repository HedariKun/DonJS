"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tagObject_1 = require("../Objects/tagObject");
function tagsParser(objects) {
    let tags = [];
    for (let obj of objects) {
        let tag = new tagObject_1.Tag();
        tag.name = obj.name;
        tag.url = obj.url;
        tags.push(tag);
    }
    return tags;
}
exports.default = tagsParser;
