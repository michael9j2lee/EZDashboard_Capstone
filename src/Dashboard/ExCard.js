import React  from 'react';
import {Card}from 'react-bootstrap';
import {Alert} from 'react-bootstrap';


export default function(){
    return (
        <Card 
        bg={'light'}
        text={'dark'}
        style={{width: '18rem'}}
        >

            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            {/* <Alert variant='dark'> */}
                <Card.Header>Throughput</Card.Header>
            {/* </Alert> */}
            {/* <Alert variant = 'warning'> */}
            <Card.Body>
                <Card.Title>100 R/S</Card.Title>
                <Card.Text >
                Description: Throughput of the service
                </Card.Text>
            </Card.Body>
            {/* </Alert> */}
        </Card>
    )
}