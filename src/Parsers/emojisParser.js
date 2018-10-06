"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emojiObject_1 = require("../Objects/emojiObject");
function emojisParser(objects) {
    let emojisList = [];
    for (let obj of objects) {
        let emoji = new emojiObject_1.Emoji();
        emoji.shortCode = obj.shortcode;
        emoji.staticUrl = obj.static_url;
        emoji.emojiUrl = obj.url;
        emoji.visibleInPicker = obj.visible_in_picker;
        emojisList.push(emoji);
    }
    return emojisList;
}
exports.default = emojisParser;
