export class Storage {
	static setItem = (name = '', item, stringify = false) => {
		if (!item || !name) return;
		localStorage.setItem(name, stringify ? JSON.stringify(item) : item);
	};

	static getItem = (name = '', parse = false) => {
		try {
			if (!name) return null;
			const item = localStorage.getItem(name);
			if (!item) return null;
			return parse ? JSON.parse(item) : item;
		} catch (err) {
			return null;
		}
	};

	static deleteItem = (name = '') => {
		if (!name) return null;
		return localStorage.deleteItem(name);
	};

	static logout = (redirectTo = '') => {
		localStorage.removeItem('token');
		localStorage.removeItem('_account');
		localStorage.removeItem('token-expired-time');
		if (redirectTo) location.replace(redirectTo);
	};
}
