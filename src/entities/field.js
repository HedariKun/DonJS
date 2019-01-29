class Field {
	constructor(data) {
		this.name = data.name;
		this.value = data.value;
		this.verifiedAt = data.verified_at;
	}
}

module.exports = Field;
