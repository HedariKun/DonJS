class Card {
	constructor(data) {
		this.url = data.url;
		this.title = data.title;
		this.description = data.description;
		this.image = data.image;
		this.type = data.type;
		this.authorName = data.author_name;
		this.authorUrl = data.author_url;
		this.providerName = data.provider_name;
		this.providerUrl = data.provider_url;
		this.html = data.html;
		this.width = data.width;
		this.height = data.height;
	}
}

module.exports = Card;
