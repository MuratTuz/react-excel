
import * as XLSX from 'xlsx';

/**
 * This service gets excel file name as a parameter and reads the file and then converts the file data into 
 * JSON array using xlsx package 
 * @param {String} file Excel file name from which is to create JSON array
 * @returns a promise object which contains excel file data in JSON format
 */

const readExcel = (file) => {
    const promise = new Promise((res, rej) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = (e) => {
            const bufferArray = e.target.result;
            const wb = XLSX.read(bufferArray, { type: 'buffer' });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws);
            res(data);
        }
        fileReader.onerror = (err) => {
            rej(err);
        }
    })

    return promise;
}

export default readExcel;