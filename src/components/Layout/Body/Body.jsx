import PropTypes from "prop-types";
import './style.css';

function Body ({ children }) {
    return (
        <>
            {children}
        </>
    );
}

Body.propTypes = {
    children: PropTypes.element
}

export default Body;