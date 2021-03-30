
import excelService from '../services/excelService';

export default function ExcelTable(params) {
    return (
        <>
            <input className="btn btn-primary" type='file' onChange={(e) => {
                const file = e.target.files[0];
                excelService(file).then(data => params.onFileChange(data));
            }} />
        </>
    )
}