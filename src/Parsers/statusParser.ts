import IStatus from "../Interfaces/istatus";
import emojisParser from "./emojisParser";
import attachmentsParser from "./attachmentsParser";
import mentionsParser from "./mentionsParser";
import tagsParser from "./tagsparser";
import applicationParser from "./applicationParser";
import { Status } from "../Objects/statusObject";
import accountParser from "./accountsParser";
import { Mastodon } from "../bot";

export default function statusParser(obj : any, client : Mastodon) : IStatus{
    let status : IStatus = new Status();
    
    if(obj == null)
        return;

    status.id = obj.id;
    status.uri = obj.uri;
    status.url = obj.url;
    status.account = accountParser(obj.account);
    // status.inReplyToAccount status.inReplyToStatus <- add these 2 later 
    status.rebloggedStatus = statusParser(obj.reblog, client);
    status.content = obj.content;
    status.createdAt = Date.parse(obj.created_at);
    status.emojis = emojisParser(obj.emojis);
    status.repliesCount = obj.replies_count;
    status.reblogsCount = obj.reblogs_count;
    status.favouritesCount = obj.favourites_count;
    status.reblogged = obj.reblogged;
    status.favourited = obj.favourited;
    status.muted = obj.muted;
    status.sensetive = obj.sensetive;
    status.spoilerText = obj.spoiler_text;
    status.visibility = obj.visibility;
    status.attachments = attachmentsParser(obj.media_attachments);
    status.mentions = mentionsParser(obj.mentions);
    status.tags = tagsParser(obj.tags);
    status.application = applicationParser(obj.application);
    status.language = obj.language;
    status.pinned = obj.pinned;
    status.client = client;
    return status;
}