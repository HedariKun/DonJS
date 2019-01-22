const axios = require("axios");
const {Status} = require("./objects/status");
const {Account} = require("./objects/account");

let instance;

class Mastodon {
    constructor(config) {
        this.apiURL = config.apiURL;
        this.token = config.token;
        instance = this;
    }

    static getInstance() {
        return instance;
    }

    async sendStatus(status, sensitive = false, spoiler = false) {
        const request = {
            method: "POST",
            url: `${this.apiURL}/api/v1/statuses`,
            data: {status, sensitive, spoiler_text: spoiler},
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        }
        try {
            const status = await axios(request);
            return new Status(status.data);
        } catch (expect) {
            throw expect;
        }
    }

    async getClientAccount() {
        const request = {
            method: "GET",
            url: `${this.apiURL}/api/v1/accounts/verify_credentials`,
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        }
        try {
            const account = await axios(request);
            return new Account(account.data);
        } catch (expect) {
            throw expect;
        }
    }

    async followAccount(uri) {
        const request = {
            method: "POST",
            url: `${this.apiURL}/api/v1/follows`,
            data: {uri},
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        }
        try {
            const account = await axios(request);
            return new Account(account.data);
        } catch (expect) {
            throw expect;
        }
    } 
}

module.exports = {
    Mastodon,
    something: "hello"
}