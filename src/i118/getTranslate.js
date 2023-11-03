import EN from "./en-US";
import ES from "./es-ES";
import BR from "./pt-BR";

const translations = {
    'pt-BR': BR,
    'en-US': EN,
    'es-ES': ES,
};

export default function getTranslate(code, language) {
    const translation = translations[language];
    if (translation) {
        return translation[code] ?? code;
    } else {
        return code;
    }
}