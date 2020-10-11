import React  from 'react';
import {Card}from 'react-bootstrap';



export default function(){
    return (
        <Card 
        bg={'light'}
        text={'dark'}
        style={{width: '18rem'}}
        >


            <Card.Header>Time since last Down</Card.Header>

            <Card.Body>
                <Card.Title>102.3 Hours</Card.Title>
                <br></br>
                <Card.Text >
                Description: Time since last incident
                </Card.Text>
            </Card.Body>

        </Card>
    )
}