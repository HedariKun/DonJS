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
}

module.exports = {
    Attachment
}