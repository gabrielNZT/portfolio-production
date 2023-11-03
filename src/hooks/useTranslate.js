import { useContext } from "react";

import { LanguageContext } from "../contexts/LanguageContext";
import getTranslate from "../i118/getTranslate";

export default function useTranslate() {
    const { language, changeLanguage } = useContext(LanguageContext);

    return {
        changeLanguage, translate: (code) => getTranslate(code, language), language
    };
}