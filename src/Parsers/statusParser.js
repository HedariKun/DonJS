"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const emojisParser_1 = __importDefault(require("./emojisParser"));
const attachmentsParser_1 = __importDefault(require("./attachmentsParser"));
const mentionsParser_1 = __importDefault(require("./mentionsParser"));
const tagsparser_1 = __importDefault(require("./tagsparser"));
const applicationParser_1 = __importDefault(require("./applicationParser"));
const statusObject_1 = require("../Objects/statusObject");
const accountsParser_1 = __importDefault(require("./accountsParser"));
function statusParser(obj, client) {
    let status = new statusObject_1.Status();
    if (obj == null)
        return;
    status.id = obj.id;
    status.uri = obj.uri;
    status.url = obj.url;
    status.account = accountsParser_1.default(obj.account);
    // status.inReplyToAccount status.inReplyToStatus <- add these 2 later 
    status.rebloggedStatus = statusParser(obj.reblog, client);
    status.content = obj.content;
    status.createdAt = Date.parse(obj.created_at);
    status.emojis = emojisParser_1.default(obj.emojis);
    status.repliesCount = obj.replies_count;
    status.reblogsCount = obj.reblogs_count;
    status.favouritesCount = obj.favourites_count;
    status.reblogged = obj.reblogged;
    status.favourited = obj.favourited;
    status.muted = obj.muted;
    status.sensetive = obj.sensetive;
    status.spoilerText = obj.spoiler_text;
    status.visibility = obj.visibility;
    status.attachments = attachmentsParser_1.default(obj.media_attachments);
    status.mentions = mentionsParser_1.default(obj.mentions);
    status.tags = tagsparser_1.default(obj.tags);
    status.application = applicationParser_1.default(obj.application);
    status.language = obj.language;
    status.pinned = obj.pinned;
    status.client = client;
    return status;
}
exports.default = statusParser;
