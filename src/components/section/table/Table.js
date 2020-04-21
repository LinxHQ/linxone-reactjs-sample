import React from 'react'
import TbSelect from './tbSelect/TbSelect'
import TbSearch from './tbSearch/TbSearch'
import './Table.scss'
import TbData from './tbData/TbData'
import Pagination from "react-js-pagination";
import { connect } from 'react-redux'
import axios from 'axios'

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            perPage: 5,
            dataSort: [],
            dataPage: []
        };
    }

    componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/http://sit3.linxhq.com/linxone2/api/web/sales/sale-invoices', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer T2kiOZVnpEnmJpA0uJMMpHMvnksmS3Fo'
            }
        }).then(res => {
            this.props.fetchData(res.data.invoices)
            this.setState({
                dataSort: this.props.data
            })
            this.getDataPage()
        }).catch(err => {
            console.log(err)
        })
    }
    onDataSort = (type, value) => {
        if (value === "invoice number")
            value = "invoice_number"
        if (value === "invoice date")
            value = "invoice_date"
        if (value === "invoice status")
            value = "invoice_status_label"
        this.setState({
            dataSort: this.state.dataSort.sort((a, b) => {
                if (a[value] < b[value]) {
                    return type === 'asc' ? -1 : 1;
                }
                if (a[value] > b[value]) {
                    return type === 'asc' ? 1 : -1;
                }
                return 0;
            })
        }, () => this.getDataPage())
    }
    handlePageChange = activePage => {
        this.getDataPage(activePage)
    }
    onChangeOption = perPage => {

        this.setState({ perPage: Number(perPage) }, () => this.getDataPage())
    }
    onSearchData = value => {
        const dataSearch = this.props.data.filter(obj => {
            if (obj.invoice_number && obj.invoice_number.toLowerCase().includes(value.toLowerCase())) {
                return true
            }
            if (obj.subject && obj.subject.toLowerCase().includes(value.toLowerCase())) {
                return true
            }
            if (obj.invoice_date && obj.invoice_date.includes(value)) {
                return true
            }
            if (obj.discount && obj.discount.toLowerCase().includes(value.toLowerCase())) {
                return true
            }
            if (obj.invoice_status_label && obj.invoice_status_label.toLowerCase().includes(value.toLowerCase())) {
                return true
            }
            return false
        })
        this.setState({
            dataSort: dataSearch
        }, () => this.getDataPage())
    }
    getDataPage = activePage => {

        const activePageDefault = activePage ? activePage : this.state.activePage
        const start_slice = (activePageDefault - 1) * this.state.perPage
        if (activePage) {
            this.setState({
                activePage
            })
        }
        this.setState({
            dataPage: this.state.dataSort.slice(start_slice, start_slice + this.state.perPage)
        })
    }

    render() {

        const { dataPage, activePage, perPage, dataSort } = this.state

        return (
            <div className="table">
                <h3 className="tbData_title">DataTables Example</h3>
                <div className="tbData_action">
                    <TbSelect onChangeOption={this.onChangeOption} />
                    <TbSearch onSearchData={this.onSearchData} />
                </div>
                <TbData itemPerPage={dataPage} onDataSort={this.onDataSort} />
                <div className="tbPageNav">
                    <span className="tbPageNav_text">Showing {(activePage - 1) * perPage + 1} to {activePage * perPage} of {dataSort.length} entries</span>
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={perPage}
                        totalItemsCount={dataSort.length}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                        prevPageText="Previous"
                        nextPageText="Next"
                        firstPageText={false}
                        lastPageText={false}
                    />
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        data: state.data
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: (data) => dispatch({type: "INIT_DATA", data})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);