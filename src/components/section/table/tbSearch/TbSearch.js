import React from 'react'
import './TbSearch.scss'

class TbSearch extends React.Component{

    onSearchData = e => {
        this.props.onSearchData(e.target.value)
    }

    render(){
        return(
            <div className="tbSearch">
                <span className="tbSearch_text">Search:</span>
                <input type="text" className="tbSearch_input" onChange={this.onSearchData} />
            </div>
        )
    }
}

export default TbSearch;