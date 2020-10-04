import React  from 'react';
import {Table, Card, Accordion, Button, Alert}from 'react-bootstrap';


export default function (){
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Users
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Michael</td>
              <td>Meow</td>
              <td>@Cool</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Kevin</td>
              <td>Cow</td>
              <td>@Sweet</td>
            </tr>
          </tbody>
        </Table>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Additional Information
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Alert variant='danger '>You Found me </Alert>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
