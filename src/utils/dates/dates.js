import { Convert, prototypes } from '@utils';

export class Dates {
	//
	static jalaaliNow = (
		mode = { standard: true, standardDate: false, standardTime: false, numericDate: false, object: false },
	) => {
		const date = new Date();
		const standardDateJalaali = Convert.faDigitToEn(date.toLocaleDateString('fa-IR'));
		const standardTimeJalaali = Convert.faDigitToEn(date.toLocaleTimeString('fa-IR'));
		const standardJalaali = `${standardDateJalaali} ${standardTimeJalaali}`;

		let [Y, M, D] = [
			standardDateJalaali.match(/^\d{4}/)[0],
			standardDateJalaali.match(/\/\d{1,2}\//)[0].replace(/\//g, ''),
			standardDateJalaali.match(/\/\d{1,2}$/)[0].replace(/\//g, ''),
		];

		const year = Y;
		const month = M.length === 2 ? M : 0 + M;
		const day = D.length === 2 ? D : 0 + D;

		switch (true) {
			case mode?.standard:
				return standardJalaali;

			case mode?.standardDate:
				return standardDateJalaali;

			case mode?.standardTime:
				return standardTimeJalaali;

			case mode?.numericDate:
				return Number(year + month + day);

			case mode?.object:
				return {
					standardJalaali,
					standardDateJalaali,
					standardTimeJalaali,
					year,
					month,
					day,
					monthName: prototypes.monthProtoType[Number(month)],
					dayName: prototypes.weekProtoType[date.getDay()],
				};

			default:
				return standardJalaali;
		}
	};
}
