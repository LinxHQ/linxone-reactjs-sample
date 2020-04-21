import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./SearchForm.scss"

class SearchForm extends React.Component {

    onSubmit = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div className={`form_search ${this.props.className}`}>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="form_search-layout">
                        <input className="form_search_input" type="text" placeholder="Search for..." />
                        <button className="form_search_btn" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchForm;