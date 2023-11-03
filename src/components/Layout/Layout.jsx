import PropTypes from 'prop-types';

import Body from "./Body/Body.jsx";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";

import "./style.css";

function Layout({ children }) {
    return (
        <>
            <Header />
            <Body>
                {children}
            </Body>
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.element
}

export default Layout