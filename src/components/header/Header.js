import React from "react"
import { faBell, faEnvelope, faSearch, faBars, faUser, faCogs, faList, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import "./Header.scss"
import AlertIcon from "./alertIcon/AlertIcon"
import MesIcon from './mesIcon/MesIcon'
import SearchForm from './searchForm/SearchForm'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showUserSetting: false,
            showSearchForm: false,
        }
    }

    handleClickOutside = (e) => {
        const eAlert = document.getElementsByClassName('alertIcon')[0];
        const eMessage = document.getElementsByClassName('messIcon')[0];
        const eUser = document.getElementsByClassName('header_right_user')[0];
        if (eAlert && !eAlert.contains(e.target)) {
            if (this.props.showAlert) {
                this.props.onShowAlert();
            }
        }
        if (eMessage && !eMessage.contains(e.target)) {
            if (this.props.showMessage) {
                this.props.onShowMessage();
            }
        }
        if (eUser && !eUser.contains(e.target)) {
            if (this.state.showUserSetting) {
                this.setState({
                    showUserSetting: !this.state.showUserSetting
                })
            }
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown');
    }

    onShowUserSetting = () => {
        this.setState({
            showUserSetting: !this.state.showUserSetting
        })
    }
    onShowDropMes = () => {
        this.props.onShowMessage();
    }
    onShowDropAlert = () => {
        this.props.onShowAlert();
    }
    onShowSearch = () => {
        this.setState({
            onShowSearch: !this.state.onShowSearch
        })
    }

    render() {

        const { showAlert, showMessage } = this.props;
        const { onShowSearch } = this.state;

        return (
            <div className="header">
                <span className="header_showmenu" onClick={this.props.onChangeSidebar}>
                    <FontAwesomeIcon icon={faBars} />
                </span>
                <SearchForm className={onShowSearch ? "show_searchform" : ""} />
                <div className="header_right">
                    <div className="header_right_alert">
                        <span className="header_right_alert_iconSearch" onClick={this.onShowSearch}>
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <AlertIcon icon={faBell} numAlert="3+" className={showAlert ? "show_alert" : ""} onShowDropAlert={this.onShowDropAlert} />
                        <MesIcon icon={faEnvelope} numAlert="7" className={showMessage ? "show_message" : ""} onShowDropMes={this.onShowDropMes} />
                    </div>
                    <div className="header_right_user">
                        <span className="header_right_user--layout" onClick={this.onShowUserSetting}>
                            <span>Valeria Luna</span>
                            <img src='/imgs/photo.jpg' alt="avatar" />
                        </span>
                        <div className={`header_right_user--menu ${this.state.showUserSetting ? "show_user" : ""}`}>
                            <ul>
                                <li className="header_right_user--menu--item">
                                    <Link to="/profile">
                                        <span><FontAwesomeIcon icon={faUser} /></span>
                                        <span>Profile</span>
                                    </Link>
                                </li>
                                <li className="header_right_user--menu--item">
                                    <Link to="/settings">
                                        <span><FontAwesomeIcon icon={faCogs} /></span>
                                        <span>Settings</span>
                                    </Link>
                                </li>
                                <li className="header_right_user--menu--item">
                                    <Link to="/activities">
                                        <span><FontAwesomeIcon icon={faList} /></span>
                                        <span>Activities Log</span>
                                    </Link>
                                </li>
                                <li className="header_right_user--menu--item">
                                    <Link to="/logout">
                                        <span><FontAwesomeIcon icon={faSignOutAlt} /></span>
                                        <span>Logout</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        showAlert: state.showAlert,
        showMessage: state.showMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeSidebar: () => dispatch({ type: "CHANGE_SIDEBAR" }),
        onShowAlert: () => dispatch({ type: "SHOW_ALERT" }),
        onShowMessage: () => dispatch({ type: "SHOW_MESSAGE" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);