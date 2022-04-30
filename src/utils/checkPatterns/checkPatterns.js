export class CheckPatterns {
	//
	static nationalNumber = (value = '') => {
		if (value.length !== 10) return false;

		if (value.length < 8 || parseInt(value, 10) === 0) return false;
		value = ('0000' + value).substr(value.length + 4 - 10);
		if (parseInt(value.substr(3, 6), 10) === 0) return false;
		let c = parseInt(value.substr(9, 1), 10);
		let s = 0;
		for (let i = 0; i < 9; i++) s += parseInt(value.substr(i, 1), 10) * (10 - i);
		s = s % 11;
		return (s < 2 && c === s) || (s >= 2 && c === 11 - s);
	};
}
