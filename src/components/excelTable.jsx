

import { Table } from 'react-bootstrap';

export default function ExcelTable(params) {
    return (

        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>No</th>
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