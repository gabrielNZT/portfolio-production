import PropTypes from "prop-types";
import "./style.css";

function Section({ children, className }) {
    return (
        <div className={`section_container ${className ?? ''}`}>
            {children}
        </div>
    );
}

Section.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string
}

export default Section;