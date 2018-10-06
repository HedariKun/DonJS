"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attachmentObject_1 = require("../Objects/attachmentObject");
function attachmentsParser(objects) {
    let attachments = [];
    for (let obj of objects) {
        let attachment = new attachmentObject_1.Attachment();
        attachment.id = obj.id;
        attachment.type = obj.type;
        attachment.remoteUrl = obj.remote_url;
        attachment.previewUrl = obj.preview_url;
        attachment.textUrl = obj.text_url;
        attachment.description = obj.description;
        attachments.push(attachment);
    }
    return attachments;
}
exports.default = attachmentsParser;
