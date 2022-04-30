export class Arrays {
	//
	static chunk = (array = [], size = 1) => {
		const result = [];
		for (let i = 0; i < array.length; i += size) {
			result.push(array.slice(i, i + size));
		}
		return result;
	};

	static findInObject = (array = [], property = '', value = true) => array.find((item) => item[property] === value) || null;

	static filterByNames = (array = [], value = '', properties = []) =>
		array.filter(
			(item) => !value || properties.find((name) => item[name] && String(item[name]).toLowerCase().includes(value.toLowerCase())),
		);

	static sortAlphabetically = (list = [], property = '', asc = true) =>
		list.sort((current = '', next = '') => {
			if (current[property] > next[property]) return asc ? 1 : -1;
			else if (current[property] < next[property]) return asc ? -1 : 1;
			else return 0;
		});
}
