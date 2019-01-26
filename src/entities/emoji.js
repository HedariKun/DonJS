class Emoji {
    constructor(data) {
        this.shortcode = data.shortcode;
        this.staticUrl = data.static_url;
        this.url = data.url;
        this.visibleInPicker = data.visibleInPicker;
    }
}

module.exports = Emoji;