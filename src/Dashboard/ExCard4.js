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
                <Card.Header>Gross</Card.Header>
            {/* </Alert> */}
            {/* <Alert variant = 'warning'> */}
            <Card.Body>
                <Card.Title>$9999.99</Card.Title>
                <br></br>
                <Card.Text >
                Description: Total Gross
                </Card.Text>
            </Card.Body>
            {/* </Alert> */}
        </Card>
    )
}