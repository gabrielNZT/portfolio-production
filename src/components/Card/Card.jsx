import PropTypes from "prop-types";
import "./style.css";

function Card({ effect, src, alt, text }) {

    return (
        <div className="card_container">
            <img className={`card_container_image ${effect}`} src={src} alt={alt} />
            {text && (
                <p> {text} </p>
            )}
        </div>
    );
}

Card.propTypes = {
    effect: PropTypes.oneOf(['maskHover']),
    src: PropTypes.string,
    alt: PropTypes.string,
    text: PropTypes.string
}

export default Card;