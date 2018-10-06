"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mentionObject_1 = require("../Objects/mentionObject");
function mentionsParser(objects) {
    let mentions = [];
    for (let obj of objects) {
        let mention = new mentionObject_1.Mention();
        mention.domain = obj.acct;
        mention.id = obj.id;
        mention.url = obj.url;
        mention.username = obj.username;
        // add the ability to get the user object after adding the get account request
        mentions.push(mention);
    }
    return mentions;
}
exports.default = mentionsParser;
