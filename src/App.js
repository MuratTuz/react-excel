import { Card, Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import ExcelTable from './components/excelTable';
import FileButton from './components/fileButton';

function App() {
  const warn = 'There is no excel file selected yet';
  const titleContent = 'The content of the excel file is below';
  const [excelFile, setExcelFile] = useState('');

  // state lifting using hooks
  const handleChange = fileData => setExcelFile(fileData);

  return (
    <Container>
      <Row>
        <Col md={8} className='clearfix'>
          <Card>
            <Card.Header as="h1">Read Excel File</Card.Header>
            <Card.Body>
              <Card.Title as='h3'>{excelFile ? titleContent : warn}</Card.Title>
              <Card.Text>
                {excelFile ? <ExcelTable data={excelFile} /> : ''}
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
