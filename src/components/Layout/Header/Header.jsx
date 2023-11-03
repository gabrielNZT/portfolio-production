import { Logo, Navigation } from "./";
import { SelectLanguage } from "../../";

import './style.css';

const Header = () => {
    return (
        <div className="layout_header_container">
            <Logo />
            <Navigation />
            <SelectLanguage />
        </div>
    );
}

export default Header;