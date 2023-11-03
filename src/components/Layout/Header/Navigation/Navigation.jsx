import useTranslate from "../../../../hooks/useTranslate";
import "./style.css";

const Navigation = () => {
    const { translate } = useTranslate();

    return (
        <div className="layout_header_navigation_container">
            <span> {translate('navigation.about_me')} </span>
            <span> {translate('navigation.experiences')} </span>
            <span> {translate('navigation.projects')} </span>
            <span> {translate('navigation.skills')} </span>
            <span> {translate('navigation.statistics')} </span>
        </div>
    );
};

export default Navigation;