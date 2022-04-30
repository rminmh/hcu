/* eslint-disable react-hooks/exhaustive-deps */

export const useFormValidation = (data = {}, config = { validationProperty: 'validation' }) => {
	const validationProperty = config?.validationProperty || 'validation';

	const invalidItems = Object.keys(data)
		.filter((key) => !data[key][validationProperty])
		.map((invalidKey) => ({ name: invalidKey, ...data[invalidKey] }));

	const validItems = Object.keys(data)
		.filter((key) => data[key][validationProperty])
		.map((validKey) => ({ name: validKey, ...data[validKey] }));

	const isValidForm = invalidItems.length === 0;

	return { validItems, invalidItems, isValidForm };
};

/* 	DATA FORMAT :
 		{
			name1: { validation: false, successMessage: 'ok', errorMessage: 'error' , ... },
			name2: { validation: false, successMessage: 'ok', errorMessage: 'error' , ... },
		};
*/
