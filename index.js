"use strict";

const Client = require("./src/client");

function Mastodon(token, apiUrl) {
    return new Client(token, apiUrl);
}

Mastodon.Status = require("./src/entities/status");
Mastodon.Account = require("./src/entities/account");

module.exports = Mastodon;
