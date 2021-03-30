import { Card } from 'react-bootstrap';
import ExcelTable from "./components/excelTable";
import { useState } from 'react';
import './App.css';

function App() {
  const warn = 'There is no excel file selected yet';
  const [excelFile, setExcelFile] = useState('');

  const handleChange = fileData => setExcelFile(fileData);
  return (
    <Card>
      <Card.Header as="h1">Read Excel File</Card.Header>
      <Card.Body>
        <Card.Title as='h3'>The content of the excel file is below</Card.Title>
        <Card.Text>
          {excelFile || warn}
        </Card.Text>
        <ExcelTable onFileChange={handleChange} />
      </Card.Body>
    </Card>
  );
}

export default App;
