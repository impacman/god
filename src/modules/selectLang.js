import { currentLanguage, languages } from '../config.json';

const selectLang = (urlParts) => {
	const potentialLang = urlParts[urlParts.length - 1];
	const lang = languages.includes(potentialLang) ? potentialLang : currentLanguage;

	return lang;
};

export default selectLang;
