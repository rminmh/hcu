export class Queue {
	constructor(initialValues = []) {
		this.items = initialValues;
	}

	enqueue = (value) => {
		this.items.unshift(value);
	};

	dequeue = () => {
		this.items.pop();
	};
}
