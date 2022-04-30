import { prototypes } from '@utils';

export class Convert {
	//
	static faDigitToEn = (str = '') => {
		return str.replace(/[۰-۹]/g, (num) => prototypes.persianDigitProtoType[num]);
	};
}
