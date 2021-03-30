
import * as XLSX from 'xlsx';

const readExcel = (file) => {
    const promise = new Promise((res, rej) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = (e) => {
            const bufferArray = e.target.result;
            const wb = XLSX.read(bufferArray, { type: 'buffer' });
            const wsname = wb.SheetNames[0] + '';
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_add_json(ws);
            res(data);
        }
        fileReader.onerror = (err) => {
            rej(err);
        }
    })

    promise.then((d) => {
        console.log(d);
    })

    return promise;
}

export default readExcel;