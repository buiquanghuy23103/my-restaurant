import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from 'reactstrap';
import { BASE_URL } from '../shared/baseUrl';

type Props = {
    image: string,
    name: string,
    designation?: string | null,
    description: string
};

export default function HomeCard({ image, name, designation, description }: Props) {
    return (
        <Card>
            <CardImg src={ BASE_URL + image } alt={ name } />
            <CardBody>
                <CardTitle>{ name }</CardTitle>
                { designation && <CardSubtitle>{ designation }</CardSubtitle> }
            </CardBody>
        </Card>
    )
}
