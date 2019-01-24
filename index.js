"use strict";

const Client = require("./src/client");

function Mastodon(apiUrl, token) {
    return new Client({apiUrl, token});
}

Mastodon.Status = require("./src/entities/status");
Mastodon.Account = require("./src/entities/account");

module.exports = Mastodon;
