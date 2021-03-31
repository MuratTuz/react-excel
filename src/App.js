import { Card, Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import ExcelTable from './components/excelTable';
import FileButton from './components/fileButton';

import excelService from './services/excelService';

/**
 * This component create main page view using other two components and a service
 * @returns Page view HTML codes
 */

function App() {
  const noFileWords = 'There is no excel file selected yet';
  const titleContent = 'The content of the excel file is below';
  const [excelData, setExcelData] = useState('');
  const [fileName, setFileName] = useState('');

  // retrieve excel file data by using a service of excelService. This useEffect follows 
  // the changings of file name.
  useEffect(() => {
    // this line ensure to not working when components are loaded for the first time
    // So, if there is no file selected then do not run excelService service
    fileName && excelService(fileName).then(data => setExcelData(data));
  }, [fileName])

  // state lifting using hooks for getting excel file name from FileButton component
  const handleChange = fileName => setFileName(fileName);

  return (
    <Container>
      <Row>
        <Col md={8} className='clearfix'>
          <Card>
            <Card.Header as="h1">Read Excel File</Card.Header>
            <Card.Body>
              <Card.Title as='h3'>{excelData ? titleContent : noFileWords}</Card.Title>
              <Card.Text>
                {excelData ? <ExcelTable data={excelData} /> : ''}
              </Card.Text>
              <FileButton onFileChange={handleChange} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
