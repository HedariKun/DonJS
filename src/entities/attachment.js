class Attachment {
    constructor(data) {
        this.id = data.id;
        this.type = data.type;
        this.url = data.url;
        this.remoteUrl = data.url;
        this.previewUrl = data.preview_url;
        this.textUrl = data.text_url;
        this.meta = data.meta;
        this.description = data.description;
    }

    async update(description) {
        const instance = require("../client").getInstance();
        const form = new formData();
        form.append('description', description);
        const headers = form.getHeaders();
        headers['Authorization'] = `Bearer ${instance.token}`;
        const request = {
            method: "PUT",
            url: `${instance.apiUrl}/api/v1/media/${this.id}`,
            headers,
            data: form
        }
        try {
            const attachment = await axios(request);
            const na = new Attachment(attachment.data);
            this.id = na.id;
            this.typu = na.type;
            this.url = na.url;
            this.remoteUrl = na.remoteUrl;
            this.previewUrl = na.previewUrl;
            this.textUrl = na.textUrl;
            this.meta = na.meta;
            this.description = na.description;
            return na;
        } catch(expect) {
            throw expect;
        }
    }

}

module.exports = Attachment;
