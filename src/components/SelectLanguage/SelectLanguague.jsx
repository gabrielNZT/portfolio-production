import brasil from '../../assets/brazil.png';
import spain from '../../assets/spain.png';
import eua from '../../assets/united-states.png';
import { en_US, es_ES, pt_BR } from '../../constants';
import useTranslate from '../../hooks/useTranslate';

import "./style.css";

function SelectLanguage() {
    const { changeLanguage, language } = useTranslate();

    console.log(language);

    const handleChangeLanguage = (code) => {
        console.log(code)
        changeLanguage(code);
    }

    return (
        <div className='select_language_container'>
            <img alt={`brasil_flag`} onClick={() => handleChangeLanguage(pt_BR)} className={language !== pt_BR ? ' desactive' : ''} src={brasil} />
            <img alt={`eua_flag`} onClick={() => handleChangeLanguage(en_US)} className={language !== en_US ? ' desactive' : ''} src={eua} />
            <img alt={`spain_flag`} onClick={() => handleChangeLanguage(es_ES)} className={language !== es_ES ? ' desactive' : ''} src={spain} />
        </div>
    )
}

export default SelectLanguage; 