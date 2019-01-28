"use strict";

const Client = require("./src/client");

function Mastodon(token, apiUrl) {
    return new Client(token, apiUrl);
}
Mastodon.Client = Client;
Mastodon.Account = require("./src/entities/account");
Mastodon.Application = require("./src/entities/application");
Mastodon.Attachment = require("./src/entities/attachment");
Mastodon.Card = require("./src/entities/card");
Mastodon.Context = require("./src/entities/context");
Mastodon.Emoji = require("./src/entities/emoji");
Mastodon.Field = require("./src/entities/field");
Mastodon.History = require("./src/entities/history");
Mastodon.Mention = require("./src/entities/mention");
Mastodon.Notification = require("./src/entities/notification");
Mastodon.Report = require("./src/entities/report");
Mastodon.Status = require("./src/entities/status");
Mastodon.Tag = require("./src/entities/tag");

module.exports = Mastodon;
