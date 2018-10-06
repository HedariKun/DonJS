import IStatus from "../Interfaces/istatus";
import IAccount from "../Interfaces/Iaccount";
import IEmoji from "../Interfaces/iemoji";
import IAttachment from "../Interfaces/iattachment";
import IMention from "../Interfaces/imention";
import ITag from "../Interfaces/itag";
import IApplication from "../Interfaces/iapplication";
import * as https from "https"
import { Mastodon } from "../bot";
import statusParser from "../Parsers/statusParser";
import { IStatusOption } from "../RequestInterfaces/POST/IStatusPost";
import { CreateStatus } from "../Requests/createStatus";

export class Status implements IStatus {
    id : number;
    uri : string;
    url : string;
    account : IAccount; 
    inReplyToAccount : IAccount;
    inReplyToStatus : IStatus;
    // inReplyToAccount inReplyToStatus <- add them later 
    rebloggedStatus : IStatus;
    content : string;
    createdAt : number;
    emojis : IEmoji[];
    repliesCount : number;
    reblogsCount : number;
    favouritesCount : number;
    reblogged : boolean;
    favourited : boolean;
    muted : boolean;
    sensetive : boolean;
    spoilerText : string;
    visibility : string;
    attachments : IAttachment[];
    mentions : IMention[];
    tags : ITag[];
    application : IApplication;
    language : string;
    pinned : boolean;
    client : Mastodon;

    constructor(){
        
    }

    deleteStatus(){
        let options = {
            host: this.client.config.APIUrl,
            path: `/api/v1/statuses/${this.id}`,
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.client.config.accessToken}`
            }
        }

        let req = https.request(options);
        req.end();
    }

    reblogStatus(reblog : boolean = true) : Promise<IStatus>{
        return statusPropertyPost(this.id, "reblog", reblog, this.client);
    }

    favouriteStatus(favourite : boolean = true) : Promise<IStatus>{
        return statusPropertyPost(this.id, "favourite", favourite, this.client);
    }

    pinStatus(pin : boolean = true) : Promise<IStatus>{
        return statusPropertyPost(this.id, "pin", pin, this.client);
    }

    muteStatus(mute : boolean = true) : Promise<IStatus>{
        return statusPropertyPost(this.id, "mute", mute, this.client);
    }

    reply(options : IStatusOption) : Promise<IStatus>{
        return CreateStatus(options, this.client, this.id);
    }

}

function statusPropertyPost(id : number, event : string, value : boolean, client : Mastodon) : Promise<IStatus>{
    return new Promise((resolve, reject) => {
        let options = {
            host: client.config.APIUrl,
            path: `/api/v1/statuses/${id}/${value ? event : "un"+event}`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${client.config.accessToken}`
            }
        }

        let req = https.request(options, res => {
            let data = "";
            res.on("data", chunk => {
                data += chunk;
            })

            res.on("end", () => {
                resolve(statusParser(JSON.parse(data), client));
            });

            res.on("error", err => {
                reject(err);
            })

        });
        req.write("");
        req.end();
    });
}