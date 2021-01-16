import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from 'reactstrap';

type Props = {
    image: string,
    name: string,
    designation?: string | null,
    description: string
};

export default function HomeCard({ image, name, designation, description }: Props) {
    return (
        <Card>
            <CardImg src={ image } alt={ name } />
            <CardBody>
                <CardTitle>{ name }</CardTitle>
                { designation && <CardSubtitle>{ designation }</CardSubtitle> }
            </CardBody>
        </Card>
    )
}
