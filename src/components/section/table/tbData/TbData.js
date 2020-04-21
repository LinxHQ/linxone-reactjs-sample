import React from 'react'
import './TbData.scss'
import TrData from './trData/TrData'

class TbData extends React.Component {

    changeSort = e => {
        const elementActive = e.target;
        if(elementActive.className === "asc"){
            elementActive.classList.remove('asc')
            elementActive.classList.add('des')
            this.props.onDataSort(elementActive.className, e.target.innerHTML.toLowerCase())
        }else if(elementActive.className === "des"){
            elementActive.classList.remove('des')
            elementActive.classList.add('asc')
            this.props.onDataSort(elementActive.className, e.target.innerHTML.toLowerCase())
        }else{
            document.querySelector('.asc') && document.querySelector('.asc').classList.remove('asc')
            document.querySelector('.des') && document.querySelector('.des').classList.remove('des')
            elementActive.classList.add('asc')
            this.props.onDataSort(elementActive.className, e.target.innerHTML.toLowerCase())
        }
    }

    render() {
        const { itemPerPage } = this.props
        return (
            <div className="tbContainer">
                <table className="tbData">
                    <thead>
                        <tr>
                            <th onClick={this.changeSort} className="asc">Invoice Number</th>
                            <th onClick={this.changeSort}>Subject</th>
                            <th onClick={this.changeSort}>Invoice Date</th>
                            <th onClick={this.changeSort}>Discount</th>
                            <th onClick={this.changeSort}>Invoice Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            itemPerPage.map((item, i) => <TrData dataItem={item} key={i} />)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TbData;