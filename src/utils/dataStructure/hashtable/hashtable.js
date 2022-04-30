export class HashTable {
	constructor(size = 1000) {
		this.size = size;
		this.items = Array(this.size).fill(null);
	}

	hash = (key) => {
		let hashedIndex = 0;

		for (const char of key) {
			hashedIndex += char.charCodeAt(0);
		}

		return hashedIndex % this.size;
	};

	set = (key, value) => {
		const keyHash = this.hash(key);

		this.items[keyHash] = value;
	};

	get = (key) => {
		const keyHash = this.hash(key);

		return this.items[keyHash];
	};
}
