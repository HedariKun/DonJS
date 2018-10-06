import config from "./Interfaces/Iconfig";
import * as http from "http";
import * as querystring from "querystring";
import { EventEmitter } from "events";
import { IStatusOption } from "./RequestInterfaces/POST/IStatusPost";
import { CreateStatus } from "./Requests/createStatus";
import IStatus from "./Interfaces/istatus";

export class Mastodon extends EventEmitter {
  config: config;

  constructor(_config: config) {
    super();
    if (_config.APIUrl == null)
      _config.APIUrl = "https://mastodon.social/";
    this.config = _config;
  }

  SendToot(Options: IStatusOption) : Promise<IStatus> {
    return CreateStatus(Options, this);
  }
}
