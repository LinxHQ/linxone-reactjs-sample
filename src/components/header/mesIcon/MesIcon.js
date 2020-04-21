import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MesIcon.scss'

class MesIcon extends React.Component {

    onShowDropMes = () => {
        this.props.onShowDropMes()
    }

    render() {

        const dataMess = [
            {
                to: "/mess",
                avt: '/imgs/avt.jpg',
                mess: 'Hi there, I am wondering if you have a car, can you to me borrow it',
                user: 'Emily Fowler',
                time: '58m',
                status: "active" 
            },
            {
                to: "/mess",
                avt: '/imgs/avt.jpg',
                mess: 'Hi there, I am wondering if you have a car, can you to me borrow it',
                user: 'Emily Fowler',
                time: '58m',
                status: "away" 
            },
            {
                to: "/mess",
                avt: '/imgs/avt.jpg',
                mess: 'Hi there, I am wondering if you have a car, can you to me borrow it',
                user: 'Emily Fowler',
                time: '58m',
                status: "invisible" 
            },
            {
                to: "/mess",
                avt: '/imgs/avt.jpg',
                mess: 'Hi there, I am wondering if you have a car, can you to me borrow it',
                user: 'Emily Fowler',
                time: '58m',
                status: "active" 
            },
        ]

        return (
            <span className="messIcon">
                <FontAwesomeIcon icon={this.props.icon} className="alertIcon_icon" onClick={this.onShowDropMes} />
                <span className="alertIcon_val">{this.props.numAlert}</span>
                <div className={`alertIcon_dropdown ${this.props.className}`}>
                    <h6 className="alertIcon_dropdown-top">alerts center</h6>
                    <ul className="dropdown">
                        {
                            dataMess.map((item, i) => (
                                <li key={i} className="dropdown_item">
                                    <Link to={item.to}>
                                        <div className={`dropdown_circle_avat ${item.status}`}>
                                            <img src={item.avt} alt="avt" />
                                        </div>
                                        <div className="dropdown_message">
                                            <p>{item.mess}</p>
                                            <small>{item.user + " . " + item.time}</small>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <h6 className="alertIcon_dropdown-bot">Read more Messages</h6>
                </div>
            </span>
        )
    }
}

export default MesIcon;