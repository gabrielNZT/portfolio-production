import { GithubOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";
import "./style.css";

const MidiaLinks = () => {
    const openNewGuide = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div className="layout_header_midiaLinks_container">
            <InstagramOutlined title="Instagram" className="instagram" onClick={() => openNewGuide('https://www.instagram.com/gabriel_nzt/')} />
            <LinkedinOutlined title="Linkedin" className="linkedin" onClick={() => openNewGuide('https://www.linkedin.com/in/vitor-gabriel-cesarino-232300200/')} />
            <GithubOutlined title="GitHub" className="github" onClick={() => openNewGuide('https://github.com/gabrielNZT')} />
        </div>
    );
}

export default MidiaLinks;