import { useReducer } from '@hooks';
import { Language } from '@models';

export const useTranslation = () => {
	const { state } = useReducer('universal', 'app');
	const { language } = state;

	const t = (content = '') => {
		const translateFile = Language.supported[language]?.translateFile;
		if (translateFile && translateFile[content]) return translateFile[content];
		return content;
	};

	return { t };
};
