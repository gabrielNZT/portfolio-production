import PropTypes from "prop-types";
import { useState } from "react";

import { en_US, es_ES, pt_BR } from "../constants";
import { LanguageContext } from "../contexts/LanguageContext";

function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(pt_BR);
    console.log('render')
    const changeLanguage = (code) => {
        const validLanguages = {
            [pt_BR]: pt_BR,
            [es_ES]: es_ES,
            [en_US]: en_US
        };

        if (!validLanguages[code]) throw 'invalid language code';
        setLanguage(code);
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }} >
            {children}
        </LanguageContext.Provider>
    );
}

LanguageProvider.propTypes = {
    children: PropTypes.element
}; 

export default LanguageProvider;