export class Stack {
	constructor(initalValues = []) {
		this.items = initalValues;
	}

	push = (value) => {
		this.items.push(value);
	};

	pop = () => {
		return this.items.pop();
	};

	toArray = () => {
		return this.items;
	};
}
