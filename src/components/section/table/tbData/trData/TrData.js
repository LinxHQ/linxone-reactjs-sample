import React from 'react'
import './TrData.scss'

class TrData extends React.Component {
    render() {
        const { dataItem } = this.props;

        return (
            <tr className="trData">
                <td className="tdData">{dataItem.invoice_number}</td>
                <td className="tdData">{dataItem.subject}</td>
                <td className="tdData">	{dataItem.invoice_date}</td>
                <td className="tdData">{dataItem.discount}</td>
                <td className="tdData">{dataItem.invoice_status_label}</td>
            </tr>
        )
    }
}

export default TrData;