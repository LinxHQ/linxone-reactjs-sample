import React from "react"
import Table from "../components/section/table/Table";
import './TablePage.scss'

class TablePage extends React.Component{
    render(){
        return (
            <div className="tablePage">
                <h3 className="tablePage_title">Tables</h3>
                <p className="tablePage_desc">
                    DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a href="#0">official DataTables documentation.</a>.
                </p>
                <Table />
            </div>
        )
    }
}

export default TablePage;