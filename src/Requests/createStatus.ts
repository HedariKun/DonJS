import { IStatusOption } from "../RequestInterfaces/POST/IStatusPost";
import * as http from "https";
import IStatus from "../Interfaces/istatus";
import statusParser from "../Parsers/statusParser";
import { Mastodon } from "../bot";

export function CreateStatus(Options: IStatusOption, client : Mastodon, InReplyToId : number = null) : Promise<IStatus> {
   
    
    return new Promise<IStatus>((resolve, reject) => {
        const PostData = JSON.stringify({
            "status" : Options.Status,
            "in_reply_to_id" : InReplyToId,
            "media_ids": Options.MediaIds,
            "sensitive": Options.NSFW,
            "spoiler_text": Options.SpoilerText,
            "visibility" : Options.visibility,
            "language": Options.language
         });
    
        const options = {
            host: client.config.APIUrl,
            path: "/api/v1/statuses",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${client.config.accessToken}`
            }
        }
    
        let responseString = "";
        let req = http.request(options, res => {
    
            res.on("data", (data) => {
                responseString += data;
            });
    
            res.on("end", () => {
                resolve(statusParser(JSON.parse(responseString), client));
            });

            res.on("error", err => {
                reject(err);
            });
    
        })
    
         req.write(PostData);
         req.end();
    });

}
