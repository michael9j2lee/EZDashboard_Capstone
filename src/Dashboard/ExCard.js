import React  from 'react';
import {Card}from 'react-bootstrap';


export default function(){
    return (
        <Card 
        bg={'light'}
        text={'dark'}
        style={{width: '18rem'}}
        >

            <Card.Header>Throughput Average for WebService</Card.Header>
            <Card.Body>
                <Card.Title>53 R/S</Card.Title>
                <br></br>
                <Card.Text >
                Description: Throughput of the service
                </Card.Text>
            </Card.Body>
            {/* </Alert> */}
        </Card>
    )
}