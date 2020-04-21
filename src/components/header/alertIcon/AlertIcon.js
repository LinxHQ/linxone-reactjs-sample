import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faDonate, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import './AlertIcon.scss'

class AlertIcon extends React.Component {

    onShowDropAlert = () => {
        this.props.onShowDropAlert()
    }

    render() {

        const dataAlert = [
            {
                to: "/alert",
                icon: faFileAlt,
                date: "December 12, 2019",
                name: "A new monthly report is ready to download",
                bgColor: "#4e73df"
            },
            {
                to: "/alert",
                icon: faDonate,
                date: "December 12, 2019",
                name: "A new monthly report is ready to download",
                bgColor: "#1cc88a"
            },
            {
                to: "/alert",
                icon: faExclamationTriangle,
                date: "December 12, 2019",
                name: "A new monthly report is ready to download",
                bgColor: "#f6c23e"
            }
        ]

        return (
            <span className="alertIcon">
                <FontAwesomeIcon icon={this.props.icon} className="alertIcon_icon" onClick={this.onShowDropAlert} />
                <span className="alertIcon_val">{this.props.numAlert}</span>
                <div className={`alertIcon_dropdown ${this.props.className}`}>
                    <h6 className="alertIcon_dropdown-top">alerts center</h6>
                    <ul className="dropdown">
                        {
                            dataAlert.map((item, i) => (
                                <li key={i} className="dropdown_item">
                                    <Link to={item.to}>
                                        <div className="dropdown_circle_icon" style={{ backgroundColor: item.bgColor }}>
                                            <FontAwesomeIcon icon={item.icon} />
                                        </div>
                                        <div className="dropdown_content">
                                            <small>{item.date}</small>
                                            <p>{item.name}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <h6 className="alertIcon_dropdown-bot">Show all Alerts</h6>
                </div>
            </span>
        )
    }
}

export default AlertIcon;