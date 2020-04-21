import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './ItemMenu.scss'

class ItemMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeSubmenu: false
        }
    }

    renderSubMenu = () => {
        const {itemMenu} = this.props
        const subMenu = [
            {
                id : 1,
                subMenuTitle: "CUSTOM COMPONENTS:",
                subMenuItem: [
                    {
                        name: "Buttons",
                        to: "/buttons"
                    },
                    {
                        name: "Cards",
                        to: "/cards"
                    }
                ]
            }
        ]
        const itemSubMenu = subMenu.find( item => item.id === itemMenu.id)
        if(itemSubMenu){
            return (
                <ul className={`submenu ${this.state.activeSubmenu ? "active" : ""}`} onClick={e => e.stopPropagation()}>
                    <h6 className="submenu_title">{itemSubMenu.subMenuTitle}</h6>
                    {
                        itemSubMenu.subMenuItem.map( (subMenuItem, i) => 
                            <li key={i} className="submenu_item">
                                <Link to={subMenuItem.to} className="submenu_item-active">{subMenuItem.name}</Link>
                            </li>
                        )
                    }
                </ul>
            )
        }
    }

    changeActiveSubmenu = () => {
        this.setState({
            activeSubmenu: !this.state.activeSubmenu
        })
    }

    render() {
        const {itemMenu} = this.props

        return (
                <li className="itemMenu" onClick={this.changeActiveSubmenu}>
                    <FontAwesomeIcon icon={itemMenu.icon} className="itemMenu_icon" />
                    <span className="itemMenu_name">{itemMenu.itemName}</span>
                    { !itemMenu.to && <FontAwesomeIcon icon={faAngleRight} className="itemMenu_arrow" />}
                    { itemMenu.to && <Link className="itemMenu_link" to={itemMenu.to} />}
                    { this.renderSubMenu() }
                </li>
            )
        }
    }
    
export default ItemMenu;