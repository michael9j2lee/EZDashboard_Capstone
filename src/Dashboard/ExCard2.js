import React  from 'react';
import {Card,Alert,Table} from 'react-bootstrap';


export default function(){
    return (
        <Card 
        bg={'light'}
        text={'dark'}
        style={{width: '18rem'}}
        >

            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            {/* <Alert variant='dark'> */}
            {/* </Alert> */}
            {/* <Alert variant = 'warning'> */}
            <Card.Body>
                <Card.Title>Server Status</Card.Title>
                <Card.Text >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Server</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>East Coast</td>
                        <td><Alert variant = 'success'>Valid</Alert></td>
                        </tr>
                        <tr>
                        <td>West Coast</td>
                        <td><Alert variant = 'success'>Valid</Alert></td>
                        </tr>
                        <tr>
                        <td>Europe</td>
                        <td><Alert variant = 'warning'>Warning</Alert></td>
                        </tr>
                    </tbody>
                </Table>
                </Card.Text>
            </Card.Body>
            {/* </Alert> */}
        </Card>
    )
}