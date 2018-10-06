import IAccount from "../Interfaces/Iaccount";
import { Account } from "../Objects/accountObject";
import emojisParser from "./emojisParser";

export default function accountParser(obj : any) : IAccount {
    let account : IAccount = new Account();
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
    account.emojis = emojisParser(obj.emojis);
    account.bot = obj.bot
    return account;
}