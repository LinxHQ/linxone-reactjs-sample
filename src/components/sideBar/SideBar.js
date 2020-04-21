import React from "react"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaughWink, faTachometerAlt, faCog, faWrench, faFolder, faChartArea, faTable, faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import ItemMenu from "./itemMenu/ItemMenu"
import './SideBar.scss'
import {connect} from 'react-redux'

class SideBar extends React.Component {

    render() {

        const { changeSidebar } = this.props;

        const dataMenu = [
            {
                cardMenu: [
                    {
                        itemName: "Dashboard",
                        icon: faTachometerAlt,
                        to: "/dashboard"
                    }
                ]
            },
            {
                card: "INTERFACE",
                cardMenu: [
                    {
                        id: 1,
                        itemName: "Components",
                        icon: faCog,
                    },
                    {
                        itemName: "Utilites",
                        icon: faWrench
                    }
                ]
            },
            {
                card: "ADDONS",
                cardMenu: [
                    {
                        itemName: "Pages",
                        icon: faFolder
                    },
                    {
                        itemName: "Charts",
                        icon: faChartArea,
                        to: "/charts"
                    },
                    {
                        itemName: "Tables",
                        icon: faTable,
                        to: "/tables"
                    }
                ]
            }
        ]

        return (
            <div className={`sideBar ${changeSidebar ? "custom" : ""}`}>
                <div className="sideBar_title">
                    <Link to="/index" className="sideBar_title-active">
                        <FontAwesomeIcon icon={faLaughWink} />
                        <p>sb admin<sup>2</sup></p>
                    </Link>
                </div>
                
                <div className="menuSidebar">
                    {
                        dataMenu.map( (item, i) => 
                            <div className="cardMenu" key={i}>
                                {item.card && <h5 className="cardMenu_title">{item.card}</h5>}
                                <ul className="cardMenu_item">
                                    {
                                        item.cardMenu.map( (itemMenu, i) => 
                                            <ItemMenu key={i} itemMenu={itemMenu}  />
                                        )
                                    }
                                </ul>
                            </div>
                        )
                    }
                </div>
                
                <button className="iconZoom_btn" onClick={this.props.onChangeSidebar}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        changeSidebar: state.changeSidebar
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onChangeSidebar: () => dispatch({type: "CHANGE_SIDEBAR"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);