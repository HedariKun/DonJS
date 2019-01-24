const Emoji = require("./emoji"),
      Relationship = require("./relationship")
      axios = require("axios");

class Account {
    constructor(data) {
        this.id = data.id;
        this.username = data.username;
        this.acct = data.acct;
        this.displayName = data.display_name;
        this.locked = data.locked;
        this.createdAt = data.createdAt;
        this.followersCount = data.followers_count;
        this.followingCount = data.following_count;
        this.statusesCount = data.statuses_count;
        this.note = data.note;
        this.url = data.url;
        this.avatar = data.avatar;
        this.avatarStatic = data.avatar_static;
        this.header = data.header;
        this.headerStatic = data.header_static;
        this.emojis = [];
        for (const emoji in data.emojis) {
            this.emojis.push(new Emoji(emoji));
        }
        this.moved = data.moved;
        this.fields = data.fields;
        this.bot = data.bot;
    }
    

    async getFollowers(limit = 40) {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "GET",
            url: `${instance.apiURL}/api/v1/accounts/${this.id}/followers?limit=${limit}`,
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const account = await axios(request);
            return account.data.map(x => new Account(x));
        } catch (expect) {
            throw expect;
        }
    }

    async getFollowing(limit = 40) {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "GET",
            url: `${instance.apiURL}/api/v1/accounts/${this.id}/following?limit=${limit}`,
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const account = await axios(request);
            return account.data.map(x => new Account(x));
        } catch (expect) {
            throw expect;
        }
    }

    async getStatuses(limit = 20, mediaOnly=false, pinned=false, excludeReply=false) {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "GET",
            url: `${instance.apiURL}/api/v1/accounts/${this.id}/statuses?limit=${limit}&only_media=${mediaOnly}&pinned=${pinned}&exclude_replies=${excludeReply}`,
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const status = await axios(request);
            return status.data.map(x => new (require("./status")).Status(x));
        } catch (expect) {
            throw expect;
        }
    }

    async followAccount(showReblog = false) {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "POST",
            url: `${instance.apiURL}/api/v1/accounts/${this.id}/follow`,
            data: {reblogs: showReblog},
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const relationship = await axios(request);
            return new Relationship(relationship.data);
        } catch (expect) {
            throw expect;
        }
    }
    
    async unfollowAccount() {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "POST",
            url: `${instance.apiURL}/api/v1/accounts/${this.id}/unfollow`,
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const relationship = await axios(request);
            return new Relationship(relationship.data);
        } catch (expect) {
            throw expect;
        }
    }

    async blockAccount() {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "POST",
            url: `${instance.apiURL}/api/v1/accounts/${this.id}/block`,
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const relationship = await axios(request);
            return new Relationship(relationship.data);
        } catch (expect) {
            throw expect;
        }
    }

    async unblockAccount() {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "POST",
            url: `${instance.apiURL}/api/v1/accounts/${this.id}/unblock`,
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const relationship = await axios(request);
            return new Relationship(relationship.data);
        } catch (expect) {
            throw expect;
        }
    }

    async endorsingAccount() {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "POST",
            url: `${instance.apiURL}/api/v1/accounts/${this.id}/pin`,
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const relationship = await axios(request);
            return new Relationship(relationship.data);
        } catch (expect) {
            throw expect;
        }
    }

    async unendorsingAccount() {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "POST",
            url: `${instance.apiURL}/api/v1/accounts/${this.id}/unpin`,
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const relationship = await axios(request);
            return new Relationship(relationship.data);
        } catch (expect) {
            throw expect;
        }
    }

    async muteAccount (muteNotification=true) {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "POST",
            url: `${instance.apiURL}/api/v1/accounts/${this.id}/mute`,
            data: {notifications: muteNotification},
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const relationship = await axios(request);
            return new Relationship(relationship.data);
        } catch (expect) {
            throw expect;
        }
    }

    async unmuteAccount () {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "POST",
            url: `${instance.apiURL}/api/v1/accounts/${this.id}/unmute`,
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const relationship = await axios(request);
            return new Relationship(relationship.data);
        } catch (expect) {
            throw expect;
        }
    }

    async getRelationship() {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "GET",
            url: `${instance.apiURL}/api/v1/accounts/relationships`,
            data: {id: this.id},
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const relationships = await axios(request);
            return relationships.data[0] == null ? null : new Relationship(relationships.data[0]);
        } catch (expect) {
            throw expect;
        }
    }

}

module.exports = Account;
