import React from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

export default function CardOpinion () {
    return (
        <Card className='cardOpinion'>
            <Card.Img />
            <Card.Body>
                <Card.Text>
                    Lorem ipsum dolor sit amet
                </Card.Text>
                <Card.Title>
                    Conchi Enríquez
                </Card.Title>
                <Card.Text>
                    Abril 2023
                </Card.Text>
                <Card.Text>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalf} />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}