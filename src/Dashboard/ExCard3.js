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
                <Card.Header>Number of Visitors</Card.Header>
            {/* </Alert> */}
            {/* <Alert variant = 'warning'> */}
            <Card.Body>
                <Card.Title>5555</Card.Title>
                <br></br>
                <Card.Text >
                Description: Number of Visitors
                </Card.Text>
            </Card.Body>
            {/* </Alert> */}
        </Card>
    )
}