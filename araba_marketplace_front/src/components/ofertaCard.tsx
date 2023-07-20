import React from 'react'
import car from '../img/CAR-1.svg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardOferta () {
    return (      
        <Card className='cardOferta'>
            <Card.Img src={car} alt="imagen" />
            <Card.Body>
                <Card.Title className="modelo"></Card.Title>
                <Card.Text>
                    <div></div>
                    <div></div>
                </Card.Text>
                <div>
                    <Card.Text className="precio"></Card.Text>
                    <Button>Me interesa</Button>
                </div>
            </Card.Body>
        </Card>
    )
}