import * as RNLocalize from 'react-native-localize';
import { I18n } from 'i18n-js';
import en from './translations/en.json';
import es from './translations/es.json';

const i18n = new I18n({ en, es });
i18n.enableFallback = true;
i18n.defaultLocale = 'en';

export const setI18nConfig = () => {
    const fallback = { languageTag: 'en' };
    const { languageTag } =
        RNLocalize.findBestLanguageTag(['en', 'es']) ?? fallback;
    i18n.locale = languageTag;
};

export default i18n;
