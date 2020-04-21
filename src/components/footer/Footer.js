import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import "./Footer.scss"

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <span className="footer_text">Copyright &copy; Your Website 2019</span>
                <button className="footer_btnTop">
                    <FontAwesomeIcon icon={faAngleUp} />
                </button>
            </div>
        )
    }
}

export default Footer;