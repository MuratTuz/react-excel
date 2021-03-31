

import { Table } from 'react-bootstrap';

/**
 * This component creates a table view of the selected excel file  
 * 
 * @param {[JSON]} params JSON array which contains excel file data
 * @returns Table view HTML codes
 */
export default function ExcelTable(params) {
    return (

        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>No</th>
                    {/* Get excel table header values using first JSON array of index 0. 
                    Here is just used the keys of first element in the JSON array */}
                    {Object.keys(params.data[0]).map((element, index) => (
                        <th key={`th${index}`}>{element}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    params.data.map((element, index) => {
                        return (
                            <tr key={`tr${index}`}>
                                <td>{index}</td>
                                {/* Get excel table cell values using whole JSON array. 
                                Here is just used the values of the JSON array */}
                                {Object.values(element).map((val, index) => (
                                    <td key={`td${index}`}>{val}</td>
                                ))}
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}