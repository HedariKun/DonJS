"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accountObject_1 = require("../Objects/accountObject");
const emojisParser_1 = __importDefault(require("./emojisParser"));
function accountParser(obj) {
    let account = new accountObject_1.Account();
    account.id = obj.id;
    account.username = obj.username;
    account.domain = obj.acct;
    account.locked = obj.locked;
    account.createdAt = Date.parse(obj.created_at);
    account.followersCount = obj.followers_count;
    account.followingCount = obj.following_count;
    account.statusesCount = obj.statuses_count;
    account.note = obj.note;
    account.url = obj.url;
    account.avatar = obj.avatar;
    account.avatarStatic = obj.avatar_static;
    account.headerImage = obj.header;
    account.headerStatic = obj.header_static;
    account.emojis = emojisParser_1.default(obj.emojis);
    account.bot = obj.bot;
    return account;
}
exports.default = accountParser;
