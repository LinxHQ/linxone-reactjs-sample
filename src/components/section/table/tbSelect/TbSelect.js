import React from 'react'
import './TbSelect.scss'

class TbSelect extends React.Component{

    onChangeOption = event => {
        this.props.onChangeOption(event.target.value)
    }

    render(){
        return(
            <div className="tbSelect">
                <span className="tbSelect_text">Show</span>
                <select className="tbSelect_active tbSelect_active-custom" onChange={this.onChangeOption}>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
                <span className="tbSelect_text">entries</span>
            </div>
        )
    }
}

export default TbSelect;