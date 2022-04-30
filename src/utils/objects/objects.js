export class Objects {
	//
	static map = (object = {}, cb = null) => {
		Object.keys(object).map((key, i) => cb && cb(key, object[key], i));
	};

	static toArray = (object = {}, keyProperty = 'key', valueProperty = 'value') => {
		const result = [];
		this.map(object, (key, item, i) => {
			result.push(valueProperty ? { [keyProperty]: key, [valueProperty]: item } : { [keyProperty]: key, ...item });
		});
		return result;
	};
}
