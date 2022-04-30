export class LinkedList {
	// format:  [ {value1 , next1} ,  {value2: {value2 ,{value1 , next1} }, next2 }  ,  { ... }  ]

	constructor() {
		this.head = null; // first element
		this.tail = null; // last element
	}

	append(value) {
		const newElement = { value: value, next: null };

		if (this.tail) {
			this.tail.next = newElement;
		}
		this.tail = newElement;

		if (!this.head) {
			this.head = newElement;
		}
	}

	prepend(value) {
		const newElement = { value: value, next: this.head };

		this.head = newElement;

		if (!this.tail) {
			this.tail = newElement;
		}
	}

	insertAfter(value, afterValue) {
		const existingElement = this.find(afterValue);

		if (existingElement) {
			const newElement = { value: value, next: existingElement.value };
			existingElement.next = newElement;
		}
	}

	find(value) {
		if (!this.head) {
			return;
		}

		let currentElement = this.head;

		while (currentElement) {
			if (currentElement.value === value) {
				return currentElement;
			}

			currentElement = currentElement.next;
		}

		return;
	}

	delete(value) {
		if (!this.head) {
			return;
		}

		while (this.head && this.head.value === value) {
			this.head = this.head.next;
		}

		let currentElement = this.head;

		while (currentElement.next) {
			if (currentElement.next.value === value) {
				currentElement.next = currentElement.next.next;
			} else {
				currentElement = currentElement.next;
			}
		}

		if (this.tail.value === value) {
			this.tail = currentElement;
		}
	}

	toArray() {
		const elements = [];

		let currentElement = this.head;

		while (currentElement) {
			elements.push(currentElement);
			currentElement = currentElement.next;
		}

		return elements;
	}
}
