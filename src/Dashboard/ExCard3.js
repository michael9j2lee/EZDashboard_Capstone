import React  from 'react';
import {Card}from 'react-bootstrap';



export default function(){
    return (
        <Card 
        bg={'light'}
        text={'dark'}
        style={{width: '18rem'}}
        >

            <Card.Header>Number of users</Card.Header>

            <Card.Body>
                <Card.Title>4623</Card.Title>
                <br></br>
                <Card.Text >
                Description: Number of Users total
                </Card.Text>
            </Card.Body>
 
        </Card>
    )
}