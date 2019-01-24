const Account = require("./account"),
      Emoji = require("./emoji"),
      Attachment = require("./attachment"),
      Mention = require("./mention"),
      Tag = require("./tag"),
      Application = require("./application"),
      Report = require("./report"),
      Context = require("./context"),
      Card = require("./card"),
      axios = require("axios");

class Status {
    constructor (data) {
        this.id = data.id;
        this.uri = data.uri;
        this.url = data.url;
        this.account = new Account(data.account);
        this.inReplyTo = data.in_reply_to_id;
        this.inReplyToAccount = data.in_reply_to_account_id;
        this.reblog = data.reblog == null? null : new Status(data.reblog);
        this.content = data.content;
        this.createdAt = data.createdAt;
        this.emojis = [];
        for (const emoji in data.emojis) {
            this.emojis.push(new Emoji(emoji));
        }
        this.repliesCount = data.replies_count;
        this.reblogsCount = data.reblogs_count;
        this.favouritesCount = data.favourites_count;
        this.reblogged = data.reblogged;
        this.favourited = data.favourited;
        this.muted = data.muted;
        this.sensitive = data.sensitive;
        this.spoilerText = data.spoiler_text;
        this.visibility = data.visibility;
        this.mediaAttachments = [];
        for (const at in data.media_attachments) {
            this.mediaAttachments.push(new Attachment(at));
        }
        this.mentions = [];
        for (const mention in data.mentions) {
            this.mention.push(new Mention(mention));
        }
        this.tags = [];
        for (const tag in data.tags) {
            this.tags.push(new Tag(tag));
        }
        this.application = new Application(data.application);
        this.language = data.language;
        this.pinned = data.pinned;
    }

    async reply(status, sensitive = false, spoiler=false) {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "POST",
            url: `${instance.apiURL}/api/v1/statuses`,
            data: {status, sensitive, spoiler_text: spoiler, in_reply_to_id:this.id},
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const status = await axios(request);
            return new Status(status.data);
        } catch (expect) {
            throw expect;
        }
    }

    async delete() {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "DELETE",
            url: `${instance.apiURL}/api/v1/statuses/${this.id}`,
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            await axios(request);
        } catch (expect) {
            throw expect;
        }
    }

    async reblogStatus() {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "POST",
            url: `${instance.apiURL}/api/v1/statuses/${this.id}/reblog`,
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const status = await axios(request);
            return new Status(status.data);
        } catch (expect) {
            throw expect;
        }
    }

    async unreblogStatus() {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "POST",
            url: `${instance.apiURL}/api/v1/statuses/${this.id}/unreblog`,
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const status = await axios(request);
            return new Status(status.data);
        } catch (expect) {
            throw expect;
        }
    }

    async favouriteStatus() {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "POST",
            url: `${instance.apiURL}/api/v1/statuses/${this.id}/favourite`,
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const status = await axios(request);
            return new Status(status.data);
        } catch (expect) {
            throw expect;
        }
    }

    async unfavouriteStatus() {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "POST",
            url: `${instance.apiURL}/api/v1/statuses/${this.id}/unfavourite`,
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const status = await axios(request);
            return new Status(status.data);
        } catch (expect) {
            throw expect;
        }
    }

    async pinStatus() {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "POST",
            url: `${instance.apiURL}/api/v1/statuses/${this.id}/pin`,
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const status = await axios(request);
            return new Status(status.data);
        } catch (expect) {
            throw expect;
        }
    }

    async unpingStatus() {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "POST",
            url: `${instance.apiURL}/api/v1/statuses/${this.id}/unpin`,
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const status = await axios(request);
            return new Status(status.data);
        } catch (expect) {
            throw expect;
        }
    }

    async muteStatus() {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "POST",
            url: `${instance.apiURL}/api/v1/statuses/${this.id}/mute`,
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const status = await axios(request);
            return new Status(status.data);
        } catch (expect) {
            throw expect;
        }
    }

    async unmuteStatus() {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "POST",
            url: `${instance.apiURL}/api/v1/statuses/${this.id}/unmute`,
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const status = await axios(request);
            return new Status(status.data);
        } catch (expect) {
            throw expect;
        }
    }

    async report(comment) {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "POST",
            url: `${instance.apiURL}/api/v1/reports`,
            data: {
                'account_id': this.account.id,
                'status_ids': [this.id],
                comment
            },
            headers: {
                'Authorization': `Bearer ${instance.token}`
            }
        }
        try {
            const report = await axios(request);
            return new Report(report.data);
        } catch (expect) {
            throw expect;
        }
    }

    async getContext() {
        const instance = require("../client").Mastodon.getInstance();
        const request = {
            method: "GET",
            url: `${instance.apiURL}/api/v1/statuses/${this.id}/context`
        }
        try {
            const context = await axios(request);
            return new Context(context.data);
        } catch(expect) {
            throw expect;
        }
    }
    
    async getCard() {
        const instance = require("../client").Mastodon.getInstance();

        const request = {
            method: "GET",
            url: `${instance.apiURL}/api/v1/statuses/${this.id}/card`
        }
        try {
            const card = await axios(request);
            return new Card(card.data);
        } catch(expect) {
            throw expect;
        }
    }

}

module.exports = Status;
