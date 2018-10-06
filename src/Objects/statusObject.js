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
const https = __importStar(require("https"));
const statusParser_1 = __importDefault(require("../Parsers/statusParser"));
const createStatus_1 = require("../Requests/createStatus");
class Status {
    constructor() {
    }
    deleteStatus() {
        let options = {
            host: this.client.config.APIUrl,
            path: `/api/v1/statuses/${this.id}`,
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.client.config.accessToken}`
            }
        };
        let req = https.request(options);
        req.end();
    }
    reblogStatus(reblog = true) {
        return statusPropertyPost(this.id, "reblog", reblog, this.client);
    }
    favouriteStatus(favourite = true) {
        return statusPropertyPost(this.id, "favourite", favourite, this.client);
    }
    pinStatus(pin = true) {
        return statusPropertyPost(this.id, "pin", pin, this.client);
    }
    muteStatus(mute = true) {
        return statusPropertyPost(this.id, "mute", mute, this.client);
    }
    reply(options) {
        return createStatus_1.CreateStatus(options, this.client, this.id);
    }
}
exports.Status = Status;
function statusPropertyPost(id, event, value, client) {
    return new Promise((resolve, reject) => {
        let options = {
            host: client.config.APIUrl,
            path: `/api/v1/statuses/${id}/${value ? event : "un" + event}`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${client.config.accessToken}`
            }
        };
        let req = https.request(options, res => {
            let data = "";
            res.on("data", chunk => {
                data += chunk;
            });
            res.on("end", () => {
                resolve(statusParser_1.default(JSON.parse(data), client));
            });
            res.on("error", err => {
                reject(err);
            });
        });
        req.write("");
        req.end();
    });
}
