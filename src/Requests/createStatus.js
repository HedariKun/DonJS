"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("https"));
const statusParser_1 = __importDefault(require("../Parsers/statusParser"));
function CreateStatus(Options, client, InReplyToId = null) {
    return new Promise((resolve, reject) => {
        const PostData = JSON.stringify({
            "status": Options.Status,
            "in_reply_to_id": InReplyToId,
            "media_ids": Options.MediaIds,
            "sensitive": Options.NSFW,
            "spoiler_text": Options.SpoilerText,
            "visibility": Options.visibility,
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
        };
        let responseString = "";
        let req = http.request(options, res => {
            res.on("data", (data) => {
                responseString += data;
            });
            res.on("end", () => {
                resolve(statusParser_1.default(JSON.parse(responseString), client));
            });
            res.on("error", err => {
                reject(err);
            });
        });
        req.write(PostData);
        req.end();
    });
}
exports.CreateStatus = CreateStatus;
